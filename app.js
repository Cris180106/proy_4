//Paquete importado
require("colors");

//referencia al modulo math a traves de la constante math
const math = require("./modules/math.js")

console.clear();
console.log(math);

const main = async() => {
    let x= (math.getRandomInt(10));
    let y= (math.getRandomInt(10));
    console.log("===================================================".yellow);
    console.log("             * ".red, "Operaciones Matematicas".bgRed,
    "   *".red);
    console.log("===================================================\n".green);
    console.log("===================================================".red);
    console.log("             numeros generados: "+" "+x+" "+y);
    console.log("===================================================\n".gray);

    console.log("===================================================".white);
    console.log("//".red + "                                               "+"//".red);
    console.log("//".blue +"                   Suma:" + math.add(x,y) + "                "+ "      //".blue);
    console.log("//".yellow +"                   Resta:" + math.substract(x,y) + "                  "+ "   //".yellow);
    console.log("//".green +"                   Multiplicar:" + math.multiply(x,y) + "          "+ "    //".green);
    console.log("//".gray +"                   Dividir:" + math.divide(x,y) + "               "+ "//".gray);

    console.log("===================================================".white);




 console.log(math.add(22,33));
 console.log(math.substract(10,8));
 console.log(math.multiply(25,32));
 console.log(math.divide(2,0.9));
 
}

main();
    



