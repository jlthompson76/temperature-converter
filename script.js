const name = prompt("What is your name?");

const fahrenheit = prompt(`Hi, ${name}, please enter the .temperature in Fahrenheit and I will convert it into Celsius for you`);
const celsius = toCelsius(fahrenheit);
displayConversion(fahrenheit);

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

function displayConversion(fahrenheit) {
    let conversion = `${fahrenheit}\xB0 Fahrenheit is ${celsius}\xB0 Celsius`;
    alert(conversion);
    let  message;
    if (fahrenheit <= 69) {
        message = `It's cold outside, ${name}! Don't forget your coat!`;
    } else if (fahrenheit >= 84) {
       message = `It's hot outside, ${name}! Don't forget your sunscreen!`;
    } else {
        message = `It's perfect weather, ${name}, enjoy!`;
    }
    alert(message);
  }
