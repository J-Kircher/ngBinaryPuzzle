(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div [ngClass]=\"currentTheme\">\n  <div class=\"body-container\" fxLayout=\"column\">\n    <app-puzzle></app-puzzle>\n  </div>\n</div> -->\n\n<div class=\"body-container\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\n  <app-puzzle></app-puzzle>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: lightgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxKaW1cXERvY3VtZW50c1xcQW5ndWxhclxcbmdCaW5hcnlQdXp6bGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _shared_solvers_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/solvers.module */ "./src/app/shared/solvers.module.ts");
/* harmony import */ var _puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./puzzle/puzzle.component */ "./src/app/puzzle/puzzle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_6__["PuzzleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _shared_solvers_module__WEBPACK_IMPORTED_MODULE_5__["SolversModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/puzzle/puzzle.component.html":
/*!**********************************************!*\
  !*** ./src/app/puzzle/puzzle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"puzzle-card\">\n  <mat-card-header>\n    <mat-card-title>Binary Puzzle</mat-card-title>\n    <mat-card-subtitle></mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"space-around end\">\n    <mat-form-field>\n      <mat-select placeholder=\"Grid size\" [(value)]=\"gridSize\" (selectionChange)=\"reset()\">\n        <mat-option *ngFor=\"let size of gridSizes\" [value]=\"size.value\">\n          {{size.label}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Pre built\" [(value)]=\"prebuilt\" (selectionChange)=\"setPrebuilt()\">\n        <mat-option *ngFor=\"let puzzle of gridPuzzles\" [value]=\"puzzle.id\">\n          {{puzzle.label}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <table class=\"puzzle\">\n      <tr *ngFor=\"let row of tableData; let rowIdx = index\">\n        <td *ngFor=\"let col of row; let colIdx = index\" id=\"cell-{{ rowIdx }}-{{ colIdx }}\"\n          (click)=\"updateCell($event.target.id)\" [ngClass]=\"{ 'given': isCellGiven(rowIdx, colIdx) }\">\n          {{ col.value }}\n        </td>\n      </tr>\n    </table>\n  </mat-card-content>\n  <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <button mat-raised-button (click)=\"setPrebuilt()\" [disabled]=\"solveRunning\">Reset</button>\n    <button mat-raised-button (click)=\"solve()\" [disabled]=\"solveRunning\">Solve</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/puzzle/puzzle.component.scss":
/*!**********************************************!*\
  !*** ./src/app/puzzle/puzzle.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".puzzle-card {\n  margin: 24px;\n  background-color: lightblue;\n  color: orangered;\n  font-weight: bold; }\n  .puzzle-card .mat-card-header .mat-card-title {\n    color: darkblue; }\n  .puzzle-card mat-select {\n    padding: 4px; }\n  .puzzle-card .puzzle {\n    border: 1px;\n    margin: 8px; }\n  .puzzle-card .puzzle td {\n      background-color: whitesmoke;\n      min-width: 30px;\n      height: 30px;\n      text-align: center; }\n  .puzzle-card .puzzle td.given {\n      color: black; }\n  .puzzle-card .mat-card-actions .mat-raised-button {\n    margin: 12px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHV6emxlL0M6XFxVc2Vyc1xcSmltXFxEb2N1bWVudHNcXEFuZ3VsYXJcXG5nQmluYXJ5UHV6emxlL3NyY1xcYXBwXFxwdXp6bGVcXHB1enpsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQVk7RUFDWiwyQkFBMkI7RUFFM0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0VBTm5CO0lBU0ksZUFBZSxFQUFBO0VBVG5CO0lBYUksWUFBWSxFQUFBO0VBYmhCO0lBaUJJLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUFsQmY7TUFxQk0sNEJBQTRCO01BQzVCLGVBQWU7TUFDZixZQUFZO01BQ1osa0JBQWtCLEVBQUE7RUF4QnhCO01BMkJNLFlBQVksRUFBQTtFQTNCbEI7SUFnQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdXp6bGUvcHV6emxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB1enpsZS1jYXJkIHtcclxuICAvLyBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbjogMjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgLy8gY29sb3I6IG1hcm9vbjtcclxuICBjb2xvcjogb3JhbmdlcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgfVxyXG5cclxuICBtYXQtc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcblxyXG4gIC5wdXp6bGUge1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB0ZC5naXZlbiB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtY2FyZC1hY3Rpb25zIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEycHggMTZweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/puzzle/puzzle.component.ts":
/*!********************************************!*\
  !*** ./src/app/puzzle/puzzle.component.ts ***!
  \********************************************/
/*! exports provided: PuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleComponent", function() { return PuzzleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/puzzle.model */ "./src/app/shared/models/puzzle.model.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/log.model */ "./src/app/shared/models/log.model.ts");
/* harmony import */ var _shared_samples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/samples */ "./src/app/shared/samples.ts");
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/logger.service */ "./src/app/shared/services/logger.service.ts");
/* harmony import */ var _shared_services_validater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/validater */ "./src/app/shared/services/validater.ts");
/* harmony import */ var _shared_solvers_checkMiddle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/solvers/checkMiddle */ "./src/app/shared/solvers/checkMiddle.ts");
/* harmony import */ var _shared_solvers_checkTwins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/solvers/checkTwins */ "./src/app/shared/solvers/checkTwins.ts");
/* harmony import */ var _shared_solvers_checkRowTotals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/solvers/checkRowTotals */ "./src/app/shared/solvers/checkRowTotals.ts");
/* harmony import */ var _shared_solvers_checkColTotals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/solvers/checkColTotals */ "./src/app/shared/solvers/checkColTotals.ts");
/* harmony import */ var _shared_solvers_checkColKnownUnknown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/solvers/checkColKnownUnknown */ "./src/app/shared/solvers/checkColKnownUnknown.ts");
/* harmony import */ var _shared_solvers_checkRowKnownUnknown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/solvers/checkRowKnownUnknown */ "./src/app/shared/solvers/checkRowKnownUnknown.ts");
/* harmony import */ var _shared_solvers_checkRowsThreeNulls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/solvers/checkRowsThreeNulls */ "./src/app/shared/solvers/checkRowsThreeNulls.ts");
/* harmony import */ var _shared_solvers_checkColsThreeNulls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/solvers/checkColsThreeNulls */ "./src/app/shared/solvers/checkColsThreeNulls.ts");
/* harmony import */ var _shared_solvers_checkRowsTwoNulls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/solvers/checkRowsTwoNulls */ "./src/app/shared/solvers/checkRowsTwoNulls.ts");
/* harmony import */ var _shared_solvers_checkColsTwoNulls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/solvers/checkColsTwoNulls */ "./src/app/shared/solvers/checkColsTwoNulls.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var PuzzleComponent = /** @class */ (function () {
    function PuzzleComponent(loggerService) {
        this.loggerService = loggerService;
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
        //        0 1 1 0 0 1 1 0
        //        0 _ 1 0 _ 1 _ 0
        //        second blank must be a 1
        //      When 2 left, make them opposite
        //        example:
        //        0 1 1 0 1 0 1 0
        //        0 1 1 0 1 _ _ 0
        //        blanks should be 1 0
        this.tableData = [];
        this.gridSize = 8;
        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Easy;
        this.initLogLevel = _shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].OFF;
        this.gridSizes = [
            { value: 6, label: '6 x 6' },
            { value: 8, label: '8 x 8' },
            { value: 10, label: '10 x 10' },
            { value: 12, label: '12 x 12' }
        ];
        this.abort = false;
        this.solved = false;
        this.solvable = true;
        this.solveRunning = false;
        this.prebuilt = 0;
        this.gridPuzzles = _shared_samples__WEBPACK_IMPORTED_MODULE_3__["Samples"];
    }
    PuzzleComponent.prototype.ngOnInit = function () {
        this.loggerService.setLogLevel(this.initLogLevel);
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] ngOnInit()');
        this.initTableData();
    };
    PuzzleComponent.prototype.initTableData = function () {
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] initTableData()');
        this.tableData = [];
        for (var row = 0; row < this.gridSize; row++) {
            var rowData = [];
            for (var col = 0; col < this.gridSize; col++) {
                var colData = { value: null, given: false };
                rowData.push(colData);
            }
            this.tableData.push(rowData);
        }
        if (this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE)) {
            console.table(this.tableData);
        }
    };
    PuzzleComponent.prototype.showLog = function (myLevel) {
        return this.loggerService.getLogLevel() >= myLevel;
    };
    PuzzleComponent.prototype.updateCell = function (cellId) {
        // Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] updateCell() cellId: ' + cellId);
        var rowIdx = +cellId.split('-')[1];
        var colIdx = +cellId.split('-')[2];
        // Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] updateCell() rowIdx: ' + rowIdx + ', colIdx: ' + colIdx);
        var currVal = this.tableData[rowIdx][colIdx].value;
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
    };
    PuzzleComponent.prototype.isCellGiven = function (rowIdx, colIdx) {
        // Logger.log(this.showLog(LogLevels.TRACE), '[puzzle] isCellGiven() rowIdx: ' + rowIdx + ', colIdx: ' + colIdx);
        return this.tableData[rowIdx][colIdx].given;
    };
    PuzzleComponent.prototype.solve = function () {
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] solve()');
        var startTime = performance.now();
        this.solveRunning = true;
        var moveMade = false;
        // setTimeout(() => this.abort = true, 1000);
        var counter = 0;
        while (!this.solved && this.solvable && !this.abort) {
            counter++;
            _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() PASS: ' + counter);
            // --- START --- EASY level moves
            // Check for MIDDLES
            _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for middles');
            var middleMade = true;
            while (middleMade) {
                middleMade = _shared_solvers_checkMiddle__WEBPACK_IMPORTED_MODULE_7__["CheckMiddle"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                if (middleMade) {
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Middles: MOVEMADE');
                    moveMade = true;
                }
            }
            if (!moveMade) {
                // Check for TWINS
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for twins');
                var twinsMade = true;
                while (twinsMade) {
                    twinsMade = _shared_solvers_checkTwins__WEBPACK_IMPORTED_MODULE_8__["CheckTwins"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (twinsMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Twins: MOVEMADE');
                        moveMade = true;
                    }
                }
            }
            if (!moveMade) {
                // Check for ROW-TOTAL-REACHED
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for row total');
                var rowsTotMade = true;
                while (rowsTotMade) {
                    rowsTotMade = _shared_solvers_checkRowTotals__WEBPACK_IMPORTED_MODULE_9__["CheckRowTotals"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (rowsTotMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Row Totals: MOVEMADE');
                        moveMade = true;
                    }
                }
                // Check for COL-TOTAL-REACHED
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for col total');
                var colsTotMade = true;
                while (colsTotMade) {
                    colsTotMade = _shared_solvers_checkColTotals__WEBPACK_IMPORTED_MODULE_10__["CheckColTotals"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (colsTotMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Col Totals: MOVEMADE');
                        moveMade = true;
                    }
                }
            }
            // --- END --- EASY level moves
            // --- START --- HARD level moves
            if (!moveMade) {
                // Check for ROWS-KNOWN-UNKNOWN
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for row known/unknown');
                var rowsKnownUnknownMade = true;
                while (rowsKnownUnknownMade) {
                    rowsKnownUnknownMade = _shared_solvers_checkRowKnownUnknown__WEBPACK_IMPORTED_MODULE_12__["CheckRowKnownUnknown"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (rowsKnownUnknownMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Row Known/Unknown: MOVEMADE');
                        moveMade = true;
                        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Hard;
                    }
                }
                // Check for COLS-KNOWN-UNKNOWN
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for col known/unknown');
                var colsKnownUnknownMade = true;
                while (colsKnownUnknownMade) {
                    colsKnownUnknownMade = _shared_solvers_checkColKnownUnknown__WEBPACK_IMPORTED_MODULE_11__["CheckColKnownUnknown"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (colsKnownUnknownMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Col Known/Unknown: MOVEMADE');
                        moveMade = true;
                        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Hard;
                    }
                }
            }
            if (!moveMade) {
                // Check for ROWS THREE NULLS
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for row three nulls');
                var rowsThreeNullMade = true;
                while (rowsThreeNullMade) {
                    rowsThreeNullMade = _shared_solvers_checkRowsThreeNulls__WEBPACK_IMPORTED_MODULE_13__["CheckRowsThreeNulls"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (rowsThreeNullMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Row three nulls: MOVEMADE');
                        moveMade = true;
                        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Hard;
                    }
                }
                // Check for COLS THREE NULLS
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for col three nulls');
                var colsThreeNullMade = true;
                while (colsThreeNullMade) {
                    colsThreeNullMade = _shared_solvers_checkColsThreeNulls__WEBPACK_IMPORTED_MODULE_14__["CheckColsThreeNulls"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (colsThreeNullMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Col three nulls: MOVEMADE');
                        moveMade = true;
                        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Hard;
                    }
                }
            }
            if (!moveMade) {
                // Check for ROWS TWO NULLS
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for row two nulls');
                var rowsTwoNullMade = true;
                while (rowsTwoNullMade) {
                    rowsTwoNullMade = _shared_solvers_checkRowsTwoNulls__WEBPACK_IMPORTED_MODULE_15__["CheckRowsTwoNulls"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (rowsTwoNullMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Row two nulls: MOVEMADE');
                        moveMade = true;
                        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Hard;
                    }
                }
                // Check for COLS TWO NULLS
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Check for col two nulls');
                var colsTwoNullMade = true;
                while (colsTwoNullMade) {
                    colsTwoNullMade = _shared_solvers_checkColsTwoNulls__WEBPACK_IMPORTED_MODULE_16__["CheckColsTwoNulls"].check(this.gridSize, this.tableData, this.loggerService.getLogLevel());
                    if (colsTwoNullMade) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] solve() Col two nulls: MOVEMADE');
                        moveMade = true;
                        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Hard;
                    }
                }
            }
            // --- END --- HARD level moves
            // Check for SOLVED
            this.solved = this.isSolved();
            if (this.solved) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] solve() SOLVED');
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] solve() Puzzle Level: ' + this.getPuzzleLevel(this.puzzleLevel));
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] Solution is '
                    + (_shared_services_validater__WEBPACK_IMPORTED_MODULE_6__["Validater"].validate(true, this.gridSize, this.tableData) ? 'VALID' : 'INVALID'));
            }
            else {
                if (moveMade) {
                    // Logger.log(true, '[puzzle] solve() Pass complete!');
                    moveMade = false;
                }
                else {
                    this.solvable = false;
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] solve() Cant solve');
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] solve() Current known level: ' + this.getPuzzleLevel(this.puzzleLevel));
                }
            }
            if (counter > 100) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] solve() ABORTING');
                this.abort = true;
            }
        }
        this.solveRunning = false;
        this.abort = false;
        this.solved = false;
        this.solvable = true;
        var endTime = performance.now();
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(true, '[puzzle] solve() Execution time: ' + Math.round((endTime - startTime) * 1000) / 1000 + ' milliseconds.');
    };
    PuzzleComponent.prototype.isSolved = function () {
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] isSolved()');
        // Check to see if there is a value in every position
        for (var row = 0; row < this.gridSize; row++) {
            for (var col = 0; col < this.gridSize; col++) {
                if (this.tableData[row][col].value === null) {
                    return false;
                }
            }
        }
        return true;
    };
    PuzzleComponent.prototype.getPuzzleLevel = function (level) {
        switch (level) {
            case _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Easy: return '(1) EASY';
            case _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Hard: return '(2) HARD';
            case _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Challenging: return '(3) CHALLENGING';
            case _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].VeryHard: return '(4) VERY HARD';
            default: return 'UNKNOWN';
        }
    };
    PuzzleComponent.prototype.reset = function () {
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] reset()');
        this.abort = false;
        this.solved = false;
        this.solvable = true;
        this.initTableData();
        this.prebuilt = 0;
        this.puzzleLevel = _shared_models_puzzle_model__WEBPACK_IMPORTED_MODULE_1__["PuzzleLevels"].Easy;
    };
    PuzzleComponent.prototype.setPrebuilt = function () {
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"].log(this.showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_2__["LogLevels"].TRACE), '[puzzle] setPrebuilt() prebuilt: ' + this.prebuilt);
        var prebuilt = this.prebuilt;
        var value = this.gridPuzzles[this.prebuilt].value;
        if (value === 0) {
            this.reset();
        }
        else {
            this.gridSize = value;
            this.reset();
            this.prebuilt = prebuilt;
            for (var row = 0; row < this.gridSize; row++) {
                for (var col = 0; col < this.gridSize; col++) {
                    var gridVal = this.gridPuzzles[prebuilt].grid[row][col];
                    this.tableData[row][col].value = gridVal;
                    var given = ([0, 1].indexOf(gridVal) > -1) ? true : false;
                    this.tableData[row][col].given = given;
                }
            }
        }
    };
    PuzzleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-puzzle',
            template: __webpack_require__(/*! ./puzzle.component.html */ "./src/app/puzzle/puzzle.component.html"),
            styles: [__webpack_require__(/*! ./puzzle.component.scss */ "./src/app/puzzle/puzzle.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]])
    ], PuzzleComponent);
    return PuzzleComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ],
            exports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/models/log.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/log.model.ts ***!
  \********************************************/
/*! exports provided: LogLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevels", function() { return LogLevels; });
var LogLevels;
(function (LogLevels) {
    LogLevels[LogLevels["OFF"] = 0] = "OFF";
    LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
    LogLevels[LogLevels["INFO"] = 2] = "INFO";
    LogLevels[LogLevels["TRACE"] = 3] = "TRACE";
})(LogLevels || (LogLevels = {}));


/***/ }),

/***/ "./src/app/shared/models/puzzle.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/puzzle.model.ts ***!
  \***********************************************/
/*! exports provided: PuzzleLevels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleLevels", function() { return PuzzleLevels; });
var PuzzleLevels;
(function (PuzzleLevels) {
    PuzzleLevels[PuzzleLevels["Easy"] = 0] = "Easy";
    PuzzleLevels[PuzzleLevels["Hard"] = 1] = "Hard";
    PuzzleLevels[PuzzleLevels["Challenging"] = 2] = "Challenging";
    PuzzleLevels[PuzzleLevels["VeryHard"] = 3] = "VeryHard";
})(PuzzleLevels || (PuzzleLevels = {}));


/***/ }),

/***/ "./src/app/shared/samples.ts":
/*!***********************************!*\
  !*** ./src/app/shared/samples.ts ***!
  \***********************************/
/*! exports provided: Samples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Samples", function() { return Samples; });
var Samples = [
    { id: 0, value: 0, label: 'None', grid: [] },
    { id: 1, value: 6, label: '6H Test 1', grid: [
            [1, 1, null, null, null, null],
            [null, null, 0, null, null, null],
            [1, null, null, null, null, 1],
            [null, null, null, null, null, null],
            [null, 0, null, null, null, 1],
            [null, null, null, 1, 1, null]
        ] },
    { id: 2, value: 6, label: '6H Test 2', grid: [
            [0, null, null, 0, null, 0],
            [null, null, null, null, null, null],
            [1, 1, null, null, 1, null],
            [null, null, 1, null, 1, 1],
            [null, 1, null, null, null, null],
            [0, null, null, null, null, null]
        ] },
    { id: 3, value: 8, label: '8H 2018-11-13', grid: [
            [1, 1, null, null, null, null, 1, null],
            [null, null, null, 0, null, null, null, null],
            [0, null, 1, null, null, null, null, null],
            [null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, 1, null],
            [null, 0, null, 0, null, null, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, null, 1, 1, null]
        ] },
    { id: 4, value: 8, label: '8H 2018-11-16', grid: [
            [1, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 1],
            [1, null, null, 0, null, null, null, null],
            [null, null, 1, null, 1, null, null, 1],
            [null, null, null, null, null, null, null, null],
            [1, null, null, 1, null, 1, null, 1],
            [null, null, null, null, null, 1, null, 1],
            [1, null, 1, null, null, null, null, null]
        ] },
    { id: 5, value: 8, label: '8H 2018-11-17', grid: [
            [1, 1, null, null, null, null, 1, null],
            [null, null, null, 0, null, 1, null, 0],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, 0, 0, null, null, 0],
            [1, null, null, 1, null, 1, 1, null],
            [null, null, null, null, null, null, null, null],
            [null, 0, 0, null, null, 1, null, null]
        ] },
    { id: 6, value: 10, label: '10H Test 1', grid: [
            [1, 0, 1, 1, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 0, 0, 1, 0, null, null, null, null, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, 0, 1, 0, null, null, null, null, 1, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 0, 1, 1, 0, 1, null, null, null, null]
        ] },
    { id: 7, value: 10, label: '10H Test 2', grid: [
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, 1, 0, null, null, 0, 1, null, 0, 1],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null]
        ] },
    { id: 8, value: 10, label: '10H 2018-11-10', grid: [
            [null, 1, null, null, 0, null, null, null, null, null],
            [null, null, null, null, null, 1, null, 0, null, 0],
            [null, null, null, 0, null, null, null, null, null, null],
            [null, null, null, null, 1, null, null, 1, null, 1],
            [null, null, null, 1, null, null, null, 1, 0, null],
            [null, null, 0, null, 1, null, null, null, null, null],
            [null, 1, null, null, null, null, 1, null, null, 1],
            [1, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, 1, 1, null, 0, null],
            [0, null, 0, null, null, null, null, null, null, null]
        ] },
    { id: 9, value: 10, label: '10H 2018-11-12', grid: [
            [1, 1, null, null, null, null, null, null, null, 1],
            [0, null, 0, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, 1],
            [null, null, 1, null, 0, null, null, 0, null, null],
            [null, 1, 1, null, null, null, null, 0, null, 1]
        ] },
    { id: 10, value: 10, label: '10H 2018-12-04', grid: [
            [null, null, 1, null, 0, null, null, null, 0, 0],
            [null, null, null, null, null, null, null, null, null, 0],
            [1, null, null, null, 0, null, null, null, null, null],
            [null, 0, null, 1, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 0, null, null, 1],
            [null, null, null, null, null, null, null, 0, null, null],
            [null, 0, null, null, null, null, null, null, null, 1],
            [null, null, 1, null, null, null, 1, null, null, null],
            [null, 1, null, 1, 1, null, 1, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null]
        ] },
    { id: 11, value: 10, label: '10VH 2019-08-26', grid: [
            [0, null, null, null, 1, 1, null, 0, null, 0],
            [null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, 1, null, null, 1, 1, null],
            [null, null, null, 0, null, null, null, 1, null, 1],
            [null, 1, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 1, null, 0, null],
            [null, null, null, null, null, null, null, null, null, null],
            [0, null, null, 0, null, 1, null, null, 0, null],
            [null, null, 1, null, null, null, null, 1, 1, null]
        ] },
    { id: 12, value: 12, label: '12H 2018-11-14', grid: [
            [null, null, null, 0, null, null, null, null, null, null, 0, null],
            [null, null, 1, null, null, 1, 0, null, null, null, null, null],
            [null, 0, 1, null, null, null, null, null, 0, null, 0, null],
            [null, 0, null, null, null, null, null, 0, 0, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null, null, 1],
            [null, 0, null, null, null, 0, null, null, null, null, null, null],
            [null, 0, 0, null, null, null, null, 0, null, null, null, null],
            [null, null, null, null, null, null, 1, null, null, null, 1, null],
            [null, null, 1, null, 0, null, 1, 1, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, 1, null, 0],
            [null, 0, null, null, 0, 0, null, null, 0, null, null, null],
            [null, null, 1, null, null, null, null, null, 1, 1, null, null]
        ] },
    { id: 13, value: 12, label: '12VH 2018-11-19', grid: [
            [0, null, null, null, null, null, null, null, null, 1, null, 0],
            [null, null, 0, null, null, 1, 1, null, null, null, null, null],
            [null, null, null, 1, null, null, null, null, 0, null, null, 0],
            [null, 1, 1, null, null, null, null, null, null, null, 1, 1],
            [null, null, null, 1, 1, null, null, null, null, null, null, null],
            [1, null, null, null, null, 1, null, 1, null, 1, 0, null],
            [null, 0, 0, null, null, 1, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, 0, null, null, null, 1],
            [null, 0, null, null, 1, null, null, 0, null, 1, null, 1],
            [null, null, null, null, null, 0, null, null, null, null, null, null],
            [0, null, null, 1, null, null, 1, null, null, 0, null, 1],
            [null, null, 1, null, null, 0, null, null, null, null, null, null]
        ] },
    { id: 14, value: 12, label: '12VH 2018-11-26', grid: [
            [0, null, null, null, null, 0, 1, null, null, null, null, 0],
            [null, 0, null, 1, null, null, null, 0, 0, null, null, null],
            [null, 0, null, null, 1, null, null, null, 0, null, null, null],
            [null, null, null, 1, 0, null, null, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null, null, 0],
            [0, null, 0, 1, null, 1, null, null, null, 1, null, null],
            [null, null, null, null, null, null, 0, null, 0, null, null, null],
            [null, 0, 0, null, null, 1, null, null, null, null, null, null],
            [null, 0, null, 0, null, null, null, 0, null, null, null, 0],
            [null, null, null, null, 1, null, 1, null, null, null, null, 0],
            [null, null, null, null, null, null, 1, 0, null, 0, null, null],
            [null, null, 0, null, null, null, null, null, null, 0, null, null]
        ] },
    { id: 15, value: 12, label: '12VH 2018-11-29', grid: [
            [null, null, null, 1, null, 1, 1, null, null, 0, null, 1],
            [null, null, 0, 0, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null, 0, null],
            [null, null, null, 0, 0, null, 1, null, null, 1, null, 0],
            [null, null, null, 1, 1, null, null, null, null, null, null, null],
            [null, 0, null, null, null, null, 1, null, null, 0, null, 0],
            [null, null, 0, null, null, 1, null, null, 1, null, null, null],
            [null, null, null, 1, null, null, null, null, null, 0, null, null],
            [null, null, null, 1, null, null, 1, null, null, 0, null, null],
            [null, null, null, null, 0, null, null, null, 0, null, null, 1],
            [null, 0, null, null, null, null, null, 0, null, 1, null, null],
            [null, 0, null, null, 1, 1, null, null, null, null, null, null]
        ] },
    { id: 16, value: 12, label: '12H 2019-10-08', grid: [
            [null, 1, null, null, 1, 1, null, null, null, 0, null, null],
            [1, null, 1, null, null, null, 1, null, null, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, 0, null, 0, null, 0],
            [null, null, null, 1, null, null, 1, null, 1, null, 1, null],
            [null, null, null, 1, 0, null, null, null, null, null, null, null],
            [null, 1, 1, null, null, 1, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, 0, null, null, 0, null],
            [null, null, 0, null, null, null, null, null, null, 1, null, null],
            [null, null, null, null, null, null, null, 0, null, null, 0, null],
            [null, null, 0, null, 0, null, null, null, null, 0, null, null],
            [null, null, null, null, null, null, null, null, 1, null, 1, 1]
        ] },
    { id: 17, value: 12, label: '12VH 2019-10-09', grid: [
            [null, null, null, 0, null, null, 0, null, null, 1, null, null],
            [null, 0, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, 0, null, null, null, null, 1],
            [null, null, null, null, 1, 1, null, null, null, 1, null, null],
            [1, null, null, null, null, 1, null, null, null, null, 1, null],
            [null, null, 1, null, null, null, null, null, 1, null, 1, null],
            [null, null, null, null, null, null, null, null, null, null, null, null],
            [1, 1, null, 0, null, null, null, 0, null, null, null, null],
            [null, 1, null, null, 1, 1, null, null, null, null, null, null],
            [null, null, 1, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null, null, null],
            [1, null, 1, null, null, null, null, null, null, null, null, 1]
        ] },
    { id: 18, value: 12, label: '12?? DUMMY', grid: [
            [1, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null, null, null],
            [0, null, null, null, null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null, null, null, null, null],
            [1, null, null, null, null, null, null, null, null, null, null, null]
        ] }
];


/***/ }),

/***/ "./src/app/shared/services/logger.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/logger.service.ts ***!
  \***************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.setLogLevel = function (logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        this.logLevel = logLevel;
    };
    LoggerService.prototype.getLogLevel = function () {
        return this.logLevel;
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/shared/services/logger.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/services/logger.ts ***!
  \*******************************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.log = function (showLog, msg) {
        if (showLog === void 0) { showLog = false; }
        if (showLog) {
            console.log(msg);
        }
    };
    return Logger;
}());



/***/ }),

/***/ "./src/app/shared/services/validater.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/services/validater.ts ***!
  \**********************************************/
/*! exports provided: Validater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validater", function() { return Validater; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");

var Validater = /** @class */ (function () {
    function Validater() {
    }
    // Validation of solved puzzle
    //    -- three num in a row
    //    -- correct num of 1s and 0s in row/col
    //    -- duplicate cols/rows
    //    -- etc.
    Validater.validate = function (showLog, gridSize, tableData) {
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Start');
        var rowArr = [];
        for (var row = 0; row < gridSize; row++) {
            var zeroCount = 0;
            var rowString = '';
            for (var col = 0; col < gridSize; col++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                rowString += '' + tableData[row][col].value;
            }
            // Logger.log(showLog, '[Validater] rowString: ' + rowString);
            if (zeroCount !== (gridSize / 2)) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Wrong number of zeros/ones in row ' + row);
                return false;
            }
            if (rowString.indexOf('000') > -1) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Three zeros in a row in row ' + row);
                return false;
            }
            if (rowString.indexOf('111') > -1) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Three ones in a row in row ' + row);
                return false;
            }
            rowArr.push(rowString);
        }
        var uniqueRowArr = Array.from(new Set(rowArr)).slice();
        if (rowArr.length > uniqueRowArr.length) {
            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Rows are not all unique');
            return false;
        }
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Rows are valid');
        var colArr = [];
        for (var col = 0; col < gridSize; col++) {
            var zeroCount = 0;
            var colString = '';
            for (var row = 0; row < gridSize; row++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                colString += '' + tableData[row][col].value;
            }
            // Logger.log(showLog, '[Validater] colString: ' + colString);
            if (zeroCount !== (gridSize / 2)) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Wrong number of zeros/ones in col ' + col);
                return false;
            }
            if (colString.indexOf('000') > -1) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Three zeros in a row in col ' + col);
                return false;
            }
            if (colString.indexOf('111') > -1) {
                _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Three ones in a row in col ' + col);
                return false;
            }
            colArr.push(colString);
        }
        var uniqueColArr = Array.from(new Set(colArr)).slice();
        if (colArr.length > uniqueColArr.length) {
            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Cols are not all unique');
            return false;
        }
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog, '[Validater] Cols are valid');
        return true;
    };
    return Validater;
}());



/***/ }),

/***/ "./src/app/shared/solvers.module.ts":
/*!******************************************!*\
  !*** ./src/app/shared/solvers.module.ts ***!
  \******************************************/
/*! exports provided: SolversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolversModule", function() { return SolversModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SolversModule = /** @class */ (function () {
    function SolversModule() {
    }
    SolversModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
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
            exports: []
        })
    ], SolversModule);
    return SolversModule;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkColKnownUnknown.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/solvers/checkColKnownUnknown.ts ***!
  \********************************************************/
/*! exports provided: CheckColKnownUnknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckColKnownUnknown", function() { return CheckColKnownUnknown; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckColKnownUnknown = /** @class */ (function () {
    function CheckColKnownUnknown() {
    }
    CheckColKnownUnknown.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckColKnownUnknown] Start');
        var moveMade = false;
        for (var col = 0; col < gridSize; col++) {
            var zeroCount = 0;
            var oneCount = 0;
            var colString = '';
            for (var row = 0; row < gridSize; row++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                if (tableData[row][col].value === 1) {
                    oneCount++;
                }
                var currVal = tableData[row][col].value;
                colString += '' + (currVal === null ? 'n' : currVal);
            }
            var allButOneZero = (zeroCount === (gridSize / 2) - 1);
            var allButOneOne = (oneCount === (gridSize / 2) - 1);
            if (allButOneZero || allButOneOne) {
                // Can put one more zero/one in col
                var ma = colString.match('1nn+0|0nn+1');
                if (ma != null) {
                    console.log('ma: ' + ma);
                    console.table(ma);
                    var startPos = ma.index;
                    var endPos = ma.index + ma[0].length - 1;
                    for (var row = 0; row < gridSize; row++) {
                        console.log('checking row ' + row);
                        console.log('first exp part: ' + (tableData[row][col].value === null));
                        console.log('second exp part: ' + !(row >= startPos && row <= endPos));
                        console.log('full exp: ' + (tableData[row][col].value === null && !(row >= startPos && row <= endPos)));
                        if (tableData[row][col].value === null && !(row >= startPos && row <= endPos)) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColKnownUnknown] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
                            console.log('[CheckColKnownUnknown] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
                            tableData[row][col].value = allButOneZero ? 1 : 0;
                            moveMade = true;
                        }
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckColKnownUnknown;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkColTotals.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/solvers/checkColTotals.ts ***!
  \**************************************************/
/*! exports provided: CheckColTotals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckColTotals", function() { return CheckColTotals; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckColTotals = /** @class */ (function () {
    function CheckColTotals() {
    }
    CheckColTotals.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckColTotals] Start');
        var moveMade = false;
        for (var col = 0; col < gridSize; col++) {
            var zeroCount = 0;
            var oneCount = 0;
            for (var row = 0; row < gridSize; row++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                if (tableData[row][col].value === 1) {
                    oneCount++;
                }
            }
            if (zeroCount === gridSize / 2) {
                for (var row = 0; row < gridSize; row++) {
                    if (tableData[row][col].value === null) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColTotals.1] Setting cell[' + row + '][' + col + '] to 1');
                        tableData[row][col].value = 1;
                        moveMade = true;
                    }
                }
            }
            if (oneCount === gridSize / 2) {
                for (var row = 0; row < gridSize; row++) {
                    if (tableData[row][col].value === null) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColTotals.2] Setting cell[' + row + '][' + col + '] to 0');
                        tableData[row][col].value = 0;
                        moveMade = true;
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckColTotals;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkColsThreeNulls.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/solvers/checkColsThreeNulls.ts ***!
  \*******************************************************/
/*! exports provided: CheckColsThreeNulls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckColsThreeNulls", function() { return CheckColsThreeNulls; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckColsThreeNulls = /** @class */ (function () {
    function CheckColsThreeNulls() {
    }
    CheckColsThreeNulls.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckColsThreeNulls] Start');
        var moveMade = false;
        for (var col = 0; col < gridSize; col++) {
            var zeroCount = 0;
            var oneCount = 0;
            var nullCount = 0;
            for (var row = 0; row < gridSize; row++) {
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
            var allButOneZero = (zeroCount === (gridSize / 2) - 1);
            var allButOneOne = (oneCount === (gridSize / 2) - 1);
            if (allButOneZero || allButOneOne) {
                // Can put one more zero/one in col
                // Check for 3 consecutive nulls
                var foundNulls = [];
                for (var row = 1; row < (gridSize - 1); row++) {
                    if (tableData[row][col].value === null) {
                        var above = (row - 1 >= 0) ? tableData[row - 1][col].value : null;
                        var below = (row + 1 < gridSize) ? tableData[row + 1][col].value : null;
                        if (above === null && below === null) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckColsThreeNulls] THREE NULLS FOUND in col: ' + col);
                            foundNulls = [row - 1, row, row + 1];
                        }
                    }
                }
                if (foundNulls.length) {
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckColsThreeNulls] foundNulls in rows: ' + foundNulls);
                    for (var row = 0; row < gridSize; row++) {
                        if (tableData[row][col].value === null && !(foundNulls.indexOf(row) > -1)) {
                            // Fill in other null cells with the opposite of the allButOne that's not in the three
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.1] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
                            tableData[row][col].value = allButOneZero ? 1 : 0;
                            moveMade = true;
                        }
                        if (nullCount === 3 // There's only 3 nulls
                            && tableData[row][col].value === null // this value is null
                        ) {
                            var val = allButOneZero ? 1 : 0;
                            if (row === 0) { // This row is top edge
                                // Fill in null cell at border with the opposite of the allButOne
                                if (val === (tableData[row + 3][col].value)) {
                                    // If opposite cell is not the allButOne
                                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.2a] Setting cell[' + row + '][' + col + '] to ' + val);
                                    tableData[row][col].value = allButOneZero ? 1 : 0;
                                    moveMade = true;
                                }
                            }
                            if (row === (gridSize - 1)) { // This row is bottom edge
                                // Fill in null cell at border with the opposite of the allButOne
                                if (val === (tableData[row - 3][col].value)) {
                                    // If opposite cell is not the allButOne
                                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.2b] Setting cell[' + row + '][' + col + '] to ' + val);
                                    tableData[row][col].value = allButOneZero ? 1 : 0;
                                    moveMade = true;
                                }
                            }
                        }
                        var topBorder = foundNulls[0] - 1;
                        var bottomBorder = foundNulls[2] + 1;
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
                                    var newVal = (tableData[foundNulls[0] - 1][col].value === 1) ? 0 : 1;
                                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.3] Setting cell[' + foundNulls[1] + '][' + col + '] to ' + newVal);
                                    tableData[foundNulls[1]][col].value = newVal;
                                    moveMade = true;
                                }
                            }
                            else {
                                if (allButOneZero
                                    && (tableData[topBorder][col].value === 0 || tableData[bottomBorder][col].value === 0)) {
                                    if (tableData[topBorder][col].value === 0
                                        && tableData[foundNulls[0]][col].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.4a] Setting cell[' + foundNulls[0] + '][' + col + '] to 1');
                                        tableData[foundNulls[0]][col].value = 1;
                                        moveMade = true;
                                    }
                                    if (tableData[bottomBorder][col].value === 0
                                        && tableData[foundNulls[2]][col].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.4b] Setting cell[' + foundNulls[2] + '][' + col + '] to 1');
                                        tableData[foundNulls[2]][col].value = 1;
                                        moveMade = true;
                                    }
                                }
                                if (allButOneOne
                                    && (tableData[topBorder][col].value === 1 || tableData[bottomBorder][col].value === 1)) {
                                    if (tableData[topBorder][col].value === 1
                                        && tableData[foundNulls[0]][col].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.4c] Setting cell[' + foundNulls[0] + '][' + col + '] to 0');
                                        tableData[foundNulls[0]][col].value = 0;
                                        moveMade = true;
                                    }
                                    if (tableData[bottomBorder][col].value === 1
                                        && tableData[foundNulls[2]][col].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsThreeNulls.4d] Setting cell[' + foundNulls[2] + '][' + col + '] to 0');
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
    };
    return CheckColsThreeNulls;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkColsTwoNulls.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/solvers/checkColsTwoNulls.ts ***!
  \*****************************************************/
/*! exports provided: CheckColsTwoNulls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckColsTwoNulls", function() { return CheckColsTwoNulls; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckColsTwoNulls = /** @class */ (function () {
    function CheckColsTwoNulls() {
    }
    CheckColsTwoNulls.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckColsTwoNulls] Start');
        var moveMade = false;
        for (var col = 0; col < gridSize; col++) {
            var zeroCount = 0;
            var oneCount = 0;
            var colString = '';
            for (var row = 0; row < gridSize; row++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                if (tableData[row][col].value === 1) {
                    oneCount++;
                }
                var currVal = tableData[row][col].value;
                colString += '' + (currVal === null ? 'n' : currVal);
            }
            var allButOneZero = (zeroCount === (gridSize / 2) - 1);
            var allButOneOne = (oneCount === (gridSize / 2) - 1);
            if ((allButOneZero && colString.indexOf('1nn1') > -1)
                // Need to put last zero in 1nn1, all else are 1
                || (allButOneOne && colString.indexOf('0nn0') > -1)) {
                // Need to put last one in 0nn0, all else are 0
                var foundPos = colString.indexOf('0nn0') > -1 ? colString.indexOf('0nn0') : colString.indexOf('1nn1');
                if (foundPos > -1) {
                    var foundRows = [foundPos, foundPos + 1, foundPos + 2, foundPos + 3];
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckColsTwoNulls] Rows: ' + foundRows);
                    for (var row = 0; row < gridSize; row++) {
                        if (tableData[row][col].value === null && !(foundRows.indexOf(row) > -1)) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckColsTwoNulls] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
                            tableData[row][col].value = allButOneZero ? 1 : 0;
                            moveMade = true;
                        }
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckColsTwoNulls;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkMiddle.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/solvers/checkMiddle.ts ***!
  \***********************************************/
/*! exports provided: CheckMiddle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMiddle", function() { return CheckMiddle; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckMiddle = /** @class */ (function () {
    function CheckMiddle() {
    }
    CheckMiddle.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckMiddle] Start');
        var moveMade = false;
        for (var row = 0; row < gridSize; row++) {
            for (var col = 0; col < gridSize; col++) {
                if (tableData[row][col].value === null) {
                    var above = (row - 1 >= 0) ? tableData[row - 1][col].value : null;
                    var below = (row + 1 < gridSize) ? tableData[row + 1][col].value : null;
                    if (above !== null && above === below) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckMiddle.1] Setting cell[' + row + '][' + col + '] to: ' + (above === 1 ? 0 : 1));
                        tableData[row][col].value = above === 1 ? 0 : 1;
                        moveMade = true;
                    }
                    else {
                        var left = (col - 1 >= 0) ? tableData[row][col - 1].value : null;
                        var right = (col + 1 < gridSize) ? tableData[row][col + 1].value : null;
                        if (left !== null && left === right) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckMiddle.2] Setting cell[' + row + '][' + col + '] to: ' + (left === 1 ? 0 : 1));
                            tableData[row][col].value = left === 1 ? 0 : 1;
                            moveMade = true;
                        }
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckMiddle;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkRowKnownUnknown.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/solvers/checkRowKnownUnknown.ts ***!
  \********************************************************/
/*! exports provided: CheckRowKnownUnknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckRowKnownUnknown", function() { return CheckRowKnownUnknown; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckRowKnownUnknown = /** @class */ (function () {
    function CheckRowKnownUnknown() {
    }
    CheckRowKnownUnknown.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowKnownUnknown] Start');
        var moveMade = false;
        for (var row = 0; row < gridSize; row++) {
            var zeroCount = 0;
            var oneCount = 0;
            var rowString = '';
            for (var col = 0; col < gridSize; col++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                if (tableData[row][col].value === 1) {
                    oneCount++;
                }
                var currVal = tableData[row][col].value;
                rowString += '' + (currVal === null ? 'n' : currVal);
            }
            var allButOneZero = (zeroCount === (gridSize / 2) - 1);
            var allButOneOne = (oneCount === (gridSize / 2) - 1);
            if (allButOneZero || allButOneOne) {
                // Can put one more zero/one in row
                var foundPos = rowString.indexOf('1nn0') > -1 ? rowString.indexOf('1nn0') : rowString.indexOf('0nn1');
                if (foundPos > -1) {
                    var foundCols = [foundPos, foundPos + 1, foundPos + 2, foundPos + 3];
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowKnownUnknown] Cols: ' + foundCols);
                    for (var col = 0; col < gridSize; col++) {
                        if (tableData[row][col].value === null && !(foundCols.indexOf(col) > -1)) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowKnownUnknown] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
                            tableData[row][col].value = allButOneZero ? 1 : 0;
                            moveMade = true;
                        }
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckRowKnownUnknown;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkRowTotals.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/solvers/checkRowTotals.ts ***!
  \**************************************************/
/*! exports provided: CheckRowTotals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckRowTotals", function() { return CheckRowTotals; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckRowTotals = /** @class */ (function () {
    function CheckRowTotals() {
    }
    CheckRowTotals.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowTotals] Start');
        var moveMade = false;
        for (var row = 0; row < gridSize; row++) {
            var zeroCount = 0;
            var oneCount = 0;
            for (var col = 0; col < gridSize; col++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                if (tableData[row][col].value === 1) {
                    oneCount++;
                }
            }
            if (zeroCount === gridSize / 2) {
                for (var col = 0; col < gridSize; col++) {
                    if (tableData[row][col].value === null) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowTotals.1] Setting cell[' + row + '][' + col + '] to 1');
                        tableData[row][col].value = 1;
                        moveMade = true;
                    }
                }
            }
            if (oneCount === gridSize / 2) {
                for (var col = 0; col < gridSize; col++) {
                    if (tableData[row][col].value === null) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowTotals.2] Setting cell[' + row + '][' + col + '] to 0');
                        tableData[row][col].value = 0;
                        moveMade = true;
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckRowTotals;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkRowsThreeNulls.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/solvers/checkRowsThreeNulls.ts ***!
  \*******************************************************/
/*! exports provided: CheckRowsThreeNulls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckRowsThreeNulls", function() { return CheckRowsThreeNulls; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckRowsThreeNulls = /** @class */ (function () {
    function CheckRowsThreeNulls() {
    }
    CheckRowsThreeNulls.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowsThreeNulls] Start');
        var moveMade = false;
        for (var row = 0; row < gridSize; row++) {
            var zeroCount = 0;
            var oneCount = 0;
            var nullCount = 0;
            for (var col = 0; col < gridSize; col++) {
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
            var allButOneZero = (zeroCount === (gridSize / 2) - 1);
            var allButOneOne = (oneCount === (gridSize / 2) - 1);
            if (allButOneZero || allButOneOne) {
                // Can put one more zero/one in row
                // Check for 3 consecutive nulls
                var foundNulls = [];
                for (var col = 1; col < (gridSize - 1); col++) {
                    if (tableData[row][col].value === null) {
                        var left = (col - 1 >= 0) ? tableData[row][col - 1].value : null;
                        var right = (col + 1 < gridSize) ? tableData[row][col + 1].value : null;
                        if (left === null && right === null) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowsThreeNulls] THREE NULLS FOUND in row: ' + row);
                            foundNulls = [col - 1, col, col + 1];
                        }
                    }
                }
                if (foundNulls.length) {
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowsThreeNulls] foundNulls in cols: ' + foundNulls);
                    for (var col = 0; col < gridSize; col++) {
                        if (tableData[row][col].value === null && !(foundNulls.indexOf(col) > -1)) {
                            // Fill in other null cells with the opposite of the allButOne that's not in the three
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.1] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
                            tableData[row][col].value = allButOneZero ? 1 : 0;
                            moveMade = true;
                        }
                        if (nullCount === 3 // There's only 3 nulls
                            && tableData[row][col].value === null // this value is null
                        ) {
                            var val = allButOneZero ? 1 : 0;
                            if (col === 0) { // This col is left edge
                                // Fill in null cell at border with the opposite of the allButOne
                                if (val === (tableData[row][col + 3].value)) {
                                    // If opposite cell is not the allButOne
                                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.2a] Setting cell[' + row + '][' + col + '] to ' + val);
                                    tableData[row][col].value = allButOneZero ? 1 : 0;
                                    moveMade = true;
                                }
                            }
                            if (col === (gridSize - 1)) { // This col is right edge
                                // Fill in null cell at border with the opposite of the allButOne
                                if (val === (tableData[row][col - 3].value)) {
                                    // If opposite cell is not the allButOne
                                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.2b] Setting cell[' + row + '][' + col + '] to ' + val);
                                    tableData[row][col].value = allButOneZero ? 1 : 0;
                                    moveMade = true;
                                }
                            }
                        }
                        var leftBorder = foundNulls[0] - 1;
                        var rightBorder = foundNulls[2] + 1;
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
                                    var newVal = (tableData[row][foundNulls[0] - 1].value === 1) ? 0 : 1;
                                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.3] Setting cell[' + row + '][' + foundNulls[1] + '] to ' + newVal);
                                    tableData[row][foundNulls[1]].value = newVal;
                                    moveMade = true;
                                }
                            }
                            else {
                                if (allButOneZero
                                    && (tableData[row][leftBorder].value === 0 || tableData[row][rightBorder].value === 0)) {
                                    if (tableData[row][leftBorder].value === 0
                                        && tableData[row][foundNulls[0]].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.4a] Setting cell[' + row + '][' + foundNulls[0] + '] to 1');
                                        tableData[row][foundNulls[0]].value = 1;
                                        moveMade = true;
                                    }
                                    if (tableData[row][rightBorder].value === 0
                                        && tableData[row][foundNulls[2]].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.4b] Setting cell[' + row + '][' + foundNulls[2] + '] to 1');
                                        tableData[row][foundNulls[2]].value = 1;
                                        moveMade = true;
                                    }
                                }
                                if (allButOneOne
                                    && (tableData[row][leftBorder].value === 1 || tableData[row][rightBorder].value === 1)) {
                                    if (tableData[row][leftBorder].value === 1
                                        && tableData[row][foundNulls[0]].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.4c] Setting cell[' + row + '][' + foundNulls[0] + '] to 0');
                                        tableData[row][foundNulls[0]].value = 0;
                                        moveMade = true;
                                    }
                                    if (tableData[row][rightBorder].value === 1
                                        && tableData[row][foundNulls[2]].value === null // this value is null
                                    ) {
                                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsThreeNulls.4d] Setting cell[' + row + '][' + foundNulls[2] + '] to 0');
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
    };
    return CheckRowsThreeNulls;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkRowsTwoNulls.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/solvers/checkRowsTwoNulls.ts ***!
  \*****************************************************/
/*! exports provided: CheckRowsTwoNulls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckRowsTwoNulls", function() { return CheckRowsTwoNulls; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckRowsTwoNulls = /** @class */ (function () {
    function CheckRowsTwoNulls() {
    }
    CheckRowsTwoNulls.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowsTwoNulls] Start');
        var moveMade = false;
        for (var row = 0; row < gridSize; row++) {
            var zeroCount = 0;
            var oneCount = 0;
            var rowString = '';
            for (var col = 0; col < gridSize; col++) {
                if (tableData[row][col].value === 0) {
                    zeroCount++;
                }
                if (tableData[row][col].value === 1) {
                    oneCount++;
                }
                var currVal = tableData[row][col].value;
                rowString += '' + (currVal === null ? 'n' : currVal);
            }
            var allButOneZero = (zeroCount === (gridSize / 2) - 1);
            var allButOneOne = (oneCount === (gridSize / 2) - 1);
            if ((allButOneZero && rowString.indexOf('1nn1') > -1)
                // Need to put last zero in 1nn1, all else are 1
                || (allButOneOne && rowString.indexOf('0nn0') > -1)) {
                // Need to put last one in 0nn0, all else are 0
                var foundPos = rowString.indexOf('0nn0') > -1 ? rowString.indexOf('0nn0') : rowString.indexOf('1nn1');
                if (foundPos > -1) {
                    var foundCols = [foundPos, foundPos + 1, foundPos + 2, foundPos + 3];
                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckRowsTwoNulls] Cols: ' + foundCols);
                    for (var col = 0; col < gridSize; col++) {
                        if (tableData[row][col].value === null && !(foundCols.indexOf(col) > -1)) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckRowsTwoNulls] Setting cell[' + row + '][' + col + '] to ' + (allButOneZero ? 1 : 0));
                            tableData[row][col].value = allButOneZero ? 1 : 0;
                            moveMade = true;
                        }
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckRowsTwoNulls;
}());



/***/ }),

/***/ "./src/app/shared/solvers/checkTwins.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/solvers/checkTwins.ts ***!
  \**********************************************/
/*! exports provided: CheckTwins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckTwins", function() { return CheckTwins; });
/* harmony import */ var _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/logger */ "./src/app/shared/services/logger.ts");
/* harmony import */ var _shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/log.model */ "./src/app/shared/models/log.model.ts");


var CheckTwins = /** @class */ (function () {
    function CheckTwins() {
    }
    CheckTwins.check = function (gridSize, tableData, logLevel) {
        if (logLevel === void 0) { logLevel = 0; }
        var showLog = function (myLevel) { return (logLevel >= myLevel); };
        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].TRACE), '[CheckTwins] Start');
        var moveMade = false;
        for (var row = 0; row < gridSize; row++) {
            for (var col = 0; col < gridSize; col++) {
                if (tableData[row][col].value === null) {
                    var above1 = (row - 1 >= 0) ? tableData[row - 1][col].value : null;
                    var above2 = (row - 2 >= 0) ? tableData[row - 2][col].value : null;
                    if (above1 !== null && above1 === above2) {
                        _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckTwins.1] Setting cell[' + row + '][' + col + '] to: ' + (above1 === 1 ? 0 : 1));
                        tableData[row][col].value = above1 === 1 ? 0 : 1;
                        moveMade = true;
                    }
                    else {
                        var below1 = (row + 1 < gridSize) ? tableData[row + 1][col].value : null;
                        var below2 = (row + 2 < gridSize) ? tableData[row + 2][col].value : null;
                        if (below1 !== null && below1 === below2) {
                            _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckTwins.2] Setting cell[' + row + '][' + col + '] to: ' + (below1 === 1 ? 0 : 1));
                            tableData[row][col].value = below1 === 1 ? 0 : 1;
                            moveMade = true;
                        }
                        else {
                            var left1 = (col - 1 >= 0) ? tableData[row][col - 1].value : null;
                            var left2 = (col - 2 >= 0) ? tableData[row][col - 2].value : null;
                            if (left1 !== null && left1 === left2) {
                                _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckTwins.3] Setting cell[' + row + '][' + col + '] to: ' + (left1 === 1 ? 0 : 1));
                                tableData[row][col].value = left1 === 1 ? 0 : 1;
                                moveMade = true;
                            }
                            else {
                                var right1 = (col + 1 < gridSize) ? tableData[row][col + 1].value : null;
                                var right2 = (col + 2 < gridSize) ? tableData[row][col + 2].value : null;
                                if (right1 !== null && right1 === right2) {
                                    _shared_services_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"].log(showLog(_shared_models_log_model__WEBPACK_IMPORTED_MODULE_1__["LogLevels"].INFO), '[CheckTwins.4] Setting cell[' + row + '][' + col + '] to: ' + (right1 === 1 ? 0 : 1));
                                    tableData[row][col].value = right1 === 1 ? 0 : 1;
                                    moveMade = true;
                                }
                            }
                        }
                    }
                }
            }
        }
        return moveMade;
    };
    return CheckTwins;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jim\Documents\Angular\ngBinaryPuzzle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map