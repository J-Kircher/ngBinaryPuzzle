import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckRowsThreeNulls {

  // This solver will look for rows that have three consecutive null spaces
  // If the row has all but one of its zeros or ones, then
  //   1. fill the remaining cells not part of the three nulls with the opposite of the allButOne
  //   2. If there are only three nulls and
  //      a. the column is at the left edge, then set the cell to the opposite of the allButOne
  //      b. the column is at the right edge, then set the cell to the opposite of the allButOne
  //   3. If there are only three nulls and the column is not at an edge
  //      and the borders of the nulls are equal, then fill the middle cell with the opposite of the borders
  //   4. If there are only three nulls and the column is not at an edge
  //      a. and there is all but one zero, and the borders are zero and one, then set cell next to the zero to a one
  //      b. and there is all but one zero, and the borders are one and zero, then set cell next to the zero to a one
  //      c. and there is all but one one, and the borders are one and zero, then set cell next to the one to a zero
  //      d. and there is all but one one, and the borders are zero and one, then set cell next to the one to a zero

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckRowsThreeNulls] Start');
    let moveMade = false;
    for (let row = 0; row < gridSize; row++) {
      let zeroCount = 0;
      let oneCount = 0;
      let nullCount = 0;
      for (let col = 0; col < gridSize; col++) {
        if (tableData[row][col].value === 0) {
          zeroCount++;
        }
        if (tableData[row][col].value === 1) {
          oneCount++;
        }
        if (tableData[row][col].value === null) {
          nullCount++;
        }
      }
      const allButOneZero = (zeroCount === (gridSize / 2) - 1);
      const allButOneOne = (oneCount === (gridSize / 2) - 1);
      if (allButOneZero || allButOneOne) {
        // Can put one more zero/one in row
        // Check for 3 consecutive nulls
        let foundNulls = [];
        for (let col = 1; col < (gridSize - 1); col++) {
          if (tableData[row][col].value === null) {
            const left = (col - 1 >= 0) ? tableData[row][col - 1].value : null;
            const right = (col + 1 < gridSize) ? tableData[row][col + 1].value : null;
            if (left === null && right === null) {
              Logger.log(showLog(LogLevels.TRACE), '[CheckRowsThreeNulls] THREE NULLS FOUND in row: ' + row);
              foundNulls = [ col - 1 , col, col + 1 ];
            }
          }
        }
        if (foundNulls.length) {
          Logger.log(showLog(LogLevels.TRACE), '[CheckRowsThreeNulls] foundNulls in cols: ' + foundNulls);
          for (let col = 0; col < gridSize; col++) {
            if (tableData[row][col].value === null && !(foundNulls.indexOf(col) > -1)) {
              // Fill in other null cells with the opposite of the allButOne that's not in the three
              Logger.log(showLog(LogLevels.INFO),
                '[CheckRowsThreeNulls.1] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
              tableData[row][col].value = allButOneZero ? 1 : 0;
              moveMade = true;
            }
            if (nullCount === 3 // There's only 3 nulls
              && tableData[row][col].value === null // this value is null
              ) {
              const val = allButOneZero ? 1 : 0;
              if (col === 0) { // This col is left edge
                // Fill in null cell at border with the opposite of the allButOne
                if (val === (tableData[row][col + 3].value)) {
                  // If opposite cell is not the allButOne
                  Logger.log(showLog(LogLevels.INFO), '[CheckRowsThreeNulls.2a] Setting cell[' + row + '][' + col + '] to ' + val);
                  tableData[row][col].value = allButOneZero ? 1 : 0;
                  moveMade = true;
                }
              }
              if (col === (gridSize - 1)) { // This col is right edge
                // Fill in null cell at border with the opposite of the allButOne
                if (val === (tableData[row][col - 3].value)) {
                  // If opposite cell is not the allButOne
                  Logger.log(showLog(LogLevels.INFO), '[CheckRowsThreeNulls.2b] Setting cell[' + row + '][' + col + '] to ' + val);
                  tableData[row][col].value = allButOneZero ? 1 : 0;
                  moveMade = true;
                }
              }
            }
            const leftBorder = foundNulls[0] - 1;
            const rightBorder = foundNulls[2] + 1;
            if (nullCount === 3 // There's only 3 nulls
                && (foundNulls[0] > 0 && foundNulls[2] < (gridSize - 1)) // This col is not at an edge
                ) {
              if (tableData[row][leftBorder].value === tableData[row][rightBorder].value) {
                // The edges of the nulls equal
                if (((allButOneZero && tableData[row][leftBorder].value === 1)
                  // All but one zero, edges are ones
                  || (allButOneOne && tableData[row][leftBorder].value === 0))
                    && tableData[row][foundNulls[1]].value === null // this value is null
                  ) {
                  // All but one one, edges are zeros
                  // Fill in center of null cells with the opposite of the borders (1)
                  const newVal = (tableData[row][foundNulls[0] - 1].value === 1) ? 0 : 1;
                  Logger.log(showLog(LogLevels.INFO),
                    '[CheckRowsThreeNulls.3] Setting cell[' + row + '][' + foundNulls[1] + '] to ' + newVal);
                  tableData[row][foundNulls[1]].value = newVal;
                  moveMade = true;
                }
              } else {
                if (allButOneZero
                  && (tableData[row][leftBorder].value === 0 || tableData[row][rightBorder].value === 0)) {
                  if (tableData[row][leftBorder].value === 0
                    && tableData[row][foundNulls[0]].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckRowsThreeNulls.4a] Setting cell[' + row + '][' + foundNulls[0] + '] to 1');
                    tableData[row][foundNulls[0]].value = 1;
                    moveMade = true;
                  }
                  if (tableData[row][rightBorder].value === 0
                    && tableData[row][foundNulls[2]].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckRowsThreeNulls.4b] Setting cell[' + row + '][' + foundNulls[2] + '] to 1');
                    tableData[row][foundNulls[2]].value = 1;
                    moveMade = true;
                  }
                }
                if (allButOneOne
                  && (tableData[row][leftBorder].value === 1 || tableData[row][rightBorder].value === 1)) {
                  if (tableData[row][leftBorder].value === 1
                    && tableData[row][foundNulls[0]].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckRowsThreeNulls.4c] Setting cell[' + row + '][' + foundNulls[0] + '] to 0');
                    tableData[row][foundNulls[0]].value = 0;
                    moveMade = true;
                  }
                  if (tableData[row][rightBorder].value === 1
                    && tableData[row][foundNulls[2]].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckRowsThreeNulls.4d] Setting cell[' + row + '][' + foundNulls[2] + '] to 0');
                    tableData[row][foundNulls[2]].value = 0;
                    moveMade = true;
                  }
                }
              }
            }
          }
        }
      }
    }
    return moveMade;
  }
}
