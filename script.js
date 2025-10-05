const button = document.getElementById("showGame")
button.addEventListener("click", showGame);

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
