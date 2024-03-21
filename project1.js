#!/usr/bin/env node 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "number1",
        message: "Enter number One"
    },
    {
        type: "number",
        name: "number2",
        message: "Enter number Two"
    },
    {
        type: "list",
        name: "operator",
        message: "Choose operator",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
const { number1, number2, operator } = answers;
let answer;
switch (operator) {
    case "+":
        answer = number1 + number2;
        break;
    case "-":
        answer = number1 - number2;
        break;
    case "*":
        answer = number1 * number2;
        break;
    case "/":
        answer = number1 / number2;
        break;
    case "%":
        answer = number1 % number2;
        break;
    default:
        console.log("Enter valid operator");
        break;
}
console.log(`${number1} ${operator} ${number2} = ${answer}`);
