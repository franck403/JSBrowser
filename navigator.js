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
function afullscreen() {
    var elements = document.getElementsByClassName("iframe");

    for (var i = 0; i < elements.length; i++) {
        var s = elements[i].src;
        elements[i].src = s
    }
}
document.addEventListener("fullscreenerror", handleError);
// or
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
document.getElementById("fullscreen").src = "icon/button/carre.png"

function fullscreen() {
    requestor.requestFullscreen();
    afullscreen()
    document.getElementById("fullscreen").src = "icon/button/carre.png"
}