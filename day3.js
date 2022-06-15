const dayinput = document.getElementById('dayinput');
const part = document.getElementById('radio_1');
mainForm.addEventListener('submit', execute);

function execute() {
    alert(dayinput.value);
    if (part.checked)
        alert('1');
    else
        alert('2');
}