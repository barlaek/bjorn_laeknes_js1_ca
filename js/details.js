const detailsContainer = document.querySelector(".planet-details");

const queryString = document.location.search;

const params = URLSearchParams(queryString);

const id = params.get("id");

const url = "https://swapi.dev/api/planets/" + id;

async function getPlanet() {
    try {
        const response = await fetch(url);
        const details = response.json();

        console.log(details);

        createHTML(details);
    } catch (error) {
        console.log(error)
    }
}

getPlanet();

function createHTML(details) {
    detailsContainer.innerHTML = `<h1>${details.name}</h1>
                                    <div>Diameter: ${details.diameter}</div>
                                    <div>Climate: ${details.climate}</div>`
}