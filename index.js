// Internal packages needed for application
const generateMarkdown = require("./utils/generateMarkdown");
const getAnswersFromQuestions = require("./utils/getAnswersFromQuestions");
const writeToFile = require("./utils/writeMarkdown");

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

  console.info("Readme generated successfully");
};

// Function call to initialize app
init();
