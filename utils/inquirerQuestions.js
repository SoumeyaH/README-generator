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
    type: "confirm",
    message: "Would you like to add description?",
    name: "description",
  },
  {
    message: "Please give a brief description of your project:",
    name: "description",
    when: (answers) => {
      return answers.description;
    },
    validate: (_description) => {
      const re = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;

      return re.test(_description);
    },
  },
  {
    message: "How can someone install your project?",
    name: "installation",
    default: "N/A",
  },
  {
    type: "confirm",
    message: "Would you like people to be able to contribute to your project?",
    name: "contributing",
  },
  {
    message: "Please state how can people contribute to the project:",
    name: "contributing",
    when: (answers) => {
      return answers.contributing;
    },
    validate: (_contributing) => {
      const re = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;

      return re.test(_contributing);
    },
  },
  {
    type: "confirm",
    message: "Would you like people to be able to use your project?",
    name: "usage",
  },
  {
    message: "Please state how can people use the project:",
    name: "usage",
    when: (answers) => {
      return answers.usage;
    },
    validate: (_usage) => {
      const re = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;

      return re.test(_usage);
    },
  },
  {
    type: "confirm",
    message: "Where there any tests done for this project?",
    name: "test",
  },
  {
    message: "What are the testing instructions?",
    name: "test",
    when: (answers) => {
      return answers.test;
    },
    validate: (_test) => {
      const re = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;

      return re.test(_test);
    },
  },
  {
    type: "confirm",
    message: "Would you like to add your GitHub URL?",
    name: "github",
  },
  {
    message: "What is your GitHub URL?",
    name: "github",
    when: (answers) => {
      return answers.github;
    },
    validate: (_github) => {
      const re = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;

      return re.test(_github);
    },
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
