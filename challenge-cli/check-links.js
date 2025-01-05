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

function extractLinks(markdown) {
  const links = [];
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    if (href.startsWith("http")) {
      links.push(href);
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

  const results = await Promise.all(links.map(checkUrl));

  // Report results
  let hasFailures = false;

  results.forEach((result) => {
    if (!result.ok) {
      hasFailures = true;
      console.error(`❌ ${result.url} - ${result.status}`);
    } else if (result.status === "skipped") {
      console.log(`⏩ ${result.url} - ${result.message}`);
    } else {
      console.log(`✅ ${result.url}`);
    }
  });

  return !hasFailures;
}

module.exports = { checkLinks };
