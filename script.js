function convertTemperature(temperature , unit){
    if(unit === "c"){
    temperature = (temperature*(9/5))+32
    }else if (unit === "F"){
    temperature = (temperature - 32) * 5/9
    }
    console.log(temperature+unit)
}
convertTemperature(98.6 , "f")
