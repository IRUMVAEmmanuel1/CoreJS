// Define arrays for storing long URLs and their corresponding short URLs
const longUrls = [];
const shortUrls = [];

// Function to generate a random short URL
function generateShortUrl() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Function to shorten a given long URL and return the corresponding short URL
function shortenUrl(longUrl) {
  const index = longUrls.indexOf(longUrl);
  if (index > -1) {
    // If the long URL already exists in the array, return the corresponding short URL
    return shortUrls[index];
  } else {
    // If the long URL does not exist in the array, generate a new short URL and add it to the arrays
    const shortUrl = generateShortUrl();
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
const longUrl = 'https://www.example.com/very/long/url/that/we/want/to/shorten';
const shortUrl = shortenUrl(longUrl);
console.log(shortUrl); // e.g. "abc123"

redirect(shortUrl); // This will redirect the user to the original long URL
