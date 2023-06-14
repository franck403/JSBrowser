function title(text,id) {
    parent.document.getElementById("tt" + id).innerHTML = text;
}
var searchbar = parent.document.getElementById("searchbar1")
searchbar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        var research = parent.document.getElementById("searchbar1").value
        if (research.slice(0, 8) == "https://") {
            var id = parent.document.getElementsByClassName("active")[0].id
            parent.document.getElementById("tt" + id).innerHTML = research.slice(1,20);
            parent.document.getElementById("b" + id).src = "https://roaring-griffin-499a65.netlify.app/api/load/1?url=" + research
        } else if (research.slice(0, 7) == "http://") {
            var id = parent.document.getElementsByClassName("active")[0].id
            parent.document.getElementById("tt" + id).innerHTML = research.slice(1,20);
            parent.document.getElementById("b" + id).src = "https://roaring-griffin-499a65.netlify.app/api/load/2?url=" + research
        } else {
            var id = parent.document.getElementsByClassName("active")[0].id
            parent.document.getElementById("tt" + id).innerHTML = research.slice(1,20);
            parent.document.getElementById("b" + id).src = "https://roaring-griffin-499a65.netlify.app/api/load/3?q=" + research
        }    }
});

var searchbar1 = document.getElementById("searchbar")
searchbar1.addEventListener("keyup", function(event) {
    var research = document.getElementById("searchbar").value
    if (research.slice(0, 8) == "https://") {
        var id = parent.document.getElementsByClassName("active")[0].id
        parent.document.getElementById("tt" + id).innerHTML = research.slice(1,20);
        parent.document.getElementById("b" + id).src = "https://roaring-griffin-499a65.netlify.app/api/load/1?url=" + research
    } else if (research.slice(0, 7) == "http://") {
        var id = parent.document.getElementsByClassName("active")[0].id
        parent.document.getElementById("tt" + id).innerHTML = research.slice(1,20);
        parent.document.getElementById("b" + id).src = "https://roaring-griffin-499a65.netlify.app/api/load/2?url=" + research
    } else {
        var id = parent.document.getElementsByClassName("active")[0].id
        parent.document.getElementById("tt" + id).innerHTML = research.slice(1,20);
        parent.document.getElementById("b" + id).src = "https://roaring-griffin-499a65.netlify.app/api/load/3?q=" + research
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