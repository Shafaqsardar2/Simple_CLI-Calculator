#! /usr/bin/env node
console.log( "welcome to Shafaq' Sardar's calculator")
import inquirer from "inquirer";
import chalk from "chalk"
const answers:{
    numberOne: number,
    numberTwo : number,
    operators: string,
} = await inquirer.prompt([
    { type : "number",
    name: "numberOne",
    message : " Enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number", 
    },
    {
        type: "list",
        name: "operators",
        message : "Select your operator",
        choices: ["+", "-", "*", "/"],
    },
])
const { numberOne, numberTwo, operators, } = answers
let result
switch (operators) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberTwo;
        break;
    case "/":
        result = numberOne / numberTwo;
        break;
        default:
            console.log("invalid operator")
}
console.log(`${numberOne}, ${operators}, ${numberTwo} = ${result}`);
