import { Component, OnInit } from '@angular/core';

import { GridSizes } from '../shared/models/grid.model';
import { GridPuzzles } from '../shared/models/grid.model';
import { PuzzleLevels } from '../shared/models/puzzle.model';
import { LogLevels } from '../shared/models/log.model';
import { Samples } from '../shared/samples';

import { Logger } from '../shared/services/logger';
import { LoggerService } from '../shared/services/logger.service';
import { Validater } from '../shared/services/validater';

import { CheckMiddle } from '../shared/solvers/checkMiddle';
import { CheckTwins } from '../shared/solvers/checkTwins';
import { CheckRowTotals } from '../shared/solvers/checkRowTotals';
import { CheckColTotals } from '../shared/solvers/checkColTotals';
import { CheckColKnownUnknown } from '../shared/solvers/checkColKnownUnknown';
import { CheckRowKnownUnknown } from '../shared/solvers/checkRowKnownUnknown';
import { CheckRowsThreeNulls } from '../shared/solvers/checkRowsThreeNulls';
import { CheckColsThreeNulls } from '../shared/solvers/checkColsThreeNulls';
import { CheckRowsTwoNulls } from '../shared/solvers/checkRowsTwoNulls';
import { CheckColsTwoNulls } from '../shared/solvers/checkColsTwoNulls';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {

  // What's left?
  // Capture all moves
  //   Use moves for replay
  // Change bg color of recent click/focus
  // Add all the "solvers" into their own module (or class?)
  // Additional solvers:
  //    All but one, allow no three in a row of other (2 - Hard)
  //      CheckRowsNoThrees/CheckColsNoThrees?
  //      example: 12VH 2018-11-29 (row 11)
  //      1 0 0 1 0 0 1 0 _ 1 _ _
  //      first blank should not be a zero, would leave 3 1's in a row
  //    Row compare (3 - Challenging)
  //      If all but one in one row, and matches a row with all,
  //        then the missing one is opposite
  //        example: 8H 2018-11-17 (row 2)
  //        0 _ 1 0 _ 1 _ 0
  //        0 1 1 0 0 1 1 0
  //        second blank must be a 1
  //      When 2 left, make them opposite
  //        example:
  //        0 1 1 0 1 _ _ 0
  //        0 1 1 0 1 0 1 0
  //        blanks should be 1 0

  // ISSUES?
  //    CheckRowsThreeNulls/CheckColsThreeNulls,
  //      When at edge and three nulls in a row (2 - Hard)
  //      example: 8H 2018-11-17 (col)
  //      0 1 0 0 1 _ _ _
  //      end blank should not be a zero, would leave 3 1's in a row
  //      Should be fixed by [CheckRowsThreeNulls.2]
  //      but had potential issues with this solve section
  //      CANT SOLVE: 12VH 2018-11-26 (3rd row 7 0's, 4th row 7 1's)

  tableData = [];
  gridSize = 8;
  puzzleLevel = PuzzleLevels.Easy;
  initLogLevel = LogLevels.OFF;

  gridSizes: GridSizes[] = [
    { value: 6, label: '6 x 6' },
    { value: 8, label: '8 x 8' },
    { value: 10, label: '10 x 10' },
    { value: 12, label: '12 x 12' }
  ];

  abort = false;
  solved = false;
  solvable = true;
  solveRunning = false;

  prebuilt = 0;

  gridPuzzles: GridPuzzles[] = Samples;

  constructor(private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.setLogLevel(this.initLogLevel);
    Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] ngOnInit()');
    this.initTableData();
  }

  initTableData() {
    Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] initTableData()');
    this.tableData = [];
    for (let row = 0; row < this.gridSize; row++) {
      const rowData = [];
      for (let col = 0; col < this.gridSize; col++) {
        const colData = { value: null, given: false };
        rowData.push(colData);
      }
      this.tableData.push(rowData);
    }
    if (this.showLog(LogLevels.TRACE)) {
      console.table(this.tableData);
    }
  }

  showLog(myLevel) {
    return this.loggerService.getLogLevel() >= myLevel;
  }

  updateCell(cellId: string) {
    // Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] updateCell() cellId: ' + cellId);
    const rowIdx = +cellId.split('-')[1];
    const colIdx = +cellId.split('-')[2];
    // Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] updateCell() rowIdx: ' + rowIdx + ', colIdx: ' + colIdx);
    const currVal = this.tableData[rowIdx][colIdx].value;

    switch (currVal) {
      case null:
        this.tableData[rowIdx][colIdx].value = 0;
        this.tableData[rowIdx][colIdx].given = true;
        break;
      case 0:
        this.tableData[rowIdx][colIdx].value = 1;
        this.tableData[rowIdx][colIdx].given = true;
        break;
      case 1:
        this.tableData[rowIdx][colIdx].value = null;
        this.tableData[rowIdx][colIdx].given = false;
        break;
      default: break;
    }
  }

  isCellGiven(rowIdx, colIdx) {
    // Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] isCellGiven() rowIdx: ' + rowIdx + ', colIdx: ' + colIdx);
    return this.tableData[rowIdx][colIdx].given;
  }

  solve() {
    Logger.log(true, '[puzzle] solve()');
    const startTime = performance.now();

    this.solveRunning = true;
    let moveMade = false;
    // setTimeout(() => this.abort = true, 1000);
    let counter = 0;
    while (!this.solved && this.solvable && !this.abort) {
      counter++;
      Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() PASS: ' + counter);

      // --- START --- EASY level moves
      // Check for MIDDLES
      Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for middles');
      let middleMade = true;
      while (middleMade) {
        middleMade = CheckMiddle.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
        if (middleMade) {
          Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Middles: MOVEMADE');
          moveMade = true;
        }
      }

      if (!moveMade) {
        // Check for TWINS
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for twins');
        let twinsMade = true;
        while (twinsMade) {
          twinsMade = CheckTwins.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
          if (twinsMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Twins: MOVEMADE');
            moveMade = true;
          }
        }
      }

      if (!moveMade) {
        // Check for ROW-TOTAL-REACHED
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for row total');
        let rowsTotMade = true;
        while (rowsTotMade) {
          rowsTotMade = CheckRowTotals.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
          if (rowsTotMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Row Totals: MOVEMADE');
            moveMade = true;
          }
        }

        // Check for COL-TOTAL-REACHED
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for col total');
        let colsTotMade = true;
        while (colsTotMade) {
          colsTotMade = CheckColTotals.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
          if (colsTotMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Col Totals: MOVEMADE');
            moveMade = true;
          }
        }
      }
      // --- END --- EASY level moves

      // --- START --- HARD level moves
      if (!moveMade) {
        // Check for ROWS-KNOWN-UNKNOWN
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for row known/unknown');
        let rowsKnownUnknownMade = true;
        while (rowsKnownUnknownMade) {
          rowsKnownUnknownMade = CheckRowKnownUnknown.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
          if (rowsKnownUnknownMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Row Known/Unknown: MOVEMADE');
            moveMade = true;
            this.puzzleLevel = PuzzleLevels.Hard;
          }
        }

        // Check for COLS-KNOWN-UNKNOWN
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for col known/unknown');
        let colsKnownUnknownMade = true;
        while (colsKnownUnknownMade) {
          colsKnownUnknownMade = CheckColKnownUnknown.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
          if (colsKnownUnknownMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Col Known/Unknown: MOVEMADE');
            moveMade = true;
            this.puzzleLevel = PuzzleLevels.Hard;
          }
        }
      }

      if (!moveMade) {
        // Check for ROWS THREE NULLS
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for row three nulls');
        let rowsThreeNullMade = true;
        while (rowsThreeNullMade) {
          rowsThreeNullMade = CheckRowsThreeNulls.check(this.gridSize, this.tableData, LogLevels.TRACE);
          if (rowsThreeNullMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Row three nulls: MOVEMADE');
            moveMade = true;
            this.puzzleLevel = PuzzleLevels.Hard;
          }
        }

        // Check for COLS THREE NULLS
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for col three nulls');
        let colsThreeNullMade = true;
        while (colsThreeNullMade) {
          colsThreeNullMade = CheckColsThreeNulls.check(this.gridSize, this.tableData, LogLevels.TRACE);
          if (colsThreeNullMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Col three nulls: MOVEMADE');
            moveMade = true;
            this.puzzleLevel = PuzzleLevels.Hard;
          }
        }
      }

      if (!moveMade) {
        // Check for ROWS TWO NULLS
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for row two nulls');
        let rowsTwoNullMade = true;
        while (rowsTwoNullMade) {
          rowsTwoNullMade = CheckRowsTwoNulls.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
          if (rowsTwoNullMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Row two nulls: MOVEMADE');
            moveMade = true;
            this.puzzleLevel = PuzzleLevels.Hard;
          }
        }

        // Check for COLS TWO NULLS
        Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Check for col two nulls');
        let colsTwoNullMade = true;
        while (colsTwoNullMade) {
          colsTwoNullMade = CheckColsTwoNulls.check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
          if (colsTwoNullMade) {
            Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] solve() Col two nulls: MOVEMADE');
            moveMade = true;
            this.puzzleLevel = PuzzleLevels.Hard;
          }
        }
      }
      // --- END --- HARD level moves

      // Check for SOLVED
      this.solved = this.isSolved();
      if (this.solved) {
        Logger.log(true, '[puzzle] solve() SOLVED');
        Logger.log(true, '[puzzle] solve() Puzzle Level: ' + this.getPuzzleLevel(this.puzzleLevel));
        Logger.log(true, '[puzzle] Solution is '
          + (Validater.validate(true, this.gridSize, this.tableData) ? 'VALID' : 'INVALID'));
      } else {
        if (moveMade) {
          // Logger.log(true, '[puzzle] solve() Pass complete!');
          moveMade = false;
        } else {
          this.solvable = false;
          Logger.log(true, '[puzzle] solve() Cant solve');
          Logger.log(true, '[puzzle] solve() Current known level: ' + this.getPuzzleLevel(this.puzzleLevel));
        }
      }

      if (counter > 100) {
        Logger.log(true, '[puzzle] solve() ABORTING');
        this.abort = true;
      }
    }
    this.solveRunning = false;
    this.abort = false;
    this.solved = false;
    this.solvable = true;

    const endTime = performance.now();
    Logger.log(true, '[puzzle] solve() Execution time: ' + Math.round((endTime - startTime) * 1000) / 1000 + ' milliseconds.');
  }

  isSolved(): boolean {
    Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] isSolved()');
    // Check to see if there is a value in every position
    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        if (this.tableData[row][col].value === null) {
          return false;
        }
      }
    }
    return true;
  }

  getPuzzleLevel(level): string {
    switch (level) {
      case PuzzleLevels.Easy: return '(1) EASY';
      case PuzzleLevels.Hard: return '(2) HARD';
      case PuzzleLevels.Challenging: return '(3) CHALLENGING';
      case PuzzleLevels.VeryHard: return '(4) VERY HARD';
      default: return 'UNKNOWN';
    }
  }

  reset() {
    Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] reset()');
    this.abort = false;
    this.solved = false;
    this.solvable = true;
    this.initTableData();
    this.prebuilt = 0;
    this.puzzleLevel = PuzzleLevels.Easy;
  }

  setPrebuilt() {
    Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] setPrebuilt() prebuilt: ' + this.prebuilt);
    const prebuilt = this.prebuilt;
    const value = this.gridPuzzles[this.prebuilt].value;
    if (value === 0) {
      this.reset();
    } else {
      this.gridSize = value;
      this.reset();
      this.prebuilt = prebuilt;
      for (let row = 0; row < this.gridSize; row++) {
        for (let col = 0; col < this.gridSize; col++) {
          const gridVal = this.gridPuzzles[prebuilt].grid[row][col];
          this.tableData[row][col].value = gridVal;
          const given = ([0, 1].indexOf(gridVal) > -1) ? true : false;
          this.tableData[row][col].given = given;
        }
      }
    }
  }
}
