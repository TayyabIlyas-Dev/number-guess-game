#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userinput",
        message: "please guess a number Between 1-5",
        type: "number",
    }
]);
if (randomNumber === answer.userinput) {
    console.log("you Win --- U guess a Same NUmber ");
    console.log(`Answer is ${randomNumber}`);
}
else {
    console.log("you Lose --- U guess A Different Number");
    console.log(`Answer is ${randomNumber}`);
}
