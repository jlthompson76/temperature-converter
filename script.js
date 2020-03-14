function tempConverter() { // this function contains the entire temperature conversion script and runs the app when user clicks on button on homepage

    const name = prompt("What is your name?");
    const fahrenheit = prompt(`Hi, ${name}, please enter the temperature in Fahrenheit and I will convert it into Celsius for you!`);
    const celsius = toCelsius(fahrenheit); // calls the toCelsius function declared below and stores the result as celsius variable
    displayConversion(fahrenheit); // calls the displayConversion function declared below

    function toCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    } // this function converts the Fahrenheit temp entered by the user to Celsius

    function displayConversion(fahrenheit) {
        let conversion = `${fahrenheit}\xB0 Fahrenheit is ${celsius}\xB0 Celsius`;
        alert(conversion);
        let message;
        if (fahrenheit <= 69) {
            message = `It's cold outside, ${name}! Don't forget your coat!`;
        } else if (fahrenheit >= 84) {
            message = `It's hot outside, ${name}! Don't forget your sunscreen!`;
        } else {
            message = `It's perfect weather, ${name}, enjoy!`;
        }
        alert(message);
    } // this function displays a message to the user with both the Fahrenheit and Celsius temps and lets the user know if the temperature is too cold (69 degrees F or less), too hot (84 degrees F or above), or just right (70-79 degrees F)
}
