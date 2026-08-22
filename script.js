fetch("project.json")
  .then(response => response.json())
  .then(projects => {
    const container = document.querySelector("#projects");

    projects.forEach(project => {
      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.year}</p>
        <p>${project.description}</p>
      `;

      container.appendChild(card);
    });
  });