function btn(input) {
    let display = document.getElementById("input");
    display.value += input;
}

function clearDisplay() {
    let display = document.getElementById("input");
    display.value = "";
}

function back() {
    let display = document.getElementById("input");
    display.value = display.value.slice(0, -1);
}

function cal() {
    let display = document.getElementById("input");
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
