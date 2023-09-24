#! usr/bin/env Node
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "Snetence",
        type: "string",
        message: "Please enter your sentence for word count:"
    }
]);
let wordCount = answers.Sentence.split(" ");
