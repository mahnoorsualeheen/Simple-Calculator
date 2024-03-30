#!/usr/bin/env node
//? SHASBANG
console.log("________________________________________")
console.log("\t ******Calculator******")
console.log("________________________________________")
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first Number : " , type: "number" , name: "firstNumber" },
  {
    message: "Select one of the optration you wants to perform",
    type: "list",
    name: "operator",
    choices: ["1.Addition", "2.Subtraction", "3.Multiplication", "4.Division"],
  },
  { message: "Enter Second Number : " , type: "number" , name: "secondNumber" },
]);
// Conditional Statements
if(answer.operator === "1.Addition") 
{
    let addition: number = answer.firstNumber + answer.secondNumber;
    console.log("Addition is : " + addition)
} else if (answer.operator === "2.Subtraction")
{
    let subtraction : number = answer.firstNumber - answer.secondNumber;
    console.log("Subtraction is : " + subtraction);
}
else if (answer.operator === "3.Multiplication")
{
    let multiplication : number = answer.firstNumber * answer.secondNumber
    console.log("Multiplication is : " + multiplication);
}
else if (answer.operator === "4.Division")
{
    let division : number = answer.firstNumber / answer.secondNumber;
    console.log("Division is : " + division );
}else {
    console.log("Select Valid Operator");
}