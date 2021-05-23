const generateSections = require("./generateSections");

const generateTable = (answer) => {
  const {
    licenseAnswers,
    descriptionAnswers,
    contributingAnswers,
    usageAnswers,
    testsAnswers,
    contactAnswers,
    installationAnswers,
  } = answer;

  return `## Table of Contents
   ${descriptionAnswers ? `[Description](#description)` : ""}
   ${installationAnswers ? `[Installation](#installation)` : ""}
   ${usageAnswers ? `[Usage](#usage)` : ""}
   ${licenseAnswers ? `[License](#license)` : ""}
   ${contributingAnswers ? `[Contributing](#contributing)` : ""}
   ${testsAnswers ? `[Tests](#tests)` : ""}
   ${contactAnswers ? `[Contact](#contact)` : ""}
   `;
};

const generateMarkdown = (answers) => {
  // const {
  //   // licenseAnswers,
  //   // descriptionAnswers,
  //   // installationAnswers,
  //   // contributingAnswers,
  //   // usageAnswers,
  //   // testsAnswers,
  //   // contactAnswers,
  // }

  const templateAnswers = generateSections(answers);

  const table = generateTable(templateAnswers);

  console.log(table);
  // return `
  //   # ${title} to do license badge goes here

  //   to do table goes here

  //   ${descriptionAnswers}

  //   ${installationAnswers}

  //   ${contributingAnswers}

  //   ${usageAnswers}

  //   ${testsAnswers}

  //   ${contactAnswers}
  // `;
};

module.exports = generateMarkdown;
