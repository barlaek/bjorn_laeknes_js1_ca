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

        planets.forEach(function callback(planets, index) {
          endpointContainer.innerHTML += `<a href="details.html?id=${index + 1}" >
                                        <div class="rest-det">
                                        <h3>${planets.name}</h3>
                                        </div>
                                        </a>`;
                                       })
    } catch (error) {
        console.log(error);
        endpointContainer.innerHTML = displayError("A Sith Lord stole the API");
    }
}

getPlanets();