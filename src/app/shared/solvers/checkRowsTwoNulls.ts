import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckRowsTwoNulls {

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckRowsTwoNulls] Start');
    let moveMade = false;
    for (let row = 0; row < gridSize; row++) {
      let zeroCount = 0;
      let oneCount = 0;
      let rowString = '';
      for (let col = 0; col < gridSize; col++) {
        if (tableData[row][col].value === 0) {
          zeroCount++;
        }
        if (tableData[row][col].value === 1) {
          oneCount++;
        }
        const currVal = tableData[row][col].value;
        rowString += '' + (currVal === null ? 'n' : currVal);
      }
      const allButOneZero = (zeroCount === (gridSize / 2) - 1);
      const allButOneOne = (oneCount === (gridSize / 2) - 1);
      if ((allButOneZero && rowString.indexOf('1nn1') > -1)
          // Need to put last zero in 1nn1, all else are 1
        || (allButOneOne && rowString.indexOf('0nn0') > -1)) {
          // Need to put last one in 0nn0, all else are 0
        const foundPos = rowString.indexOf('0nn0') > -1 ? rowString.indexOf('0nn0') : rowString.indexOf('1nn1');
        if (foundPos > -1) {
          const foundCols = [ foundPos, foundPos + 1, foundPos + 2, foundPos + 3 ];
          Logger.log(showLog(LogLevels.TRACE), '[CheckRowsTwoNulls] Cols: ' + foundCols);
          for (let col = 0; col < gridSize; col++) {
            if (tableData[row][col].value === null && !(foundCols.indexOf(col) > -1)) {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckRowsTwoNulls] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
              tableData[row][col].value = allButOneZero ? 1 : 0;
              moveMade = true;
            }
          }
        }
      }
    }
    return moveMade;
  }
}
