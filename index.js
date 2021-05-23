const generateMarkdown = require("./utils/generateMarkdown");
const getAnswersFromQuestions = require("./utils/getAnswersFromQuestions");
const getInstallationAnswers = require("./utils/getInstallationAnswers");
const {
  baseQuestions,
  installQuestions,
} = require("./utils/inquirerQuestions");
const writeToFile = require("./utils/writeMarkdown");

const init = async () => {
  // const baseAnswers = await getAnswersFromQuestions(baseQuestions);

  // console.log("answers", baseAnswers);
  console.log("question", typeof getInstallationAnswers);

  const installAnswers = await getInstallationAnswers(installQuestions);

  console.log("installAnswers", installAnswers);
  // const generatedREADME = generateMarkdown(answers);

  // const { readmeTitle } = answers;

  // writeToFile(readmeTitle, generatedREADME);
};

init();
