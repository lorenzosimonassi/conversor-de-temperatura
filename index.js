function convertTemperature() {
    // Obtém o valor da temperatura digitada
  var temperatureInput = document.getElementById("temperature").value;

  // Verifica se um valor foi inserido
  if (temperatureInput) {
    // Converte a temperatura para Celsius
    var temperatureCelsius = parseFloat(temperatureInput);

    // Converte para Fahrenheit
    var temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

    // Converte para Kelvin
    var temperatureKelvin = temperatureCelsius + 273.15;

    // Exibe o resultado da conversão
    var result = document.getElementById("result");
    result.innerHTML =
      "Temperatura em Celsius: " +
      temperatureCelsius.toFixed(2) +
      "°C<br />" +
      "Temperatura em Fahrenheit: " +
      temperatureFahrenheit.toFixed(2) +
      "°F<br />" +
      "Temperatura em Kelvin: " +
      temperatureKelvin.toFixed(2) +
      "K";

    // Altera a cor de fundo com base na temperatura
    var body = document.getElementsByTagName("body")[0];

    if (temperatureCelsius > 30) {
      body.style.backgroundColor = "#c42c21";
    } else if (temperatureCelsius >= 10 && temperatureCelsius <= 30) {
      body.style.backgroundColor = "#ffdd33";
    } else {
      body.style.backgroundColor = "#4accff";
    }
  }
}