// to do maybe - function that handles false, undefined, N/A for all
// have additional bit for license being none

const createTitle = (title) => {
  console.log("t", title);
  // return 2 titles one with capitalized first letter and one all lowercase with space -
  // dont captalize if first letter = vowel except first word - /[aeiou]/.test(char) regex for vowels
  //${title.toLowerCase().replace(" ", "-")}
  return `${title}`;
};
const createDescription = (description) => {
  console.log("des", description);
  return `${description}`;
};

const createLicense = (license) => {
  console.log("lic", license);
  //license === "None" ? "" : license;

  // const licenseBadge = `![${licenses}](https://img.shields.io/badge/license-${licenses}-green)`;
  // ## License
  // This work is licensed under ${licenses === "" ? "N/A" : licenses}
  return `${license}`;
};
const createInstallation = (installation) => {
  console.log("inst", installation);
  //  ## Installation
  // \`\`\`
  // ${installation}
  // \`\`\`
  return `${installation}`;
};

const createContributing = (contributing) => {
  console.log("contr", contributing);
  //  ## Contributing
  return `${contributing}`;
};

const createUsage = (usage) => {
  console.log("use", usage);
  //
  return `${usage}`;
};

const createTests = (tests) => {
  console.log("test", tests);
  // no comes back as undefined
  //  ## Tests
  return `${tests}`;
};

const createContact = (github, email) => {
  console.log("ema", email, "git", github);
  //  ## Questions
  // How to contact with any questions
  // ${github}
  // ${email} - can come back as false
  return `${email} ${github}`;
};

const generateSections = ({
  title,
  license,
  description,
  installation,
  contributing,
  usage,
  tests,
  github,
  email,
}) => {
  const titleAnswer = createTitle(title);
  const licenseAnswers = createLicense(license);
  const descriptionAnswers = createDescription(description);
  const installationAnswers = createInstallation(installation);
  const contributingAnswers = createContributing(contributing);
  const usageAnswers = createUsage(usage);
  const testsAnswers = createTests(tests);
  const contactAnswers = createContact(github, email);
  // takes in answers object
  // calls functions for each section of readme
  //
  // each section function - receives appropriate answer
  // returns template strings the markdown section
  //
  // result of each function pushed into array
  // array returned to generate readme function
  //
  // generate readme function - just returns template string
  // put placeholders where each section function return goes
  //
  // table of contents idk yet - keep static for now
  return {
    titleAnswer,
    licenseAnswers,
    descriptionAnswers,
    installationAnswers,
    contributingAnswers,
    usageAnswers,
    testsAnswers,
    contactAnswers,
  };
};

module.exports = generateSections;

// const answers = {
//   title: "my project",
//   license: "mit",
//   description: "some text to be rendered goes here",
//   installation: "some text to be rendered goes here",
//   contributing: "some text to be rendered goes here",
//   usage: "some text to be rendered goes here",
//   tests: "some text to be rendered goes here",
//   github: "some text to be rendered goes here",
//   email: "some text to be rendered goes here",
// };

// generateSections(answers);
