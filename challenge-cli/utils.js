const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

function findProjectRoot(currentPath = process.cwd()) {
  if (currentPath === path.parse(currentPath).root) {
    return null;
  }

  const hasProblemsDir = fs.existsSync(path.join(currentPath, "problems"));
  const hasCliDir = fs.existsSync(path.join(currentPath, "challenge-cli"));

  if (hasProblemsDir && hasCliDir) {
    return currentPath;
  }

  return findProjectRoot(path.dirname(currentPath));
}

function validateProjectRoot() {
  const projectRoot = findProjectRoot();
  if (!projectRoot) {
    console.warn(`
\x1b[38;5;208m⚠️  Warning: Could not find project root directory.
  Recommended usage: Run this CLI from within the project directory structure.

  Run this to access the project root:
  cd ${path.dirname(path.dirname(__dirname))}

  Current working directory: ${process.cwd()}
  \x1b[0m
`);
    process.exit(1);
  }
  return projectRoot;
}

function copyProject(sourcePath, destinationPath) {
  // Create destination directory if it doesn't exist
  fs.mkdirSync(destinationPath, { recursive: true });

  // Copy project files excluding node_modules
  fs.cpSync(sourcePath, destinationPath, {
    recursive: true,
    filter: (src) => !src.includes("node_modules"),
  });

  // Explicitly copy the README.md from the starter directory
  const readmeSourcePath = path.join(sourcePath, "../../README.md");
  const readmeDestinationPath = path.join(destinationPath, "README.md");
  if (fs.existsSync(readmeSourcePath)) {
    fs.copyFileSync(readmeSourcePath, readmeDestinationPath);
  }

  const originalCwd = process.cwd();
  // Install dependencies
  process.chdir(destinationPath);
  try {
    execSync("npm install --loglevel=silent --logs-max=0", {
      stdio: "inherit",
    });
  } catch (error) {
    console.error("Error running npm install:", error.message);
  }

  // revert cwd to original
  process.chdir(originalCwd);

  return destinationPath;
}

module.exports = {
  findProjectRoot,
  validateProjectRoot,
  copyProject,
};
