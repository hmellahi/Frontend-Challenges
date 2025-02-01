const path = require("path");
const { copyStarterProject, replaceInFiles } = require("./create-challenge");

function createStarter(projectName, projectPath = "problems") {
  const fullPath = path.join(projectPath, projectName, "starter");

  // Copy the react-ts template to the starter directory
  copyStarterProject(path.join("starter", "solutions", "react-ts"), fullPath);

  // Update package.json
  replaceInFiles(fullPath, "starter", projectName, "package.json");

  console.log(`Starter created successfully at '${fullPath}'`);
  return fullPath;
}

module.exports = { createStarter }; 