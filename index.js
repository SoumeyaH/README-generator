// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What would you like to name your README file?",
    name: "readmeTitle",
    default: "GENERATED_README",
  },
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
    default: "My Project",
  },
  {
    type: "list",
    message: "What license would you like?",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "Please give a brief description of your project",
    name: "description",
    default: "N/A",
  },
  {
    type: "input",
    message: "How can someone install your project?",
    name: "installation",
    default: "N/A",
  },
  {
    type: "input",
    message: "How can people contribute to the project?",
    name: "contributing",
    default: "N/A",
  },
  {
    type: "confirm",
    message: "Where there any tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What are the testing instructions?",
    name: "tests",
    when: (answers) => {
      return answers.test;
    },
  },
  {
    type: "input",
    message: "What is your GitHub URL?",
    name: "github",
    default: "N/A",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "N/A",
  },
];

// TODO: Create a function to write README file
const writeToFile = (readmeTitle, data) => {
  // readme file name get from answers object add .md to the end
  const fileName = `${readmeTitle.toUpperCase().replace(" ", "-")}.md`;
  console.log(fileName);
  fs.writeFileSync(fileName, data);
};

const getAnswersFromQuestions = async () => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// TODO: Create a function to initialize app
const init = async () => {
  const answers = await getAnswersFromQuestions(questions);

  const generatedREADME = generateMarkdown(answers);

  const { readmeTitle } = answers;

  writeToFile(readmeTitle, generatedREADME);
};

// Function call to initialize app
init(questions);
