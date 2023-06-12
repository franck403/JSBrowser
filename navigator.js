var searchbar = document.getElementById("searchbar1")
searchbar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Do work
    }
});
const requestor = document.getElementsByTagName("body")[0];

function handleError(event) {
    document.getElementById("fullscreen").src = "icon/button/2carre.png"
}
document.addEventListener("fullscreenerror", handleError);
// or
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
document.getElementById("fullscreen").src = "icon/button/carre.png"

function fullscreen() {
    if (document.fullscreenEnabled) {
        document.getElementById("fullscreen").src = "icon/button/carre.png"
        requestor.requestFullscreen();
    } else {
        document.getElementById("fullscreen").src = "icon/button/2carre.png"
        document.exitFullscreen();
    }
}