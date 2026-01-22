//Current forecast temperature
const kelvin = 15.9;
//convert kelvin into celsius (Kelvin - 273)
let celsius = kelvin - 273;
console.log(celsius);
//convert Celsius to Fahrenheit ()Fahrenheit = Celsius * (9/5) + 32)
let fahrenheit = celsius *(9/5) + 32;
console.log(fahrenheit);
//round down the fahrenheit value
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//Extra practice for converting Celsius to Newton
let newton = celsius *(33/100);
newton = Math.floor(newton);
console.log(newton)
