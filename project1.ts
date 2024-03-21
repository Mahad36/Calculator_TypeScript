#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
const answers:{
    numberOne: number,
    numberTwo: number,
    operator:string

}=await inquirer.prompt([
    {type:"number",
    name:"numberOne",
    message:"Enter number One"
    },
    {type:"number",
    name:"numberTwo",
    message:"Enter number Two"
    },
    {type:"list",
    name:"operator",
    message:"Choose operator",
    choices:["+","-","*","/"]
}
])
const{numberOne,numberTwo,operator}=answers;
let result
switch (operator) {
    case "+":
        result=numberOne+numberTwo
        break;
    case "-":
        result=numberOne-numberTwo
        break;
    case "*":
        result=numberOne*numberTwo
        break;
    case "/":
        result=numberOne/numberTwo
        break;

    default:
        console.log("Invalid operator")
        break;
}
console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`));
