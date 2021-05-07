// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
  },
  {
    type: "list",
    message: "What license would you like?",
    choices: ["MIT", "Apache", "GPL", "BSD"],
    name: "license",
  },
  {
    type: "input",
    message: "Please give a brief description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "How can someone install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "How can people contribute to the project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the testing instructions?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {};

const getAnswersFromQuestions = async () => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await getAnswersFromQuestions(questions);

  const generatedREADME = generateMarkdown(answers);

  console.log(generatedREADME);
};

// Function call to initialize app
init(questions);
