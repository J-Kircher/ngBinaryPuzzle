import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckMiddle {

  // This solver will look for cells that are in between two zeros or two ones
  // If in between two zeros, then the cell should be a one
  // If in between two ones, then the cell should be a zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckMiddle] Start');
    let moveMade = false;
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (tableData[row][col].value === null) {
          const above = (row - 1 >= 0) ? tableData[row - 1][col].value : null;
          const below = (row + 1 < gridSize) ? tableData[row + 1][col].value : null;
          if (above !== null && above === below) {
            Logger.log(showLog(LogLevels.INFO), '[CheckMiddle.1] Setting cell[' + row + '][' + col + '] to: ' + (above === 1 ? 0 : 1));
            tableData[row][col].value = above === 1 ? 0 : 1;
            moveMade = true;
          } else {
            const left = (col - 1 >= 0) ? tableData[row][col - 1].value : null;
            const right = (col + 1 < gridSize) ? tableData[row][col + 1].value : null;
            if (left !== null && left === right) {
              Logger.log(showLog(LogLevels.INFO), '[CheckMiddle.2] Setting cell[' + row + '][' + col + '] to: ' + (left === 1 ? 0 : 1));
              tableData[row][col].value = left === 1 ? 0 : 1;
              moveMade = true;
            }
          }
        }
      }
    }
    return moveMade;
  }
}
