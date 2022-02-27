const detailsContainer = document.querySelector(".planet-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("name");

console.log(id)

const url = "https://swapi.dev/api/planets/" + id;

async function getPlanet() {
    try {
        const response = await fetch(url);
        const planets = response.json();

        console.log(planets);

        createHTML(planets);
    
    } catch (error) {
        console.log(error)
    }
}

getPlanet();

function createHTML(planets) {
    detailsContainer.innerHTML = `<h1>${planets.name}</h1>
                                    <div>Diameter: ${planets.diameter}</div>
                                    <div>Climate: ${planets.climate}</div>`
}