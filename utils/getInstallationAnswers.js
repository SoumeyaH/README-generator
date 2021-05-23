const inquirer = require("inquirer");
// const getAnswersFromQuestions = require("./getAnswersFromQuestions");

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
    // when: (answers) => {
    //   return answers.installation;
    // },
    // validate: (_installation) => {
    //   const re = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;

    //   return re.test(_installation);
    // },
  },
];

const getInstallationAnswers = async () => {
  const { isInstallation } = await inquirer.prompt(isInstall);

  if (!isInstallation) return isInstallation;

  const installSteps = [];

  let installInProgress = true;

  while (installInProgress) {
    const { installationSteps } = await inquirer.prompt(isStep);

    switch (installationSteps) {
      case "Add step":
        const info = await inquirer.prompt(installQuestion);
        console.log("add result", info);
        installSteps.push(info);
        break;

      case "No more steps":
        installInProgress = false;
        break;
    }
  }

  console.log("array", installSteps);
};

const init = async () => {
  const a = await getInstallationAnswers();
  console.log(a);
};

init();
// module.exports = getInstallationAnswers;
