// Function to generate markdown for README
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
