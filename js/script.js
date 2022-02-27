const endpointContainer = document.querySelector(".endpoint");

const swURL = "https://swapi.dev/api/planets";

async function getPlanets() {
    try {
        const response = await fetch(swURL);
        const json = await response.json();
        console.log(json);

        endpointContainer.innerHTML = "";

        const planets = json.results;

        console.log(planets);

        planets.forEach(function(planet) {
            endpointContainer.innerHTML += `<a href="details.html?id=${planet.name}">
                                            <div class="rest-det">
                                            <h3>${planet.name}</h3>
                                            </a>`;
        });
    } catch (error) {
        console.log(error);
    }
}

getPlanets();