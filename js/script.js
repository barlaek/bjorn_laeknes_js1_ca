fetch("https://api-nba-v1.p.rapidapi.com/leagues/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "9a5d0c3648msh3a060a92a7fc400p14adb4jsnf1a8864fe5bf"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});