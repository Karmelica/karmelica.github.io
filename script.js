const button = document.getElementById("showGame")
button.addEventListener("click", showGame);

const infoLink = document.getElementById("info-click");
infoLink.addEventListener("click", () => scrollToSection("about"));

const projectsLink = document.getElementById("projects-click");
projectsLink.addEventListener("click", () => scrollToSection("projects"));

function showGame(){
    const iframe1 = document.getElementById("elektron");
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
