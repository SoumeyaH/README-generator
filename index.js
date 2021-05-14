// External packages need for application
const inquirer = require("inquirer");

// Internal packages needed for application
const generateMarkdown = require("./utils/generateMarkdown");
const writeToFile = require("./utils/writeMarkdown");

// Function to get response from inquirer
const getAnswersFromQuestions = async (questions) => {
  const answers = await inquirer.prompt(questions);
  return answers;
};

// Function to initialize app
const init = async () => {
  // Questions to be prompted using inquirer
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

  const answers = await getAnswersFromQuestions(questions);

  const generatedREADME = generateMarkdown(answers);

  const { readmeTitle } = answers;

  writeToFile(readmeTitle, generatedREADME);
};

// Function call to initialize app
init();
