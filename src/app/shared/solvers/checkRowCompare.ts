import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckRowCompare {

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    const completeRows: string[] = new Array();
    Logger.log(showLog(LogLevels.TRACE), '[CheckRowCompare] Start');
    let moveMade = false;
    for (let row = 0; row < gridSize; row++) {
      let rowString = '';
      for (let col = 0; col < gridSize; col++) {
        const currVal = tableData[row][col].value;
        rowString += '' + (currVal === null ? 'n' : currVal);
      }
      // console.log(rowString);
      if (rowString.indexOf('n') === -1) {
        // console.log('Complete Row');
        completeRows.push(rowString);
      }
    }
    // console.log('Complete Rows built');
    // console.log('Complete Rows: ' + completeRows.length);

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
      if (allButOneZero) {
        // console.log('Compare this row with complete rows');
        for (let compRowIdx = 0; compRowIdx < completeRows.length; compRowIdx++) {
          // console.log('  looking at: ' + completeRows[compRowIdx]);
          // console.log('  compare to: ' + rowString);
          // Check to see if all non 'n's match
          let rowMatch = true;
          for (let idx = 0; idx < rowString.length; idx++) {
            if (rowString[idx] !== 'n' && rowString[idx] !== completeRows[compRowIdx][idx]) {
              rowMatch = false;
            }
          }
          if (rowMatch) {
            // console.log('Rows match - good to compare');
            for (let idx = 0; idx < rowString.length; idx++) {
              if (rowString[idx] === 'n' && completeRows[compRowIdx][idx] === '0') {
                Logger.log(showLog(LogLevels.INFO),
                  '[CheckRowCompare] Setting cell[' + row + '][' + idx + '] to ' + 1);
                tableData[row][idx].value = 1;
                moveMade = true;
              }
            }
          }
        }
      }
      if (allButOneOne) {
        // console.log('Compare this row with complete rows');
        for (let compRowIdx = 0; compRowIdx < completeRows.length; compRowIdx++) {
          // console.log('  looking at: ' + completeRows[compRowIdx]);
          // console.log('  compare to: ' + rowString);
          // Check to see if all non 'n's match
          let rowMatch = true;
          for (let idx = 0; idx < rowString.length; idx++) {
            if (rowString[idx] !== 'n' && rowString[idx] !== completeRows[compRowIdx][idx]) {
              rowMatch = false;
            }
          }
          if (rowMatch) {
            // console.log('Rows match - good to compare');
            for (let idx = 0; idx < rowString.length; idx++) {
              if (rowString[idx] === 'n' && completeRows[compRowIdx][idx] === '1') {
                Logger.log(showLog(LogLevels.INFO),
                  '[CheckRowCompare] Setting cell[' + row + '][' + idx + '] to ' + 0);
                tableData[row][idx].value = 0;
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
