const endpointContainer = document.querySelector(".endpoint");

const swURL = "https://swapi.dev/api/planets"

async function getPlanets() {
    try {
        const response = await fetch(swURL);
        const json = await response.json();
        console.log(json);

        endpointContainer.innerHTML = "";

        const planets = json.results;

        console.log(planets);

        for (var i = 0; i < planets.length; i++) {
            if (i === 2) {
                break;
            }
        }

        const name = planets[i].name;
        const diameter = planets[i].diameter;
        const climate = planets[i].climate;

        endpointContainer.innerHTML += `<a href="details.html>
                                            <div class="rest-det">
                                            <h3>${name}</h3>
                                            <p>${diameter}</p>
                                            <p>${climate}</p>
                                            </div>
                                            </a>`
    } catch (error) {
        console.log(error);
    }
}

getPlanets();