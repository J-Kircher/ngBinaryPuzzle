import { Logger } from '../../shared/services/logger';

export class Validater {

  // Validation of solved puzzle
  //    -- three num in a row
  //    -- correct num of 1s and 0s in row/col
  //    -- duplicate cols/rows
  //    -- etc.
  static validate(showLog: boolean, gridSize: number, tableData: any): boolean {
    Logger.log(showLog, '[Validater] Start');
    const rowArr = [];
    for (let row = 0; row < gridSize; row++) {
      let zeroCount = 0;
      let rowString = '';
      for (let col = 0; col < gridSize; col++) {
        if (tableData[row][col].value === 0) {
          zeroCount++;
        }
        rowString += '' + tableData[row][col].value;
      }
      // Logger.log(showLog, '[Validater] rowString: ' + rowString);
      if (zeroCount !== (gridSize / 2)) {
        Logger.log(showLog, '[Validater] Wrong number of zeros/ones in row ' + row);
        return false;
      }
      if (rowString.indexOf('000') > -1) {
        Logger.log(showLog, '[Validater] Three zeros in a row in row ' + row);
        return false;
      }
      if (rowString.indexOf('111') > -1) {
        Logger.log(showLog, '[Validater] Three ones in a row in row ' + row);
        return false;
      }
      rowArr.push(rowString);
    }
    const uniqueRowArr = [...Array.from(new Set(rowArr))];
    if (rowArr.length > uniqueRowArr.length) {
      Logger.log(showLog, '[Validater] Rows are not all unique');
      return false;
    }

    Logger.log(showLog, '[Validater] Rows are valid');

    const colArr = [];
    for (let col = 0; col < gridSize; col++) {
      let zeroCount = 0;
      let colString = '';
      for (let row = 0; row < gridSize; row++) {
        if (tableData[row][col].value === 0) {
          zeroCount++;
        }
        colString += '' + tableData[row][col].value;
      }
      // Logger.log(showLog, '[Validater] colString: ' + colString);
      if (zeroCount !== (gridSize / 2)) {
        Logger.log(showLog, '[Validater] Wrong number of zeros/ones in col ' + col);
        return false;
      }
      if (colString.indexOf('000') > -1) {
        Logger.log(showLog, '[Validater] Three zeros in a row in col ' + col);
        return false;
      }
      if (colString.indexOf('111') > -1) {
        Logger.log(showLog, '[Validater] Three ones in a row in col ' + col);
        return false;
      }
      colArr.push(colString);
    }
    const uniqueColArr = [...Array.from(new Set(colArr))];
    if (colArr.length > uniqueColArr.length) {
      Logger.log(showLog, '[Validater] Cols are not all unique');
      return false;
    }

    Logger.log(showLog, '[Validater] Cols are valid');

    return true;
  }
}
