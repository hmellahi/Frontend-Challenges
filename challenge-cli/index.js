#!/usr/bin/env node

const { program } = require("commander");
const { startChallenge } = require("./start-challenge");
const { createChallenge } = require("./create-challenge");
const { checkLinks } = require("./check-links");
const { validateProjectRoot } = require("./utils");
// const { listChallenges } = require("./list-challenges");

program
  .version("1.0.0")
  .description("CLI for managing coding challenges and solutions");

program
  .command("create <challengeName> [challengePath]")
  .description("Create a new challenge")
  .action((challengeName, challengePath) => {
    validateProjectRoot();
    console.log(`Creating new challenge: ${challengeName}`);
    const solutionPath = createChallenge(challengeName, challengePath);
    console.log(
      `To begin working on the challenge\n run: cd "${solutionPath}"`
    );
  });

program
  .command("start <challengeName> [solutionName]")
  .description("Start working on a challenge")
  .action((challengeName, solutionName) => {
    validateProjectRoot();
    console.log(`Starting challenge: ${challengeName}`);
    const solutionPath = startChallenge(challengeName, solutionName);
    console.log(
      `To begin working on the challenge\n run: cd "${solutionPath}"`
    );
  });

program
  .command("check-links")
  .description("Check if all problem links are working")
  .action(async () => {
    validateProjectRoot();
    const success = await checkLinks();
    if (!success) {
      process.exit(1);
    }
  });

program
  .command("list")
  .description("List all available challenges")
  .action(() => {
    validateProjectRoot();
    console.log("Available challenges:");
    // listChallenges();
  });

program.parse(process.argv);
