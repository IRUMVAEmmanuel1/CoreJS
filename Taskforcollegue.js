function vowels(str) {
	let myname = str.match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi).length;
	console.log("Total Non vowels is: ", myname);
}
vowels("irumva");
