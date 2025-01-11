const fs = require("fs");
const path = require("path");

function parseMarkdownTable(markdown) {
  const lines = markdown.split("\n");
  const completedProblems = new Set();

  let isInUITable = false;
  let headerSeen = false;

  for (const line of lines) {
    if (line.includes("| Title") && line.includes("| Completed |")) {
      isInUITable = true;
      headerSeen = false;
      continue;
    }

    if (line.startsWith("|-")) {
      if (isInUITable) headerSeen = true;
      continue;
    }

    if (isInUITable && headerSeen && line.startsWith("|")) {
      const columns = line.split("|").map((col) => col.trim());
      const titleCol = columns[1];
      const match = titleCol.match(/\[(.*?)\]\((.*?)\)/);
      if (match && columns.some((col) => col.includes("✅"))) {
        completedProblems.add(match[2]);
      }
    }

    if (isInUITable && (!line.trim() || !line.startsWith("|"))) {
      isInUITable = false;
    }
  }

  return completedProblems;
}

function disableUncompletedLinks() {
  // Read README
  const readmePath = path.join(process.cwd(), "README.md");
  const readmeContent = fs.readFileSync(readmePath, "utf8");

  // Get completed problems
  const completedProblems = parseMarkdownTable(readmeContent);

  // Process the table and modify links
  const lines = readmeContent.split("\n");
  const modifiedLines = lines.map((line) => {
    if (line.includes("| Title") || !line.startsWith("|")) {
      return line;
    }

    // Check if it's a table row
    if (line.startsWith("|")) {
      const columns = line.split("|").map((col) => col.trim());
      const titleCol = columns[1];
      const match = titleCol.match(/\[(.*?)\]\((.*?)\)/);

      if (match) {
        const [fullMatch, title, url] = match;
        // If it's a challenge link and not completed, remove the link
        if (
          url.includes("frontwizards.com/challenge") &&
          !completedProblems.has(url)
        ) {
          columns[1] = columns[1].replace(fullMatch, title);
          return columns.join(" | ");
        }
      }
    }

    return line;
  });

  // Write back to README
  fs.writeFileSync(readmePath, modifiedLines.join("\n"));
  console.log(
    "✅ Successfully disabled uncompleted problem links in README.md"
  );
}

// Run the script
disableUncompletedLinks();

module.exports = { disableUncompletedLinks };
