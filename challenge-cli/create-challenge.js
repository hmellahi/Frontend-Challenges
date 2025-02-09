// utils.js

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { copyProject } = require("./utils");

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
  execSync(
    `rsync -av --progress ${sourcePath}/ ${destinationPath} --exclude node_modules`
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

function createStarter(problemName) {
  if (!problemName) {
    console.error("Error: Problem name is not provided");
    process.exit(1);
  }

  const problemPath = path.join("problems", problemName);

  if (!fs.existsSync(problemPath)) {
    console.error(`Error: Problem ${problemPath} does not exist`);
    process.exit(1);
  }

  const starterPath = path.join(problemPath, "starter");

  if (fs.existsSync(starterPath)) {
    console.error(`Error: Starter already exists at ${starterPath}`);
    process.exit(1);
  }

  return copyProject("starter/solutions/react-ts", starterPath);
}

function createChallenge(
  projectName,
  projectPath = "problems",
  createStarterProject = true
) {
  const challengeName = capitalizeProjectName(projectName);
  const fullPath = createFullPath(projectPath, projectName);

  // Create the main challenge structure
  fs.mkdirSync(fullPath, { recursive: true });

  // Create solutions directory and copy starter as first solution
  const solutionPath = path.join(fullPath, "solutions/react-ts");
  copyProject("starter/solutions/react-ts", solutionPath);

  // Update project names in files
  replaceInFiles(solutionPath, "starter", projectName, "package.json");
  replaceInFiles(fullPath, "Example Challenge", challengeName, "README.md");

  // Create starter if requested
  if (createStarterProject) {
    createStarter(projectName);
  }

  console.log(
    `Project '${projectName}' created successfully at '${fullPath}'.`
  );
  return solutionPath;
}

module.exports = { createChallenge, createStarter };
