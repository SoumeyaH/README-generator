const questions = [
  {
    message:
      "What would you like to name your README file? \n Please supply without the file extension:",
    name: "readmeTitle",
    default: "GENERATED_README",
  },
  {
    message: "What would you like to name your project?",
    name: "title",
    default: "My Project",
  },
  {
    type: "list",
    message: "What type of license would you like?",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    name: "license",
  },
  {
    message: "Please give a brief description of your project:",
    name: "description",
    default: "N/A",
  },
  {
    message: "How can someone install your project?",
    name: "installation",
    default: "N/A",
  },
  {
    message: "How can people contribute to the project?",
    name: "contributing",
    default: "N/A",
  },
  {
    type: "confirm",
    message: "Where there any tests done for this project?",
    name: "test",
  },
  {
    message: "What are the testing instructions?",
    name: "tests",
    when: (answers) => {
      return answers.test;
    },
  },
  {
    message: "What is your GitHub URL?",
    name: "github",
    default: "N/A",
  },
  {
    type: "confirm",
    message: "Would you like to add your email address?",
    name: "email",
  },
  {
    message: "What is your email address?",
    name: "email",
    when: (answers) => {
      return answers.email;
    },
    validate: (_email) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(_email);
    },
  },
];

module.exports = questions;
