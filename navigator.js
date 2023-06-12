var searchbar = document.getElementById("searchbar1")
searchbar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Do work
    }
});
const requestor = document.querySelector("#container");

function handleError(event) {
    document.getElementById("fullscreen").src = "icon/button/2carre.png"
}

document.addEventListener("fullscreenerror", handleError);
// or
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
document.getElementById("fullscreen").src = "icon/button/carre.png"

function fullscreen() {
    requestor.requestFullscreen();
    document.getElementById("fullscreen").src = "icon/button/carre.png"
}