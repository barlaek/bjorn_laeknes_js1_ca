const detailsContainer = document.querySelector(".planet-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id)

const url = "https://swapi.dev/api/planets/" + id;

async function getPlanet() {
    try {
        const response = await fetch(url);
        const detail = await response.json();

        detailsContainer.innerHTML = "";

        console.log(detail);

        createHTML(detail);
    
    } catch (error) {
        console.log(error)
        detailsContainer.innerHTML = displayError("A Sith Lord stole the API");
    }
}

getPlanet();

function createHTML(planet) {
    detailsContainer.innerHTML = `<h1>${planet.name}</h1>
                                    <div>Diameter: ${planet.diameter}</div>
                                    <div>Climate: ${planet.climate}</div>`
}