// Define arrays for storing long URLs and their corresponding short URLs
const longUrls = [];
const shortUrls = [];

function validateUrl(value) {
  var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i');

      return !!urlPattern.test(value);
}

function getrandom() {
  var random_string =
    Math.random().toString(32).substring(2, 5) +
    Math.random().toString(32).substring(2, 5);
  return "https://"+random_string+".com";
}

// Function to shorten a given long URL and return the corresponding short URL
function shortenUrl(longUrl) {
  const index = longUrls.indexOf(longUrl);
  if (index > -1) {
    // If the long URL already exists in the array, return the corresponding short URL
    return shortUrls[index];
  } else {
    // If the long URL does not exist in the array, generate a new short URL and add it to the arrays
    const shortUrl = getrandom();
    longUrls.push(longUrl);
    shortUrls.push(shortUrl);
    return shortUrl;
  }
}

// Function to redirect the user to the original long URL when given the short URL
function redirect(shortUrl) {
  const index = shortUrls.indexOf(shortUrl);
  if (index > -1) {
    // If the short URL exists in the array, redirect the user to the corresponding long URL
    window.location.href = longUrls[index];
  } else {
    // If the short URL does not exist in the array, show an error message
    alert('Sorry, the URL you entered is not valid.');
  }
}
const longUrl = 'https://app.slack.com/client/T03DU70TCTY/C03EDF7QEJV';
const shortUrl = shortenUrl(longUrl);
console.log(shortUrl); // e.g. "abc123"

redirect(shortUrl); // This will redirect the user to the original long URL
