// // TODO: Include packages needed for this application

// const inquirer = require("inquirer");

// // TODO: Create an array of questions for user input
// const questions = [
//   {
//     type = "input",
//     message = "What is your name?",
//     name = "yourName"
//   }
// ];

// // TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {};

// // TODO: Create a function to initialize app
// const init = () => {
//   inquirer.prompt
// };

// Function call to initialize app

const inquirer = require("inquirer");
// function to handle your answers
const handleAnswers = (answers) => {
  console.log(answers);
};
// generic function to get answers for questions
const getAnswersFromQuestions = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};
const init = async () => {
  const questions = [
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
    },
  ];
  const answers = await getAnswersFromQuestions(questions);
  handleAnswers(answers);
};
init();
