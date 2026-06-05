import fs from "fs";

function loadJson(path) {
  if (fs.existsSync(path)) {
    return JSON.parse(fs.readFileSync(path, "utf-8"));
  }
  return null;
}

function loadText(path) {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, "utf-8");
  }
  return null;
}

// SETTINGS
const settings =
  loadJson("./config/settings.json") ||
  loadJson("./config/settings.example.json");

// PROMPT
const prompt =
  loadText("./config/prompts/query.txt") ||
  loadText("./config/prompts/query.example.txt");

export { settings, prompt };