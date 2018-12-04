import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckColsTwoNulls {

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckColsTwoNulls] Start');
    let moveMade = false;
    for (let col = 0; col < gridSize; col++) {
      let zeroCount = 0;
      let oneCount = 0;
      let colString = '';
      for (let row = 0; row < gridSize; row++) {
        if (tableData[row][col].value === 0) {
          zeroCount++;
        }
        if (tableData[row][col].value === 1) {
          oneCount++;
        }
        const currVal = tableData[row][col].value;
        colString += '' + (currVal === null ? 'n' : currVal);
      }
      const allButOneZero = (zeroCount === (gridSize / 2) - 1);
      const allButOneOne = (oneCount === (gridSize / 2) - 1);
      if ((allButOneZero && colString.indexOf('1nn1') > -1)
          // Need to put last zero in 1nn1, all else are 1
        || (allButOneOne && colString.indexOf('0nn0') > -1)) {
          // Need to put last one in 0nn0, all else are 0
        const foundPos = colString.indexOf('0nn0') > -1 ? colString.indexOf('0nn0') : colString.indexOf('1nn1');
        if (foundPos > -1) {
          const foundRows = [ foundPos, foundPos + 1, foundPos + 2, foundPos + 3 ];
          Logger.log(showLog(LogLevels.TRACE), '[CheckColsTwoNulls] Rows: ' + foundRows);
          for (let row = 0; row < gridSize; row++) {
            if (tableData[row][col].value === null && !(foundRows.indexOf(row) > -1)) {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckColsTwoNulls] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
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
