const generateMarkdown = require("./utils/generateMarkdown");
const getAnswersFromQuestions = require("./utils/getAnswersFromQuestions");
const questions = require("./utils/inquirerQuestions");
const writeToFile = require("./utils/writeMarkdown");

const init = async () => {
  const answers = await getAnswersFromQuestions(questions);

  const generatedREADME = generateMarkdown(answers);

  const { readmeTitle } = answers;

  writeToFile(readmeTitle, generatedREADME);

  console.info("Readme generated successfully");
};

init();
