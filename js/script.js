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

const url = "https://api-nba-v1.p.rapidapi.com/players/league/Africa/?rapidapi-key=9a5d0c3648msh3a060a92a7fc400p14adb4jsnf1a8864fe5bf";

const endpointContainer = document.querySelector(".endpoint");

async function getLeagues() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getLeagues();
