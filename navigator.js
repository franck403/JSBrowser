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
    console.log(document.getElementById("tt" + id))
    document.getElementById("tt" + id).innerHTML = "New tab"
    var s = document.getElementById("b" + id).src
    document.getElementById("b" + id).src = ""
    document.getElementById("b" + id).src = s
}

function close_tab(id) {
    document.getElementById(id).remove()
    document.getElementById("b" + id).remove()
}
function new_tab() {
    var id = String(Math.random()).split(".")[1]
    var template = `<div id="b${id}" onclick="select_tab('b${id}')"><button id="ttb${id}">New tab</button><img src="icon/button/traverser.png" id="nb${id}" onclick="close_tab('b${id}')"></div>` 
    var iframe = `<iframe id="bb${id}" src="https://roaring-griffin-499a65.netlify.app/search?url=https://roaring-griffin-499a65.netlify.app/search&id=b${id}"></iframe>`
    var before = document.getElementById("tabs").innerHTML
    document.getElementById("tabs").innerHTML = before + template
    var before = document.getElementById("iframe").innerHTML
    document.getElementById("iframe").innerHTML = before + iframe
    document.getElementById("bb" + id).classList.add('active');
}

function select_tab(id) {
    var div = document.getElementById(id)
    var img = document.getElementById("n" + id)
    var iframe = document.getElementById("b" + id)
}