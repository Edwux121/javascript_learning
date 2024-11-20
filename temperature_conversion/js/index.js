const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temperature;

function convert() {
    if (toFahrenheit.checked) {
        temperature = Number(textBox.value);
        temperature = temperature * 9 / 5 + 32;
        result.textContent = temperature + "°F";
    }
    else if (toCelsius.checked) {
        temperature = Number(textBox.value);
        temperature = (temperature - 32) * 5 / 9;
        result.textContent = temperature + "°C";
    }
    else {
        result.textContent = "Please select a conversion type.";
    }
}
