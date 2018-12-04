import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckTwins {

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckTwins] Start');
    let moveMade = false;
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (tableData[row][col].value === null) {
          const above1 = (row - 1 >= 0) ? tableData[row - 1][col].value : null;
          const above2 = (row - 2 >= 0) ? tableData[row - 2][col].value : null;
          if (above1 !== null && above1 === above2) {
            Logger.log(showLog(LogLevels.INFO), '[CheckTwins.1] Setting cell[' + row + '][' + col + '] to: ' + (above1 === 1 ? 0 : 1));
            tableData[row][col].value = above1 === 1 ? 0 : 1;
            moveMade = true;
          } else {
            const below1 = (row + 1 < gridSize) ? tableData[row + 1][col].value : null;
            const below2 = (row + 2 < gridSize) ? tableData[row + 2][col].value : null;
            if (below1 !== null && below1 === below2) {
              Logger.log(showLog(LogLevels.INFO), '[CheckTwins.2] Setting cell[' + row + '][' + col + '] to: ' + (below1 === 1 ? 0 : 1));
              tableData[row][col].value = below1 === 1 ? 0 : 1;
              moveMade = true;
            } else {
              const left1 = (col - 1 >= 0) ? tableData[row][col - 1].value : null;
              const left2 = (col - 2 >= 0) ? tableData[row][col - 2].value : null;
              if (left1 !== null && left1 === left2) {
                Logger.log(showLog(LogLevels.INFO), '[CheckTwins.3] Setting cell[' + row + '][' + col + '] to: ' + (left1 === 1 ? 0 : 1));
                tableData[row][col].value = left1 === 1 ? 0 : 1;
                moveMade = true;
              } else {
                const right1 = (col + 1 < gridSize) ? tableData[row][col + 1].value : null;
                const right2 = (col + 2 < gridSize) ? tableData[row][col + 2].value : null;
                if (right1 !== null && right1 === right2) {
                  Logger.log(showLog(LogLevels.INFO), '[CheckTwins.4] Setting cell[' + row + '][' + col + '] to: ' + (right1 === 1 ? 0 : 1));
                  tableData[row][col].value = right1 === 1 ? 0 : 1;
                  moveMade = true;
                }
              }
            }
          }
        }
      }
    }
    return moveMade;
  }
}
