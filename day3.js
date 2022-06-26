'use strict';
let dayinput = document.getElementById('dayinput');
let output = document.getElementById('output');
const part = document.getElementById('radio_1');
mainForm.addEventListener('submit', execute);

function execute() {
    let elem = document.getElementById("bar");

    output.innerHTML = '';
    let endResult = 0;
    let inputSplitted = dayinput.value.trim().split(/\s+/);
    let threeElementCounter = 0;
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;

    var i = 0, j = inputSplitted.length;
    var iv = setInterval(function () {

        if (value1 === 0)
            value1 = inputSplitted[i];
        else if (value2 === 0)
            value2 = inputSplitted[i];
        else if (value3 === 0)
            value3 = inputSplitted[i];

        threeElementCounter++;
        if (threeElementCounter % 3 === 0) {
            if (isTriangle(value1, value2, value3)) {
                output.innerHTML = `<p class="true">${value1} ${value2} ${value3}</p>${output.innerHTML}`;
                endResult++;
            }
            else
                output.innerHTML = `<p class="false">${value1} ${value2} ${value3}</p>${output.innerHTML}`;
            value1 = 0; value2 = 0; value3 = 0;
        }
        //Set new progress bar percentage
        elem.style.width = `${i / j * 100}%`;
        
        //Check if all elements have been processed
        if (++i >= j) {
            clearInterval(iv);
            output.innerHTML = `<h3>Result: ${endResult}</h3>` + output.innerHTML;
        }
    }, 1);
}

function isTriangle(val1, val2, val3) {
    val1 = Number(val1);
    val2 = Number(val2);
    val3 = Number(val3);
    if (val3 > val2 && val3 > val1)
        return val1 + val2 > val3;
    if (val2 > val1 && val2 > val3)
        return val1 + val3 > val2;
    else
        return val2 + val3 > val1;
}