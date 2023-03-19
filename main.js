let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');
let btnFour = document.getElementById('btnFour');
let btnFive = document.getElementById('btnFive');
let btnSix = document.getElementById('btnSix');
let btnSeven = document.getElementById('btnSeven');
let btnEight = document.getElementById('btnEight');
let btnNine = document.getElementById('btnNine');
let btnZero = document.getElementById('btnZero');
let btnDblZero = document.getElementById('btnDblZero');
let btnDot = document.getElementById('btnDot');

const btnEqual = document.getElementById('btnEqual');
const btnAddition = document.getElementById('btnAddition');
const btnSubstraction = document.getElementById('btnSubstraction');
const btnMultiplication = document.getElementById('btnMultiplication');
const btnDivision = document.getElementById('btnDivision');
const valueShowBox = document.getElementById('valueShowBox');
const btnClear = document.getElementById('btnClear');
const btnSlice = document.getElementById('btnSlice');


btnOne.addEventListener('click',btnOneFunc)

function btnOneFunc(){
    valueShowBox.value += 1;
}

btnTwo.addEventListener('click',btnTwoFunc)

function btnTwoFunc(){
    valueShowBox.value += 2;
}

btnThree.addEventListener('click',btnThreeFunc)

function btnThreeFunc(){
    valueShowBox.value += 3;
}

btnFour.addEventListener('click',btnFourFunc)

function btnFourFunc(){
    valueShowBox.value += 4;
}

btnFive.addEventListener('click',btnFiveFunc)

function btnFiveFunc(){
    valueShowBox.value += 5;
}

btnSix.addEventListener('click',btnSixFunc)

function btnSixFunc(){
    valueShowBox.value += 6;
}

btnSeven.addEventListener('click',btnSevenFunc)

function btnSevenFunc(){
    valueShowBox.value += 7;
}

btnEight.addEventListener('click',btnEightFunc)

function btnEightFunc(){
    valueShowBox.value += 8;
}

btnNine.addEventListener('click',btnNineFunc)

function btnNineFunc(){
    valueShowBox.value += 9;
}

btnZero.addEventListener('click',btnZeroFunc)

function btnZeroFunc(){
    valueShowBox.value += 0;
}

btnDblZero.addEventListener('click',btnDblZeroFunc)

function btnDblZeroFunc(){
    valueShowBox.value += '00';
}

btnClear.addEventListener('click',btnClearFunc)

function btnClearFunc(){
    valueShowBox.value = null;
}



btnAddition.addEventListener('click' , btnAddFunc)

function btnAddFunc(){
    var x = valueShowBox.this.value
    var y = x + z;
    var z = parseInt('+');
    
}


btnEqual.addEventListener('click' , btnEqualFunc)

function btnEqualFunc(){
    valueShowBox.value = zz
}
