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

const url = "https://api-nba-v1.p.rapidapi.com/players/league/Africa/?rapidapi-key=9a5d0c3648msh3a060a92a7fc400p14adb4jsnf1a8864fe5bf";

const endpointContainer = document.querySelector(".endpoint");

async function getPlayers() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        const players = data;

        endpointContainer.innerHTML = "";

        for (let i = 0; i < players.length; i++) {
            if (i === 3) {
                break;
            }
        }

        // const playerName = players[i].firstName;
        // const teamId = players[i].teamId;
        // const yearsPro = players[i].
    } catch (error) {
        console.log(error);
    }
}

getPlayers();


// fetch("https://documenu.p.rapidapi.com/restaurant/4072702673999819", {
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