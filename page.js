function title(text,id) {
    parent.document.getElementById("tt" + id).innerHTML = text;
}
var searchbar = parent.document.getElementById("searchbar1")
searchbar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        var research = document.getElementById("searchbar1").value
        var reg = "https://"
    }
});

var searchbar1 = document.getElementById("searchbar")
searchbar1.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        var research = document.getElementById("searchbar1").value
        var reg = "https://"
    }
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const url = urlParams.get('url')

const id = urlParams.get('id')

if (url == "https://roaring-griffin-499a65.netlify.app/search") {
    parent.document.getElementById("tt" + id).innerHTML = "new tab";
} else {
    title(url,id)
    document.getElementById("iframe").src = `https://www.webcrawler.com/serp?q=${q}`
}