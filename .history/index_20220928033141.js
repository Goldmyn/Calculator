const display1 = document.querySelector('.display_a');
const display2 = document.querySelector('.display_b');
const tempRst = document.querySelector('temp-result');
const numbers = document.querySelector('.number');
const operations = document.querySelector('.operation');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.all_clear');
const lastClear = document.querySelector('.last_entity_clear');

let view1 = '';
let view2 = '';
let result = null;
let lastOperation = '';
let have