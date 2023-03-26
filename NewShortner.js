

function getrandom() {
	var random_string =
		Math.random().toString(32).substring(2, 5) +
		Math.random().toString(32).substring(2, 5);
	return "https://" + random_string + ".com";
}

const handleUrlShorten = (url) => {
	let finalUrl = {};

	if (validateUrl(url)) {
		let randomString = getrandom();

		finalUrl = {
			shorten: randomString,
			original: url,
		};
	}

	return finalUrl;
};

const { shorten } = handleUrlShorten();

console.log(shorten);

function shortenUrl(longUrl) {
	const index = originalUrls.indexOf(longUrl);
	if (index > -1) {
		return shortUrls[index];
	} else {
		const shortUrl = getrandom();
		originalUrls.push(longUrl);
		shortUrls.push(shortUrl);
		return shortUrl;
	}
}

function redirect(shortUrl) {
	const index = shortUrls.indexOf(shortUrl);
	if (index > -1) {
		window.location.href = originalUrls[index];
	} else {
		alert(
			"Your URL does not appear to be a valid format. Please try again with a valid URL"
		);
	}
}
const longUrl = "https://app.slack.com/client/T03DU70TCTY/C03EDF7QEJV";

const shortUrl = shortenUrl(longUrl);
console.log(shortUrl);

redirect(shortUrl);
