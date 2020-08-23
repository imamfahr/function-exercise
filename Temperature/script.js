let celcius = prompt('please input your Celcius value ..');

function celciusToFahrenheit(celcius){
    return (celcius*(9/5)+32);
}

alert(`${celcius} is equal to ${celciusToFahrenheit(celcius)} Fahrenheit`)