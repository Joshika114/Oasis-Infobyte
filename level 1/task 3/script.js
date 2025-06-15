function convertTemperature() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const themeIcon = document.getElementById("themeIcon");

  if (isNaN(temp)) {
    alert("Please enter a valid number");
    return;
  }

  let celsius, fahrenheit, kelvin;

  if (unit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9 / 5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === "fahrenheit") {
    fahrenheit = temp;
    celsius = (temp - 32) * 5 / 9;
    kelvin = celsius + 273.15;
  } else if (unit === "kelvin") {
    kelvin = temp;
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9 / 5) + 32;
  }

  document.getElementById("celsiusResult").innerText = `Celsius: ${celsius.toFixed(2)} °C`;
  document.getElementById("fahrenheitResult").innerText = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById("kelvinResult").innerText = `Kelvin: ${kelvin.toFixed(2)} K`;

  const body = document.body;

  if (celsius <= 10) {
    body.style.background = "linear-gradient(135deg, #c2e9fb, #1d417c)";
    themeIcon.textContent = "❄️";
    themeIcon.style.transform = "rotate(0deg)";
  } else if (celsius >= 30) {
    body.style.background = "linear-gradient(135deg, #ff6a00, #ff0000)";
    themeIcon.textContent = "☀️";
    themeIcon.style.transform = "rotate(20deg)";
  } else {
    body.style.background = "linear-gradient(135deg, #f5f5f5, #e0e0e0)";
    themeIcon.textContent = "🌤️";
    themeIcon.style.transform = "rotate(0deg)";
  }
}
