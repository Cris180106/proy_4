const Mates = {};

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function add(a,b) {
    return a + b;
}

function substract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b == 0) {
        return "Error: no aplica"  
    } else {
        return a / b;
    }

}

Mates.add = add;
Mates.substract = substract;
Mates.multiply = multiply;
Mates.divide = divide;
Mates.getRandomInt = getRandomInt;

module.exports = Mates;