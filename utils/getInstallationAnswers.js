const getAnswersFromQuestions = require("./getAnswersFromQuestions");

const isInstall = [
  {
    type: "confirm",
    message: "Would you like people to be able to install your project?",
    name: "isInstallation",
  },
];

const isStep = [
  {
    type: "list",
    message: "Would you like to add an installation step?",
    choices: ["Add step", "No more steps"],
    name: "installationSteps",
  },
];

const installQuestion = [
  {
    message: "Please state how can people install to the project:",
    name: "installation",
    validate: (_installation) => {
      const re = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;

      return re.test(_installation);
    },
  },
];

const getInstallationAnswers = async () => {
  const { isInstallation } = await getAnswersFromQuestions(isInstall);

  if (!isInstallation) return isInstallation;

  const installSteps = [];

  let installInProgress = true;

  while (installInProgress) {
    const { installationSteps } = await getAnswersFromQuestions(isStep);

    switch (installationSteps) {
      case "Add step":
        const { installation } = await getAnswersFromQuestions(installQuestion);
        console.log("add result", installation);
        installSteps.push(installation);
        break;

      case "No more steps":
        installInProgress = false;
        break;
    }
  }

  // figure out new line maybe \n

  return installSteps.join(" ");
};

module.exports = getInstallationAnswers;
