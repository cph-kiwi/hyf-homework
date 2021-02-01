const addCSS = require("./css_creator.js");

const createTitle = (title) => {
  return `<head>
  ${addCSS()}
  <title>${title}</title>
  </head>`;
};

module.exports = createTitle;
