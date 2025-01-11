const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const { marked } = require("marked");

async function checkUrl(url) {
  try {
    // Skip validation for LeetCode links since they block automated requests
    if (url.includes("leetcode.com")) {
      return {
        url,
        status: "skipped",
        ok: true,
        message: "LeetCode links are skipped from validation",
      };
    }

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; FrontendChallengesBot/1.0; +https://github.com/frontendwizards/frontend-challenges)",
      },
    });
    return {
      url,
      status: response.status,
      ok: response.ok,
    };
  } catch (error) {
    return {
      url,
      status: "error",
      ok: false,
      error: error.message,
    };
  }
}

function parseMarkdownTable(markdown) {
  const lines = markdown.split("\n");
  const completedProblems = new Set();
  const uncompletedProblems = new Set();

  let isInUITable = false;
  let headerSeen = false;

  for (const line of lines) {
    // Detect UI challenges table by looking for the header with "Completed" column
    if (line.includes("| Title") && line.includes("| Completed |")) {
      isInUITable = true;
      headerSeen = false;
      continue;
    }

    // Skip separator line
    if (line.startsWith("|-")) {
      if (isInUITable) headerSeen = true;
      continue;
    }

    // Process table rows
    if (isInUITable && headerSeen && line.startsWith("|")) {
      const columns = line.split("|").map((col) => col.trim());
      // Extract problem link
      const titleCol = columns[1];
      const match = titleCol.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const link = match[2];
        // Check if problem is completed (has ✅)
        if (columns.some((col) => col.includes("✅"))) {
          completedProblems.add(link);
        } else {
          uncompletedProblems.add(link);
        }
      }
    }

    // Exit table when we hit an empty line or non-table line
    if (isInUITable && (!line.trim() || !line.startsWith("|"))) {
      isInUITable = false;
    }
  }

  return { completedProblems, uncompletedProblems };
}

function extractLinks(markdown) {
  const links = [];
  const renderer = new marked.Renderer();
  const { completedProblems, uncompletedProblems } =
    parseMarkdownTable(markdown);

  renderer.link = (href, title, text) => {
    if (href.startsWith("http")) {
      // Only include links that are either:
      // 1. From completed problems
      // 2. Not problem links (e.g. external resources, leetcode problems)
      if (
        completedProblems.has(href) ||
        !href.includes("frontwizards.com/challenge")
      ) {
        links.push({ url: href, type: "active" });
      } else if (uncompletedProblems.has(href)) {
        links.push({ url: href, type: "disabled" });
      }
    }
    return "";
  };

  marked(markdown, { renderer });
  return links;
}

async function checkLinks() {
  // Read main README
  const readmePath = path.join(process.cwd(), "README.md");
  const readmeContent = fs.readFileSync(readmePath, "utf8");

  // Extract all links
  const links = extractLinks(readmeContent);

  console.log("Checking links...");

  const results = await Promise.all(
    links.map(async (link) => {
      if (link.type === "disabled") {
        return {
          url: link.url,
          status: "disabled",
          ok: true,
          message: "Uncompleted problem - link disabled",
        };
      }
      return checkUrl(link.url);
    })
  );

  // Report results
  let hasFailures = false;

  results.forEach((result) => {
    if (!result.ok) {
      hasFailures = true;
      console.error(`❌ ${result.url} - ${result.status}`);
    } else if (result.status === "skipped") {
      console.log(`⏩ ${result.url} - ${result.message}`);
    } else if (result.status === "disabled") {
      console.log(`🔒 ${result.url} - ${result.message}`);
    } else {
      console.log(`✅ ${result.url}`);
    }
  });

  return !hasFailures;
}

module.exports = { checkLinks };
