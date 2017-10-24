const request = require("request");
const API_KEY = require("./api-key");

const auth = `Bearer ${API_KEY}`;

request(
	{
		url: "https://api.spotify.com/v1/artists/5NkUpXWkeXspvu7iQQOHhP",
		headers: { Authorization: auth, Accept: "application/json" }
	},
	(err, res, body) => {
		if (err) {
			return console.log(err);
		}
		artist = JSON.parse(body);
		console.log(artist.genres);
	}
);

