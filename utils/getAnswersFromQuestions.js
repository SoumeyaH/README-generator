// External packages need for application
const inquirer = require("inquirer");

// Function to get response from inquirer
const getAnswersFromQuestions = async (questions) =>
  await inquirer.prompt(questions);

module.exports = getAnswersFromQuestions;
