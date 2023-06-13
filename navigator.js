var searchbar = document.getElementById("searchbar1")
searchbar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        var research = document.getElementById("searchbar1").value
        var reg = "https://"
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
    if (!document.fullscreen) {
        document.getElementById("fullscreen").src = "icon/button/carre.png"
        requestor.requestFullscreen();
    } else {
        document.getElementById("fullscreen").src = "icon/button/2carre.png"
        document.exitFullscreen();
    }
}

function reset_tab(id) {
    document.getElementById("n" + id).value = "New tab"
    document.getElementById("b" + id).src = ""
}

function close_tab(id) {
    console.log(id)
    document.getElementById(id).remove()
    document.getElementById("b" + id).remove()
}
function new_tab() {
    var id = String(Math.random()).split(".")[1]
    var template = `<div id="b${id}" onclick="select_tab(b${id})"><button>New tab</button><img src="icon/button/traverser.png" id="nb${id}" onclick="close_tab(b${id})"></div>` 
    var iframe = `<iframe id="bb${id}"></iframe>`
    var before = document.getElementById("tabs").innerHTML
    document.getElementById("tabs").innerHTML = before + template
    var before = document.getElementById("iframe").innerHTML
    document.getElementById("iframe").innerHTML = before + iframe
}

function select_tab(id) {
    var div = document.getElementById(id)
    var img = document.getElementById("n" + id)
    var iframe = document.getElementById("b" + id)
}