// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  const {
    title,
    license,
    description,
    installation,
    contributing,
    tests,
    github,
    email,
  } = answers;

  return `
  # ${title}
  ![${license}](https://img.shields.io/badge/license-${license}-green)
  
  ## Description 

  ${description}

  ## Table of Contents 

  - [${title}](#${title})
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation 

  ${installation}

  ## License 

  ${license}

  ## Contributing

  ${contributing}
  
  ## Tests

  ${tests}

  ## Questions 

  How to contact with any questions
  ${github}
  ${email}  
  `;
};

module.exports = generateMarkdown;
