const display1 = document.querySelector('.display_a');
const display2 = document.querySelector('.display_b');
const tempRst = document.querySelector('temp-result');
const numbersC = document.querySelector('.number');
const operations = document.querySelector('.operation');
const equal = document.querySelector('.equal');
const allClear = document.querySelector('.all_clear');
const lastClear = document.querySelector('.last_entity_clear');

let view1 = '';
let view2 = '';
let result = null;
let lastOperation = '';
let theDot = false;

numbersC.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !theDot) {
            theDot = true;
        } else if (e.target.innerText === '.' && theDot) {
            return;
        }
        view2 += e.target.innerText;
        display2.innerText = view2
    })
})

operations.forEach((operation) => {
    operation.addEventListener('click', (e) => {
      if (!view2) return
      theDot = false
      const operationName = e.target.innerText
      if (view1 && view2 && lastOperation) {
        mathOperation()
      } else {
        result = parseFloat(view2)
      }
      clearVar(operationName)
      lastOperation = operationName
      console.log(result)
    })
  })
  function clearVar(name = '') {
    view1 += view2 + ' ' + name + ' '
    display1.innerText = view1
    display2.innerText = ''
    view2 = ''
    tempRst.innerText = result
  }
  
  function mathOperation() {
    if (lastOperation === 'x') {
      result = parseFloat(result) * parseFloat(view2)
    } else if (lastOperation === '+') {
      result = parseFloat(result) + parseFloat(view2)
    } else if (lastOperation === '-') {
      result = parseFloat(result) - parseFloat(view2)
    } else if (lastOperation === '/') {
      result = parseFloat(result) / parseFloat(view2)
    } else if (lastOperation === '%') {
      result = parseFloat(result) % parseFloat(view2)
    }
  }
  // operation();
  
  equal.addEventListener('click', () => {
    if (!view2 || !view1) return
    theDot = false
    mathOperation()
    clearVar()
    display2.innerText = result
    tempRst.innerText = ''
    view2 = result
    view1 = ''
  })
  
  clearAllEl.addEventListener('click', () => {
    dis1Num = ''
    dis2Num = ''
    display1El.innerText = ''
    display2El.innerText = ''
    result = ''
    tempResultEl.innerText = ''
  })
  
  clearLastEl.addEventListener('click', () => {
    display2El.innerText = ''
    dis2Num = ''
  })
  
  window.addEventListener('keydown', (e) => {
    if (
      e.key === '0' ||
      e.key === '1' ||
      e.key === '2' ||
      e.key === '3' ||
      e.key === '4' ||
      e.key === '5' ||
      e.key === '6' ||
      e.key === '7' ||
      e.key === '8' ||
      e.key === '9' ||
      e.key === '.'
    ) {
      clickButtonEl(e.key)
      // console.log(e.key)
    } else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '%') {
      clickOperation(e.key)
    } else if (e.key === '*') {
      clickOperation('x')
      // console.log(e.key)
    } else if (e.key == 'Enter' || e.key === '=') {
      clickEqual()
    }
    // console.log(e.key)
  })
  function clickButtonEl(key) {
    numbersEl.forEach((button) => {
      if (button.innerText === key) {
        button.click()
      }
    })
  }
  function clickOperation(key) {
    operationEl.forEach((operation) => {
      if (operation.innerText === key) {
        operation.click()
      }
    })
  }
  function clickEqual() {
    equalEl.click()
  }
  