import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckColsNoThrees {

  // This solver will look for cols that have a possible three consecutive values
  // If there is all but one zero and setting a null cell to zero would leave three consecutive ones, then set this cell to one
  // If there is all but one one and setting a null cell to one would leave three consecutive zeros, then set this cell to zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckColsNoThrees] Start');
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

      if (allButOneZero || allButOneOne) {
        // Can put one more zero/one in col
        let no3 = null;
        const no30: RegExpMatchArray = colString.match('0nn|n0n|nn0');
        const no31: RegExpMatchArray = colString.match('1nn|n1n|nn1');
        if (allButOneZero && no31 !== null) {
            no3 = no31;
        }
        if (allButOneOne && no30 !== null) {
            no3 = no30;
        }
        if (no3 != null) {
          Logger.log(showLog(LogLevels.TRACE), '[CheckColsNoThrees] Match for possible three zeros/ones');
          const startPos = no3.index;
          const endPos = no3.index + no3[0].length - 1;
          for (let row = 0; row < gridSize; row++) {
            if (tableData[row][col].value === null && !(row >= startPos && row <= endPos)) {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckColsNoThrees] Setting cell[' + col + '][' + row + '] to ' + (allButOneZero ? 1 : 0));
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
