import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckColTotals {

  // This solver will look for cells in cols that are in null and
  //   the col has a full amount of zeros or ones
  // If the col has all its zeros, then the rest of the cells should be a one
  // If the col has all its ones, then the rest of the cells should be a zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckColTotals] Start');
    let moveMade = false;
    for (let col = 0; col < gridSize; col++) {
      let zeroCount = 0;
      let oneCount = 0;
      for (let row = 0; row < gridSize; row++) {
        if (tableData[row][col].value === 0) {
          zeroCount++;
        }
        if (tableData[row][col].value === 1) {
          oneCount++;
        }
      }
      if (zeroCount === gridSize / 2) {
        for (let row = 0; row < gridSize; row++) {
          if (tableData[row][col].value === null) {
            Logger.log(showLog(LogLevels.INFO), '[CheckColTotals.1] Setting cell[' + row + '][' + col + '] to 1');
            tableData[row][col].value = 1;
            moveMade = true;
          }
        }
      }
      if (oneCount === gridSize / 2) {
        for (let row = 0; row < gridSize; row++) {
          if (tableData[row][col].value === null) {
            Logger.log(showLog(LogLevels.INFO), '[CheckColTotals.2] Setting cell[' + row + '][' + col + '] to 0');
            tableData[row][col].value = 0;
            moveMade = true;
          }
        }
      }
    }
    return moveMade;
  }
}
