
while(true){
    //! values user input 
    let degreeCelsius = parseFloat(prompt("Enter the Celsius degree value to be converted: "));
    
    if (!isNaN(degreeCelsius)){

        let degreeFahrenheit =  ((degreeCelsius * 9/5)+32)
        let degreeKelvin = (degreeCelsius + 273.15)
        console.log("The degree Celsius for conversion is: " + degreeCelsius + "ºC")
        console.log("The degree Fahrenheit conversion is: " + degreeFahrenheit + "ºF")
        console.log("The degree Kelvin conversion is: "+ degreeKelvin + "ºK")
        break;
    } else {
        console.log("Enter a number for the degrees conversion")
    }
}

