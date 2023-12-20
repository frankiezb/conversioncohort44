function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const scaleSelect = document.getElementById('scale');
    const resultDiv = document.getElementById('result');

    const start = parseFloat(temperatureInput.value);
    const scale = scaleSelect.value;

    if (!isNaN(start)) {
        if (scale === "C") {
            // Convert Celsius to Fahrenheit
            const fahrenheit = (start * 9/5) + 32;
            resultDiv.textContent = `${start}°C is ${fahrenheit.toFixed(2)}°F`;
        } else if (scale === "F") {
            // Convert Fahrenheit to Celsius
            const celsius = (start - 32) * 5/9;
            resultDiv.textContent = `${start}°F is ${celsius.toFixed(2)}°C`;
        } else {
            resultDiv.textContent = "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
        }
    } else {
        resultDiv.textContent = "Invalid temperature. Please enter a valid number.";
    }
}