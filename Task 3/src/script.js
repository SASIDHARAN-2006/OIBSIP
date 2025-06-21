function convertTemperature() {
  const input = document.getElementById("temperatureInput").value;
  const unit = document.getElementById("unitSelect").value;
  const result = document.getElementById("result");

  if (input === "") {
    result.textContent = "Please enter a temperature.";
    return;
  }

  const temp = parseFloat(input);
  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
      result.textContent = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
      break;
    case "fahrenheit":
      celsius = (temp - 32) * 5/9;
      kelvin = celsius + 273.15;
      result.textContent = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
      break;
    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      result.textContent = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
      break;
    default:
      result.textContent = "Invalid unit selected.";
  }
}
