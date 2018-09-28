// Write out the pseudo code first

// Determine which elements you'll need to select with
// document.getElementById

var fahrenheitForm = document.getElementById('fahrenheitForm');
var submitFahrenheit = document.getElementById('submitFahrenheit');
var convertedCelsius = document.getElementById('convertedCelsius');

var celsiusForm = document.getElementById('celsiusForm');
var submitCelsius = document.getElementById('submitCelsius');
var convertedFahrenheit = document.getElementById('convertedFahrenheit');



// Think about the event you'll need to watch for

function calculateCelsius(){
  var rawTempFahrenheit = fahrenheitForm.value;
  var convertedTempCelsius = (rawTempFahrenheit -  32) * (5/9);
  convertedCelsius.textContent = convertedTempCelsius + ' ˚C';
}

submitFahrenheit.addEventListener('click', calculateCelsius);

function calculateFahrenheit(){
  var rawTempCelsius = celsiusForm.value;
  var convertedTempFahrenheit = (rawTempCelsius * (9/5)) + 32;

  convertedFahrenheit.textContent = convertedTempFahrenheit + ' ˚F';
}

submitCelsius.addEventListener('click', calculateFahrenheit)

// Think about how you will need to add the result of your calculation
// to the page


// Use the following formula to convert fahrenheit to celsius
// °C = (°F  -  32) * (5/9)

// For extra credit add another button that swaps the conversion around
// so you can covert celsius to Fahrenheit too! :)
//
// When a user clicks on the element with id #submit it should take the value
// in the form with id #farenheit.
