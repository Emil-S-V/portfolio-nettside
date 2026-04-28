const projbuttons = document.querySelectorAll(".project-select");
const display = document.getElementById("projectDisplay");

projbuttons.forEach((projects) => {
    projects.addEventListener("click", () => {
        projbuttons.forEach(b => b.classList.remove("active"));

        projects.classList.add("active");

        display.innerHTML = `
        <h2>${projects.textContent}</h2>
        <p>Her kommer informasjon om ${projects.textContent}.</p>
        `;
    })
})