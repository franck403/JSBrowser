function title(text,id) {
    parent.document.getElementById("tt" + id).innerHTML = text;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const url = urlParams.get('url')

const id = urlParams.get('id')

if (url == "https://roaring-griffin-499a65.netlify.app/search") {
    parent.document.getElementById("tt" + id).innerHTML = "new tab";
} else {
    title(url,id)
}