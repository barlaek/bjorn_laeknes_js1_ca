// fetch("https://api-nba-v1.p.rapidapi.com/leagues/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "9a5d0c3648msh3a060a92a7fc400p14adb4jsnf1a8864fe5bf"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// API KEY https://the-one-api.dev/v2/AzBkqSc29XPtYAnaQFMW

// const url = "https://api-nba-v1.p.rapidapi.com/players/league/Africa/?rapidapi-key=9a5d0c3648msh3a060a92a7fc400p14adb4jsnf1a8864fe5bf";

const endpointContainer = document.querySelector(".endpoint");

// async function getPlayers() {
//     try {
//         const response = await fetch(url);

//         const data = await response.json();

//         console.log(data);

//         const players = data;

//         endpointContainer.innerHTML = "";

//         for (let i = 0; i < players.length; i++) {
//             if (i === 3) {
//                 break;
//             }
//         }

//         // const playerName = players[i].firstName;
//         // const teamId = players[i].teamId;
//         // const yearsPro = players[i].
//     } catch (error) {
//         console.log(error);
//     }
// }

// getPlayers();


// fetch("https://documenu.p.rapidapi.com/restaurants/search/fields?restaurant_phone=5854420444", {
// 	"method": "GET",
// 	"headers": {
// 		"x-api-key": "7c2bf1469db11841bc00a0fa6886473e",
// 		"x-rapidapi-host": "documenu.p.rapidapi.com",
// 		"x-rapidapi-key": "9a5d0c3648msh3a060a92a7fc400p14adb4jsnf1a8864fe5bf"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

const restaurantsURL = "https://documenu.p.rapidapi.com/restaurants/search/fields?restaurant_phone=5854420444";
const apiHeader = {
    headers: {
        "x-api-key": "7c2bf1469db11841bc00a0fa6886473e",
		"x-rapidapi-host": "documenu.p.rapidapi.com",
		"x-rapidapi-key": "9a5d0c3648msh3a060a92a7fc400p14adb4jsnf1a8864fe5bf"
    }
}

async function getRestaurants() {
    try {
        const response = await fetch(restaurantsURL, apiHeader);
        const results = await response.json();
        console.log(results);

        endpointContainer.innerHTML = "";

        const restaurants = results.data;

        console.log(restaurants);

        for (let i = 0; i < restaurants.length; i++) {
            if (i === 3) {
                break;
            }
        }

        const restName = restaurants[i].restaurant_name;
        const restHours = restaurants[i].hours;
        const priceRange = restaurants[i].price_range;

        endpointContainer.innerHTML += `<div class="rest-det">
                                            <h3>${restName}</h3>
                                            <p>${restHours}</p>
                                            <p>${priceRange}</p>
                                        </div>`
    } catch (error) {
        console.log(error);
    }
}

getRestaurants();