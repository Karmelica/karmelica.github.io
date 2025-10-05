const button = document.getElementById("showGame")
button.addEventListener("click", show);

function show(){
    const iframe1 = document.getElementById("elektron");
    if(iframe1.style.display === "unset"){
        iframe1.style.display = "none";
        return;
    }
    iframe1.style.display = "unset";
}
