const templateSection = (heading, section) =>
  section
    ? `${heading}
  ${section}`
    : false;

const createLicense = (license) => {
  if (license === "None") return false;

  const licenseBadge = `![${license}](https://img.shields.io/badge/license-${license}-green)`;

  const licenseSection = `## License
  This work is licensed under ${license === "" ? "N/A" : license}`;

  return { licenseBadge, licenseSection };
};

const createContact = (github, email) => {
  const contact = {
    heading: "##Contact",
    subheading: "If you have any questions don't hesitate to contact me at:",
  };
  const emailAnswer = email ? `Email: ${email}` : false;
  const githubAnswer = github ? `GitHub: ${github}` : false;

  if (emailAnswer === false && githubAnswer === false) return false;

  if (emailAnswer) contact.emailKey = emailAnswer;
  if (githubAnswer) contact.githubKey = githubAnswer;

  return contact;
};

const generateSections = (answers) => {
  const {
    license,
    description,
    contributing,
    usage,
    test,
    github,
    email,
    installation,
  } = answers;

  const licenseAnswers = createLicense(license);

  const descriptionAnswers = templateSection("##Description", description);

  const contributingAnswers = templateSection("##Contribute ", contributing);

  const usageAnswers = templateSection("##Usage", usage);

  const testsAnswers = templateSection("##Testing", test);

  const contactAnswers = createContact(github, email);

  const installationAnswers = templateSection("##Installation", installation);

  return {
    licenseAnswers,
    descriptionAnswers,
    contributingAnswers,
    usageAnswers,
    testsAnswers,
    contactAnswers,
    installationAnswers,
  };
};

module.exports = generateSections;
