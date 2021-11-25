function openSide() {
    document.getElementById("left").style.width = "40%";
    document.getElementById("right").style.width ="60%";
}

function closeSide() {
    document.getElementsByClassName("left").style.width = "0%";
    document.getElementsByClassName("right").style.width = "100%";
}