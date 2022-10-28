function searchSpaceX(query) {
    const url = `https://api.spacexdata.com/v4/launches=${query}`;
    fetch(url)
.then((response) => response.json())
.then((jsonData) => {
    console.log("We got our data");
    console.log(jsonData);
});
}

window.onload = () => {
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
        console.log(searchFieldElement.value);
    };
}

