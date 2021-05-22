const fs = require("fs");

// Function to write up markdown
const writeToFile = (readmeTitle, data) => {
  const fileName = `${readmeTitle.trim().toUpperCase().replace(" ", "-")}.md`;

  try {
    fs.writeFileSync(fileName, data);
  } catch (error) {
    console.info(error);
  }
};

module.exports = writeToFile;

/*
const writeToFile = (readmeTitle, data) => {
  try {
    const fileName = `${readmeTitle.trim().toUpperCase().replace(" ", "-")}.md`;

    fs.writeFileSync(fileName, data);

    console.info("Readme generated successfully");
  } catch (error) {
    console.info(error);
  }
*/
