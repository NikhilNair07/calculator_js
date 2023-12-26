const prompt = require('prompt-sync')();

console.log("enter 1 for addition ");
console.log("enter 2 for subtraction");
console.log("enter 3 for multiplication");
console.log("enter 4 for division");
console.log("enter 5 for square");
const a = parseInt(prompt(">"));

if(a === 1){
    const number1 = parseInt(prompt("enter a number: "));
    const number2 = parseInt(prompt("enter another number: "));
    const result = number1 + number2;
    console.log("Result: " + result);
}

else if(a === 2){
    const number1 = parseInt(prompt("enter a number: "));
    const number2 = parseInt(prompt("enter another number: "));
    const result = number1 - number2;
    console.log("Result: " + result);
}

else if(a === 3){
    const number1 = parseInt(prompt("enter a number: "));
    const number2 = parseInt(prompt("enter another number: "));
    const result = number1 * number2;
    console.log("Result: " + result);
}

else if(a === 4){
    const number1 = parseInt(prompt("enter a number: "));
    const number2 = parseInt(prompt("enter another number: "));
    const result = number1 / number2;
    console.log("Result: " + result);
}

else if(a === 5){
    const number1 = parseInt(prompt("enter a number: "));
    const result = number1 * number1;
    console.log("Result: " + result);
}
