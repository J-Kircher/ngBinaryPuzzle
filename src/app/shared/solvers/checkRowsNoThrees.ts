import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckRowsNoThrees {

  //    All but one, allow no three in a row of other (2 - Hard)
  //      CheckRowsNoThrees/CheckColsNoThrees?
  //      example: 12VH 2018-11-29 (row 11)
  //      1 0 0 1 0 0 1 0 _ 1 _ _
  //      first blank should not be a zero, would leave 3 1's in a row

  // This solver will look for rows that have a possible three consecutive values
  // If there is all but one zero and setting a null cell to zero would leave three consecutive ones, then set this cell to one
  // If there is all but one one and setting a null cell to one would leave three consecutive zeros, then set this cell to zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckRowsNoThrees] Start');
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

      if (allButOneZero || allButOneOne) {
        // Can put one more zero/one in row
        const ma: RegExpMatchArray = rowString.match('0nn|n0n|nn0|1nn|n1n|nn1');
        if (ma != null) {
          Logger.log(showLog(LogLevels.TRACE), '[CheckRowsNoThrees] Match for possible three zeros/ones');
          const startPos = ma.index;
          const endPos = ma.index + ma[0].length - 1;
          for (let col = 0; col < gridSize; col++) {
            if (tableData[row][col].value === null && !(col >= startPos && col <= endPos)) {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckRowsNoThrees] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
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
