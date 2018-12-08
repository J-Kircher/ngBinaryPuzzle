import { GridPuzzles } from '../shared/models/grid.model';

export const Samples: GridPuzzles[] = [
  { id: 0, value: 0, label: 'None', grid: [] },
  { id: 1, value: 6, label: '6H Test 1', grid: [
    [ 1, 1, null, null, null, null ],
    [ null, null, 0, null, null, null ],
    [ 1, null, null, null, null, 1 ],
    [ null, null, null, null, null, null ],
    [ null, 0, null, null, null, 1 ],
    [ null, null, null, 1, 1, null ]
  ] },
  { id: 2, value: 6, label: '6H Test 2', grid: [
    [ 0, null, null, 0, null, 0 ],
    [ null, null, null, null, null, null ],
    [ 1, 1, null, null, 1, null ],
    [ null, null, 1, null, 1, 1 ],
    [ null, 1, null, null, null, null ],
    [ 0, null, null, null, null, null ]
  ] },
  { id: 3, value: 8, label: '8H 2018-11-13', grid: [
    [ 1, 1, null, null, null, null, 1, null ],
    [ null, null, null, 0, null, null, null, null ],
    [ 0, null, 1, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, 1 ],
    [ null, null, 1, null, null, null, 1, null ],
    [ null, 0, null, 0, null, null, null, 0 ],
    [ null, null, null, null, null, null, null, null ],
    [ null, null, null, 0, null, 1, 1, null ]
  ] },
  { id: 4, value: 8, label: '8H 2018-11-16', grid: [
    [ 1, null, null, null, null, 1, null, null ],
    [ null, null, null, null, null, null, null, 1 ],
    [ 1, null, null, 0, null, null, null, null ],
    [ null, null, 1, null, 1, null, null, 1 ],
    [ null, null, null, null, null, null, null, null ],
    [ 1, null, null, 1, null, 1, null, 1 ],
    [ null, null, null, null, null, 1, null, 1 ],
    [ 1, null, 1, null, null, null, null, null ]
  ] },
  { id: 5, value: 8, label: '8H 2018-11-17', grid: [
    [ 1, 1, null, null, null, null, 1, null ],
    [ null, null, null, 0, null, 1, null, 0 ],
    [ null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null ],
    [ null, null, null, 0, 0, null, null, 0 ],
    [ 1, null, null, 1, null, 1, 1, null ],
    [ null, null, null, null, null, null, null, null ],
    [ null, 0, 0, null, null, 1, null, null ]
  ] },
  { id: 6, value: 10, label: '10H Test 1', grid: [
    [ 1, 0, 1, 1, 0, null, null, null, null, 1 ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ 1, 0, 0, 1, 0, null, null, null, null, 1 ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ 0, 0, 1, 0, null, null, null, null, 1, 0 ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ 1, 0, 1, 1, 0, 1, null, null, null, null ]
  ] },
  { id: 7, value: 10, label: '10H Test 2', grid: [
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ 1, 1, 0, null, null, 0, 1, null, 0, 1 ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ]
  ] },
  { id: 8, value: 10, label: '10H 2018-11-10', grid: [
    [ null, 1, null, null, 0, null, null, null, null, null ],
    [ null, null, null, null, null, 1, null, 0, null, 0 ],
    [ null, null, null, 0, null, null, null, null, null, null ],
    [ null, null, null, null, 1, null, null, 1, null, 1 ],
    [ null, null, null, 1, null, null, null, 1, 0, null ],
    [ null, null, 0, null, 1, null, null, null, null, null ],
    [ null, 1, null, null, null, null, 1, null, null, 1 ],
    [ 1, 1, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, 1, 1, null, 0, null ],
    [ 0, null, 0, null, null, null, null, null, null, null ]
  ] },
  { id: 9, value: 10, label: '10H 2018-11-12', grid: [
    [ 1, 1, null, null, null, null, null, null, null, 1 ],
    [ 0, null, 0, null, null, 0, 0, null, null, null ],
    [ null, null, null, null, null, null, null, null, 1, null ],
    [ null, null, 1, null, null, null, null, 1, null, null ],
    [ null, 0, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, 0, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, 1, null, null, 1 ],
    [ null, null, 1, null, 0, null, null, 0, null, null ],
    [ null, 1, 1, null, null, null, null, 0, null, 1 ]
  ] },
  { id: 10, value: 12, label: '12H 2018-11-14', grid: [
    [ null, null, null, 0, null, null, null, null, null, null, 0, null ],
    [ null, null, 1, null, null, 1, 0, null, null, null, null, null ],
    [ null, 0, 1, null, null, null, null, null, 0, null, 0, null ],
    [ null, 0, null, null, null, null, null, 0, 0, null, null, null ],
    [ null, null, null, null, null, null, 1, null, null, null, null, 1 ],
    [ null, 0, null, null, null, 0, null, null, null, null, null, null ],
    [ null, 0, 0, null, null, null, null, 0, null, null, null, null ],
    [ null, null, null, null, null, null, 1, null, null, null, 1, null ],
    [ null, null, 1, null, 0, null, 1, 1, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, 1, null, 0 ],
    [ null, 0, null, null, 0, 0, null, null, 0, null, null, null ],
    [ null, null, 1, null, null, null, null, null, 1, 1, null, null ]
  ] },
  { id: 11, value: 12, label: '12VH 2018-11-19', grid: [
    [ 0, null, null, null, null, null, null, null, null, 1, null, 0 ],
    [ null, null, 0, null, null, 1, 1, null, null, null, null, null ],
    [ null, null, null, 1, null, null, null, null, 0, null, null, 0 ],
    [ null, 1, 1, null, null, null, null, null, null, null, 1, 1 ],
    [ null, null, null, 1, 1, null, null, null, null, null, null, null ],
    [ 1, null, null, null, null, 1, null, 1, null, 1, 0, null ],
    [ null, 0, 0, null, null, 1, null, null, null, 0, null, null ],
    [ null, null, null, null, null, null, null, 0, null, null, null, 1 ],
    [ null, 0, null, null, 1, null, null, 0, null, 1, null, 1 ],
    [ null, null, null, null, null, 0, null, null, null, null, null, null ],
    [ 0, null, null, 1, null, null, 1, null, null, 0, null, 1 ],
    [ null, null, 1, null, null, 0, null, null, null, null, null, null ]
  ] },
  { id: 12, value: 12, label: '12VH 2018-11-26', grid: [
    [ 0, null, null, null, null, 0, 1, null, null, null, null, 0 ],
    [ null, 0, null, 1, null, null, null, 0, 0, null, null, null ],
    [ null, 0, null, null, 1, null, null, null, 0, null, null, null ],
    [ null, null, null, 1, 0, null, null, null, null, null, 1, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, 0 ],
    [ 0, null, 0, 1, null, 1, null, null, null, 1, null, null ],
    [ null, null, null, null, null, null, 0, null, 0, null, null, null ],
    [ null, 0, 0, null, null, 1, null, null, null, null, null, null ],
    [ null, 0, null, 0, null, null, null, 0, null, null, null, 0 ],
    [ null, null, null, null, 1, null, 1, null, null, null, null, 0 ],
    [ null, null, null, null, null, null, 1, 0, null, 0, null, null ],
    [ null, null, 0, null, null, null, null, null, null, 0, null, null ]
  ] },
  { id: 13, value: 12, label: '12VH 2018-11-29', grid: [
    [ null, null, null, 1, null, 1, 1, null, null, 0, null, 1 ],
    [ null, null, 0, 0, null, null, null, null, null, null, null, null ],
    [ 1, null, null, null, null, null, null, null, null, null, 0, null ],
    [ null, null, null, 0, 0, null, 1, null, null, 1, null, 0 ],
    [ null, null, null, 1, 1, null, null, null, null, null, null, null ],
    [ null, 0, null, null, null, null, 1, null, null, 0, null, 0 ],
    [ null, null, 0, null, null, 1, null, null, 1, null, null, null ],
    [ null, null, null, 1, null, null, null, null, null, 0, null, null ],
    [ null, null, null, 1, null, null, 1, null, null, 0, null, null ],
    [ null, null, null, null, 0, null, null, null, 0, null, null, 1 ],
    [ null, 0, null, null, null, null, null, 0, null, 1, null, null ],
    [ null, 0, null, null, 1, 1, null, null, null, null, null, null ]
  ] },
  { id: 14, value: 12, label: '12?? DUMMY', grid: [
    [ 1, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null ],
    [ 0, null, null, null, null, null, null, null, null, null, null, null ],
    [ 1, null, null, null, null, null, null, null, null, null, null, null ],
    [ 1, null, null, null, null, null, null, null, null, null, null, null ],
    [ 0, null, null, null, null, null, null, null, null, null, null, null ],
    [ 1, null, null, null, null, null, null, null, null, null, null, null ],
    [ 0, null, null, null, null, null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null, null, null, null, null, null ],
    [ 1, null, null, null, null, null, null, null, null, null, null, null ]
  ] }
];
