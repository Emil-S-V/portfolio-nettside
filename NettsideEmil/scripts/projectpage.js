const projbuttons = document.querySelectorAll(".project-select");
const display = document.getElementById("projectDisplay");

projbuttons.forEach((projects) => {
    projects.addEventListener("click", () => {
        projbuttons.forEach(b => b.classList.remove("active"));
        projects.classList.add("active");

        const projectName = projects.textContent;
        const selectedProj = projectsData[projectName];

        let lookForLink = "";

        if (selectedProj.link) {
            lookForLink = `<a href="${selectedProj.link}" target="_blank">Prosjekt</a>`;
        }
        else {
            lookForLink = "";
        }

        let lookForImage = "";

        if (selectedProj.image) {
            lookForImage = `
            <div class="project-image-area">
            <img src="${selectedProj.image}" alt="${selectedProj.title} bilde">
            </div>
            `;
        }
        else {
            lookForImage = "";
        }

        display.innerHTML = `
        <div class="project-text">
            <h2>${selectedProj.title}</h2>
            <p>${selectedProj.description}</p>
            ${lookForLink}
        </div>

        ${lookForImage}
        `;
    })
})

const projectsData = {
    "Journey": {
        title: "Journey",
        description:`
        <p>Journey er et prosjekt som var utført på gruppe.</p>
        <p>Prosjektet vårt innebærte å lage et interaktivt kart for piloter, 
        hvor hensikten var å at redningspiloter kunne sende inn rapport til
        Kartverket om uregistrerte hindringer som påvirker reisen.
        På den andre siden skulle administratorer, som i denne konteksten er fra 
        kartverket, ha mulighet å åpne opp rapportene.
        Her har mulighet å se hvor på kartet hindringen er plassert, 
        også bestemme om de vil godta, eller avslå rapporten.</p>
        <p>I dette prosjektet tok jeg for meg ansvaret, og tok styring innenfor
        kartverket sin del av prosjektet. Dette gjalt da beslutninger på
        design, funksjonalitet, og interaksjon mellom program og database.</p>
        <p>Bildet til høyre kommer ifra validerings siden. 
        I skjermbildet kan man se hvordan en fra kartverket bennytter 
        programmet. Administratoren har muligheten til å akseptere, eller 
        avslå hindringen, og skrive </p>
        `,
        link: "https://github.com/melon095/IS_202_GRUPPE_6_PROSJEKT",
        image: "../images/Journey.png"
    },
    "GeoShelter": {
        title: "GeoShelter",
        description:`
        <p>Dette prosjektet er det nyeste jeg har arbeidet med, 
        som også er skapt i lag med en gruppe.</p>
        <p>Prosjektets formål er å tilby et kart med oversikt av alle offentlige 
        tilfluktsrom som befinner seg i Norge. Her har vi hentet datasett fra Geonorge om både 
        tilfluktsrom og befolknings tetthet. Et interresant aspekt som oppstod under utviklingen 
        var at vi så et helt nytt bruk for programmet også, nemlig at den kunne brukes under bygging av 
        tilfluktsrom. Ved å analysere befolkningstetthet og antall rom innenfor et areal kan man 
        planlegge hvor det egner å ha bygge tilflukts rom dersom det er behov.</p>
        <p>I dette prosjektet deltok jeg med å planlegge problemstilling, og finne datasett 
        som reflekterte målene våres. Samtlig å skape et tidlig design av hvordan nettsiden ser ut. 
        Innenfor funksjoner var jeg ansvarlig for å gjøre det mulig at brukeren kan se antall tilfluktsrom 
        i nærheten. Dette gjalt å lage en lagret funksjon i databasen som henter ut alle tilfluktsrom innen 
        en bestemt radius, og interaksjon mellom denne og systemet.</p>
        <p>I bildet til høyre ser du et eksempel av programmet, hvor man kan se 4 tilfluktsrom som er markert 
        innenfor radius.</p>
        `,
        link: "https://github.com/melon095/IS_218_OPPGAVE_1",
        image: "../images/GeoShelter.png"
    },
    "LoTR fanside": {
        title: "Lord of The Rings fanside",
        description: `
        <p>Gjennom tiden har jeg skapt mange ulike programmer, hvor selve koden 
        enten er gått tapt, eller ligger godt gjemt andre steder. Som skrevet i om meg siden, 
        har jeg lenge hatt en interresse over IT og programering, hvor jeg har skapt flere prosjekter 
        på både ungdomsskolen og videregående. Lord of The Rings nettsiden er et eksempel som jeg har laget fra den tiden</p>
        <p>I IT faget på videregående hadde jeg i oppgave å lage en fan nettside om Lord of The Rings. Siden denne nettsiden 
        var skapt på min gamle skole pc, finnes desverre ikke programmet lengre. Heldig vis spillte jeg inn en informativ 
        video som viser frem nettsiden.</p>
        <p>Dette er det første prosjektet jeg har utviklet som består av en nettside med definert funksjon.</p>
        `,
        link: "https://www.youtube.com/watch?v=AscWSqIcII0",
        image: "../images/LoTRFanSite.png"
    },
    "Annet": {
    title: "Annet kunnskap",
    description: "Dette er et prosjekt som...",
    },
}