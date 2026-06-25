"use strict";

function buildSearchUrl() {
  const params = [
    { id: "text", prefix: "" },
    { id: "site", prefix: "site:" },
    { id: "cache", prefix: "cache:" },
    { id: "allintext", prefix: "allintext:" },
    { id: "inurl", prefix: "inurl:" },
    { id: "allintitle", prefix: "allintitle:" },
    { id: "filetype", prefix: "filetype:" },
    { id: "link", prefix: "link:" },
    { id: "exclude", prefix: "-" }
  ];

  const tokens = [];

  for (const param of params) {
    const input = document.getElementById(param.id);
    if (!input) {
      continue;
    }

    const value = input.value.trim();
    if (!value) {
      continue;
    }

    if (param.id === "text") {
      tokens.push(`"${encodeURIComponent(value)}"`);
      continue;
    }

    if (param.id === "exclude") {
      const words = value.split(/\s+/).filter(Boolean);
      for (const word of words) {
        tokens.push(`${param.prefix}${encodeURIComponent(word)}`);
      }
      continue;
    }

    tokens.push(`${param.prefix}${encodeURIComponent(value)}`);
  }

  return `https://www.google.com/search?q=${tokens.join("+")}`;
}

function openSearchTab() {
  const searchUrl = buildSearchUrl();
  chrome.tabs.create({ url: searchUrl, active: true });
}

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("query");
  if (!button) {
    return;
  }

  button.addEventListener("click", openSearchTab);
});
