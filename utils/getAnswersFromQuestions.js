const inquirer = require("inquirer");

const getAnswersFromQuestions = async (questions) =>
  await inquirer.prompt(questions);

module.exports = getAnswersFromQuestions;
