const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const url = urlParams.get('url')

const id = urlParams.get('id')