const generateMarkdown = require("./utils/generateMarkdown");
const getAnswersFromQuestions = require("./utils/getAnswersFromQuestions");
const getInstallationAnswers = require("./utils/getInstallationAnswers");
const {
  baseQuestions,
  installQuestions,
} = require("./utils/inquirerQuestions");
const writeToFile = require("./utils/writeMarkdown");

const init = async () => {
  const baseAnswers = await getAnswersFromQuestions(baseQuestions);

  const installAnswers = await getInstallationAnswers(installQuestions);

  const answers = { ...baseAnswers, installation: installAnswers };

  console.log("answers into generate", answers);

  const generatedREADMETemplate = generateMarkdown(answers);

  console.log("answers from generate", generatedREADMETemplate);

  const { readmeTitle } = answers;

  writeToFile(readmeTitle, generatedREADMETemplate);
};

init();
