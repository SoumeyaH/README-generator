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
