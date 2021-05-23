const generateMarkdown = require("./utils/generateMarkdown");
const getAnswersFromQuestions = require("./utils/getAnswersFromQuestions");
const questions = require("./utils/inquirerQuestions");
const writeToFile = require("./utils/writeMarkdown");

const init = async () => {
  const answers = await getAnswersFromQuestions(questions);

  console.log("answers", answers);

  // const generatedREADME = generateMarkdown(answers);

  // const { readmeTitle } = answers;

  // writeToFile(readmeTitle, generatedREADME);
};

init();
