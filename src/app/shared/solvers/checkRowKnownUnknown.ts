import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckRowKnownUnknown {

  // This solver will look for rows that match 1nn0 or 0nn1 and have one other null space
  // If the row has all but one of its zeros, then the remaining cell should be a one
  // If the row has all but one of its ones, then the remaining cell should be a zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckRowKnownUnknown] Start');
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
        const ma: RegExpMatchArray = rowString.match('1nn+0|0nn+1');
        if (ma != null) {
          // console.log('ma: ' + ma);
          // console.table(ma);
          const startPos = ma.index;
          const endPos = ma.index + ma[0].length - 1;
          for (let col = 0; col < gridSize; col++) {
            // console.log('checking col ' + col);
            // console.log('first exp part: ' + (tableData[row][col].value === null));
            // console.log('second exp part: ' + !(col >= startPos && col <= endPos));
            // console.log('full exp: ' + (tableData[row][col].value === null && !(col >= startPos && col <= endPos)));
            if (tableData[row][col].value === null && !(col >= startPos && col <= endPos)) {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckRowKnownUnknown] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
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
