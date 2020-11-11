import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckColKnownUnknown {

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckColKnownUnknown] Start');
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
        const ma: RegExpMatchArray = colString.match('1nn+0|0nn+1');
        if (ma != null) {
          console.log('ma: ' + ma);
          console.table(ma);
          const startPos = ma.index;
          const endPos = ma.index + ma[0].length - 1;
          for (let row = 0; row < gridSize; row++) {
            console.log('checking row ' + row);
            console.log('first exp part: ' + (tableData[row][col].value === null));
            console.log('second exp part: ' + !(row >= startPos && row <= endPos));
            console.log('full exp: ' + (tableData[row][col].value === null && !(row >= startPos && row <= endPos)));
            if (tableData[row][col].value === null && !(row >= startPos && row <= endPos)) {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckColKnownUnknown] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
              console.log('[CheckColKnownUnknown] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
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
