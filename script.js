const elektronButton = document.getElementById("play-elektron");
elektronButton.addEventListener("click", () => showGame("elektron", elektronButton));

const aliceButton = document.getElementById("play-alice");
aliceButton.addEventListener("click", () => showGame("alice", aliceButton));

const sightsButton = document.getElementById("play-sights");
sightsButton.addEventListener("click", () => showGame("sights", sightsButton));

const infoLink = document.getElementById("info-click");
infoLink.addEventListener("click", () => scrollToSection("about"));

const projectsLink = document.getElementById("projects-click");
projectsLink.addEventListener("click", () => scrollToSection("projects"));

function showGame(id, button){
    const iframe1 = document.getElementById(id);

    if(iframe1.style.display === "unset"){
        iframe1.style.display = "none";
        button.innerText = "Zagraj teraz";
        return;
    }
    iframe1.style.display = "unset";
    button.innerText = "Ukryj grę";
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
}
