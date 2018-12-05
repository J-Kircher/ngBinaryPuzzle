import { Logger } from '../../shared/services/logger';
import { LogLevels } from '../../shared/models/log.model';

export class CheckColsThreeNulls {

  static check(gridSize: number, tableData: any, logLevel: number = 0): boolean {
    const showLog = (myLevel) => (logLevel >= myLevel);
    Logger.log(showLog(LogLevels.TRACE), '[CheckColsThreeNulls] Start');
    let moveMade = false;
    for (let col = 0; col < gridSize; col++) {
      let zeroCount = 0;
      let oneCount = 0;
      let nullCount = 0;
      for (let row = 0; row < gridSize; row++) {
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
        // Can put one more zero/one in col
        // Check for 3 consecutive nulls
        let foundNulls = [];
        for (let row = 1; row < (gridSize - 1); row++) {
          if (tableData[row][col].value === null) {
            const above = (row - 1 >= 0) ? tableData[row - 1][col].value : null;
            const below = (row + 1 < gridSize) ? tableData[row + 1][col].value : null;
            if (above === null && below === null) {
              Logger.log(showLog(LogLevels.TRACE), '[CheckColsThreeNulls] THREE NULLS FOUND in col: ' + col);
              foundNulls = [ row - 1 , row, row + 1 ];
            }
          }
        }
        if (foundNulls.length) {
          Logger.log(showLog(LogLevels.TRACE), '[CheckColsThreeNulls] foundNulls in rows: ' + foundNulls);
          for (let row = 0; row < gridSize; row++) {
            if (tableData[row][col].value === null && !(foundNulls.indexOf(row) > -1)) {
              // Fill in other null cells with the opposite of the allButOne that's not in the three
              Logger.log(showLog(LogLevels.INFO),
                '[CheckColsThreeNulls.1] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
              tableData[row][col].value = allButOneZero ? 1 : 0;
              moveMade = true;
            }
            if (nullCount === 3 // There's only 3 nulls
                && (row === 0 || row === (gridSize - 1)) // This row is at an edge
                && tableData[row][col].value === null // this value is null
                ) {
              // Fill in null cells at borders with the opposite of the allButOne
              Logger.log(showLog(LogLevels.INFO),
                '[CheckColsThreeNulls.2] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
              tableData[row][col].value = allButOneZero ? 1 : 0;
              moveMade = true;
            }
            const topBorder = foundNulls[0] - 1;
            const bottomBorder = foundNulls[2] + 1;
            if (nullCount === 3 // There's only 3 nulls
                && (foundNulls[0] > 0 && foundNulls[2] < (gridSize - 1)) // This row is not at an edge
                ) {
              if (tableData[topBorder][col].value === tableData[bottomBorder][col].value) {
                // The edges of the nulls equal
                if (((allButOneZero && tableData[topBorder][col].value === 1)
                  // All but one zero, edges are ones
                  || (allButOneOne && tableData[topBorder][col].value === 0))
                    && tableData[foundNulls[1]][col].value === null // this value is null
                  ) {
                  // All but one one, edges are zeros
                  // Fill in center of null cells with the opposite of the borders
                  const newVal = (tableData[foundNulls[0] - 1][col].value === 1) ? 0 : 1;
                  Logger.log(showLog(LogLevels.INFO),
                    '[CheckColsThreeNulls.3] Setting cell[' + foundNulls[1] + '][' + col + '] to ' + newVal);
                  tableData[foundNulls[1]][col].value = newVal;
                  moveMade = true;
                }
              } else {
                if (allButOneZero
                  && (tableData[topBorder][col].value === 0 || tableData[bottomBorder][col].value === 0)) {
                  if (tableData[topBorder][col].value === 0
                    && tableData[foundNulls[0]][col].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckColsThreeNulls.4a] Setting cell[' + foundNulls[0] + '][' + col + '] to 1');
                    tableData[foundNulls[0]][col].value = 1;
                    moveMade = true;
                  }
                  if (tableData[bottomBorder][col].value === 0
                    && tableData[foundNulls[2]][col].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckColsThreeNulls.4b] Setting cell[' + foundNulls[2] + '][' + col + '] to 1');
                    tableData[foundNulls[2]][col].value = 1;
                    moveMade = true;
                  }
                }
                if (allButOneOne
                  && (tableData[topBorder][col].value === 1 || tableData[bottomBorder][col].value === 1)) {
                  if (tableData[topBorder][col].value === 1
                    && tableData[foundNulls[0]][col].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckColsThreeNulls.4c] Setting cell[' + foundNulls[0] + '][' + col + '] to 0');
                    tableData[foundNulls[0]][col].value = 0;
                    moveMade = true;
                  }
                  if (tableData[bottomBorder][col].value === 1
                    && tableData[foundNulls[2]][col].value === null // this value is null
                    ) {
                    Logger.log(showLog(LogLevels.INFO), '[CheckColsThreeNulls.4d] Setting cell[' + foundNulls[2] + '][' + col + '] to 0');
                    tableData[foundNulls[2]][col].value = 0;
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
