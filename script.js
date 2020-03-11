const name = prompt("What is your name?");

const fahrenheit = prompt(`Hi, ${name}, please enter the temperature in Fahrenheit.`);
const celsius = toCelsius(fahrenheit);
displayMessage(fahrenheit);

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

function displayMessage(fahrenheit) {
    let message = `${fahrenheit} degrees Fahrenheit is ${celsius} degrees Celsius`;
    alert(message);
    if (fahrenheit <= 69) {
        alert(`It's cold outside, ${name}! Don't forget your coat!`);
    } else if (fahrenheit >= 84) {
        alert(`It's hot outside, ${name}! Don't forget your sunscreen!`);
    } else {
        alert(`It's perfect weather, ${name}, enjoy!`);
    }
}
