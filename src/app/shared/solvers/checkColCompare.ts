import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckColCompare {

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    const completeCols: string[] = new Array();
    Logger.log(showLog(LogLevels.TRACE), '[CheckColCompare] Start');
    let moveMade = false;
    for (let col = 0; col < gridSize; col++) {
      let colString = '';
      for (let row = 0; row < gridSize; row++) {
        const currVal = tableData[row][col].value;
        colString += '' + (currVal === null ? 'n' : currVal);
      }
      // console.log(colString);
      if (colString.indexOf('n') === -1) {
        // console.log('Complete Col');
        completeCols.push(colString);
      }
    }
    console.log('Complete Cols built');
    console.log('Complete Cols: ' + completeCols.length);

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
      if (allButOneZero) {
        // console.log('Compare this col with complete cols');
        for (let compColIdx = 0; compColIdx < completeCols.length; compColIdx++) {
          // console.log('  looking at: ' + completeCols[compColIdx]);
          // console.log('  compare to: ' + colString);
          for (let idx = 0; idx < colString.length; idx++) {
            if (colString[idx] === 'n' && completeCols[compColIdx][idx] === '0') {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckColCompare] Setting cell[' + idx + '][' + col + '] to ' + 1);
              tableData[idx][col].value = 1;
              moveMade = true;
            }
          }
        }
      }
      if (allButOneOne) {
        // console.log('Compare this col with complete cols');
        for (let compColIdx = 0; compColIdx < completeCols.length; compColIdx++) {
          // console.log('  looking at: ' + completeCols[compColIdx]);
          // console.log('  compare to: ' + colString);
          for (let idx = 0; idx < colString.length; idx++) {
            if (colString[idx] === 'n' && completeCols[compColIdx][idx] === '1') {
              Logger.log(showLog(LogLevels.INFO),
                '[CheckColCompare] Setting cell[' + idx + '][' + col + '] to ' + 0);
              tableData[idx][col].value = 0;
              moveMade = true;
            }
          }
        }
      }
    }
    return moveMade;
  }
}
