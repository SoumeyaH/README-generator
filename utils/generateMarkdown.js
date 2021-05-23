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
  const { title } = answers;

  const templateAnswers = generateSections(answers);

  console.log("templateAnswers", templateAnswers);
  const {
    licenseAnswers,
    descriptionAnswers,
    installationAnswers,
    contributingAnswers,
    usageAnswers,
    testsAnswers,
    contactAnswers,
  } = templateAnswers;

  return `
    #${title} ${licenseAnswers.licenseBadge}

    ${generateTable(templateAnswers)}

    ${descriptionAnswers}

    ${installationAnswers}

    ${contributingAnswers}

    ${usageAnswers}

    ${licenseAnswers.licenseSection}

    ${testsAnswers}

    ${contactAnswers.heading}
    
    ${contactAnswers.subheading}
    ${contactAnswers.emailKey}
    ${contactAnswers.githubKey}
  `;
};

module.exports = generateMarkdown;
