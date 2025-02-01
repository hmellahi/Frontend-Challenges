// utils.js

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function capitalizeProjectName(projectName) {
  return projectName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createFullPath(projectPath, projectName) {
  return path.join(projectPath, projectName);
}

function copyStarterProject(sourcePath, destinationPath) {
  // Ensure source path exists
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source path ${sourcePath} does not exist`);
  }

  // Create destination directory if it doesn't exist
  fs.mkdirSync(destinationPath, { recursive: true });

  execSync(
    `rsync -av --progress "${sourcePath}/" "${destinationPath}" --exclude node_modules`
  );
}

function replaceInFiles(directory, oldValue, newValue, filePattern) {
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      replaceInFiles(filePath, oldValue, newValue, filePattern);
    } else if (file === filePattern) {
      let content = fs.readFileSync(filePath, "utf8");
      content = content.replace(new RegExp(oldValue, "g"), newValue);
      fs.writeFileSync(filePath, content);
    }
  });
}

function createStarter(projectName, projectPath = "problems") {
  const fullPath = path.join(projectPath, projectName, "starter");

  // Copy from an existing problem's solution as template
  copyStarterProject(
    path.join("problems", "star-rating", "starter"),
    path.join(projectPath, projectName, "starter")
  );

  // Update package.json
  replaceInFiles(fullPath, "starter", projectName, "package.json");

  console.log(`Starter created successfully at '${fullPath}'`);
  return fullPath;
}

function createChallenge(
  projectName,
  projectPath = "problems",
  createStarterTemplate = true
) {
  const challengeName = capitalizeProjectName(projectName);
  const fullPath = createFullPath(projectPath, projectName);

  // Create solutions/react-ts directory using star-rating as template
  copyStarterProject(
    path.join("problems", "star-rating", "solutions", "react-ts"),
    path.join(fullPath, "solutions", "react-ts")
  );

  replaceInFiles(
    path.join(fullPath, "solutions", "react-ts"),
    "starter",
    projectName,
    "package.json"
  );
  replaceInFiles(fullPath, "Example Challenge", challengeName, "README.md");

  if (createStarterTemplate) {
    createStarter(projectName, projectPath);
  }

  process.chdir(path.join(fullPath, "solutions", "react-ts"));
  execSync("npm install --loglevel=silent --logs-max=0");

  console.log(
    `Project '${projectName}' created successfully at '${fullPath}'.`
  );

  return path.join(fullPath, "solutions", "react-ts");
}

module.exports = {
  createChallenge,
  createStarter,
  copyStarterProject,
  replaceInFiles,
};
