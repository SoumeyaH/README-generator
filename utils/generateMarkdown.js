// Function to generate markdown for README

const isLicense = (license) => {
  console.log(license);
  if (license === "None") {
    return "";
  } else {
    return license;
  }
};

const areThereTests = (tests) => {
  if (tests) {
    return tests;
  } else {
    return `N/A`;
  }
};

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

  const licenses = isLicense(license);
  const licenseBadge = `![${licenses}](https://img.shields.io/badge/license-${licenses}-green)`;

  return `
  # ${title} ${licenses === "" ? "" : licenseBadge}
  
  ## Description 

  ${description}

  ## Table of Contents 

  - [${title}](#${title.toLowerCase().replace(" ", "-")})
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation 

  \`\`\` 
  ${installation}
  \`\`\`

  ## License 

  This work is licensed under ${licenses === "" ? "N/A" : licenses}

  ## Contributing

  ${contributing}
  
  ## Tests

  ${areThereTests(tests)}

  ## Questions 

  How to contact with any questions

  ${github}
  
  ${email}  
  `;
};

module.exports = generateMarkdown;
