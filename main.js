#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("welcome to Shafaq' Sardar's calculator");
const inquirer_1 = __importDefault(require("inquirer"));
const answers = await inquirer_1.default.prompt([
    { type: "number",
        name: "numberOne",
        message: " Enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number",
    },
    {
        type: "list",
        name: "operators",
        message: "Select your operator",
        choices: ["+", "-", "*", "/"],
    },
]);
const { numberOne, numberTwo, operators, } = answers;
let result;
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
        console.log("invalid operator");
}
console.log(`${numberOne}, ${operators}, ${numberTwo} = ${result}`);
