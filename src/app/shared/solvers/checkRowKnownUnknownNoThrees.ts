import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckRowKnownUnknownNoThrees {

  // This solver will look for rows that match 1nn0 or 0nn1 and have a possible three consecutive values
  // If there is all but two zeros and setting a null cell to zero would leave three consecutive ones, then set this cell to one
  // If there is all but two ones and setting a null cell to one would leave three consecutive zeros, then set this cell to zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckRowKnownUnknownNoThrees] Start');
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

      const allButTwoZero = (zeroCount === (gridSize / 2) - 2);
      const allButTwoOne = (oneCount === (gridSize / 2) - 2);
      if (allButTwoZero || allButTwoOne) {
        Logger.log(showLog(LogLevels.TRACE), '[CheckRowKnownUnknownNoThrees] All but two ' + (allButTwoZero ? 'zero' : 'one'));
        // Can put two more zero/one in row
        const ma: RegExpMatchArray = rowString.match('1nn0|0nn1');
        if (ma != null) {
          const startPos = ma.index;
          const endPos = ma.index + ma[0].length - 1;

          // Temporarily fill in known/unknowns to search for No Threes
          rowString = rowString.replace('1nn0', '1010').replace('0nn1', '0101');

          let no3 = null;
          const no30: RegExpMatchArray = rowString.match('0nn|n0n|nn0');
          const no31: RegExpMatchArray = rowString.match('1nn|n1n|nn1');
          if (allButTwoZero && no31 !== null) {
              no3 = no31;
          }
          if (allButTwoOne && no30 !== null) {
              no3 = no30;
          }
          if (no3 != null) {
            Logger.log(showLog(LogLevels.TRACE), '[CheckRowKnownUnknownNoThrees] Match for possible three zeros/ones');
            const startPosNo3 = no3.index;
            const endPosNo3 = no3.index + no3[0].length - 1;
              for (let col = 0; col < gridSize; col++) {
              if (tableData[row][col].value === null && !(col >= startPos && col <= endPos) && !(col >= startPosNo3 && col <= endPosNo3)) {
                Logger.log(showLog(LogLevels.INFO),
                  '[CheckRowKnownUnknownNoThrees] Setting cell[' + row + '][' + col + '] to ' + (allButTwoZero ? 1 : 0));
                tableData[row][col].value = allButTwoZero ? 1 : 0;
                moveMade = true;
              }
            }
          }
        }
      }
    }
    return moveMade;
  }
}
