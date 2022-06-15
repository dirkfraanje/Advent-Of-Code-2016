let dayinput = document.getElementById('dayinput');
let output = document.getElementById('output');
const part = document.getElementById('radio_1');
mainForm.addEventListener('submit', execute);

function execute() {
    let endResult = 0;
    dayinput.innerHTML = '';
    let inputSplitted = dayinput.value.trim().split(/\s+/);
    let threeElementCounter = 0;
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;
    inputSplitted.forEach(element => {
        if (value1 === 0)
            value1 = element;
        else if (value2 === 0)
            value2 = element;
        else if (value3 === 0)
            value3 = element;

        threeElementCounter++;
        if (threeElementCounter % 3 === 0) {
            if (isTriangle(value1, value2, value3)) {
                output.innerHTML += `<p class="true">${value1} ${value2} ${value3}</p>`;
                endResult++;
            }
            else
                output.innerHTML += `<p class="false">${value1} ${value2} ${value3}</p>`;
            value1 = 0; value2 = 0; value3 = 0;
        }
    });
    output.innerHTML = `<h3>Result: ${endResult}</h3>`+ output.innerHTML;
    // if (part.checked)
    //     alert('1');
    // else
    //     alert('2');
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