const renderProjectsList = (projects) => {
  return projects.map((project) => {
    return `<li>
        <h2>${project.title}</h2>
        <a class="codeUrl" href="${project.codeUrl}">See code on github</a>
        <a class="previewUrl" href="${project.previewUrl}">Check out the project here</a>
        <img src=${project.image} style="width:100px">
        </li>`;
  });
};

module.exports = renderProjectsList;
