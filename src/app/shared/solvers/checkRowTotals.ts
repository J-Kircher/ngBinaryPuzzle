import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckRowTotals {

  // This solver will look for cells in rows that are in null and
  //   the row has a full amount of zeros or ones
  // If the row has all its zeros, then the rest of the cells should be a one
  // If the row has all its ones, then the rest of the cells should be a zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckRowTotals] Start');
    let moveMade = false;
    for (let row = 0; row < gridSize; row++) {
      let zeroCount = 0;
      let oneCount = 0;
      for (let col = 0; col < gridSize; col++) {
        if (tableData[row][col].value === 0) {
          zeroCount++;
        }
        if (tableData[row][col].value === 1) {
          oneCount++;
        }
      }
      if (zeroCount === gridSize / 2) {
        for (let col = 0; col < gridSize; col++) {
          if (tableData[row][col].value === null) {
            Logger.log(showLog(LogLevels.INFO), '[CheckRowTotals.1] Setting cell[' + row + '][' + col + '] to 1');
            tableData[row][col].value = 1;
            moveMade = true;
          }
        }
      }
      if (oneCount === gridSize / 2) {
        for (let col = 0; col < gridSize; col++) {
          if (tableData[row][col].value === null) {
            Logger.log(showLog(LogLevels.INFO), '[CheckRowTotals.2] Setting cell[' + row + '][' + col + '] to 0');
            tableData[row][col].value = 0;
            moveMade = true;
          }
        }
      }
    }
    return moveMade;
  }
}
