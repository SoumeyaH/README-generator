const generateSections = require("./generateSections");

const generateMarkdown = (answers) => {
  const {
    titleAnswer,
    licenseAnswers,
    descriptionAnswers,
    installationAnswers,
    contributingAnswers,
    usageAnswers,
    testsAnswers,
    contactAnswers,
  } = generateSections(answers);
  // take answers from this pass into function to generate table
  // goes after first title ${licenses === "" ? "" : licenseBadge}
  return `
    # ${titleAnswer} 

    ## Table of Contents 

      - [to do title here](# to do lowercase title here)
      - [Description](#description)
      - [Table of Contents](#table-of-contents)
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributing](#contributing)
      - [Tests](#tests)
      - [Contact](#contact)

    ${descriptionAnswers}

    ${installationAnswers}

    ${contributingAnswers}

    ${usageAnswers}

    ${testsAnswers}

    ${contactAnswers}
  `;
};

module.exports = generateMarkdown;
