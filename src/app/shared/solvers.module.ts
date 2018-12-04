import { NgModule } from '@angular/core';

import { CheckMiddle } from './solvers/checkMiddle';
import { CheckTwins } from './solvers/checkTwins';
import { CheckRowTotals } from './solvers/checkRowTotals';
import { CheckColTotals } from './solvers/checkColTotals';
import { CheckColKnownUnknown } from './solvers/checkColKnownUnknown';
import { CheckRowKnownUnknown } from './solvers/checkRowKnownUnknown';
import { CheckRowsThreeNulls } from './solvers/checkRowsThreeNulls';
import { CheckColsThreeNulls } from './solvers/checkColsThreeNulls';
import { CheckRowsTwoNulls } from './solvers/checkRowsTwoNulls';
import { CheckColsTwoNulls } from './solvers/checkColsTwoNulls';


@NgModule({
  imports: [
  ],
  declarations: [
    // CheckMiddle,
    // CheckTwins,
    // CheckRowTotals,
    // CheckColTotals,
    // CheckColKnownUnknown,
    // CheckRowKnownUnknown,
    // CheckRowsThreeNulls,
    // CheckColsThreeNulls,
    // CheckRowsTwoNulls,
    // CheckColsTwoNulls
  ],
  exports: [
  ]
})
export class SolversModule { }
