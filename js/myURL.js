const http = require("url");

const myURL = new URL("https://example.com/bar")

console.log("Before Change");
console.log(myURL.href);

console.log()
myURL.href = "https://www.google.com/bar"

console.log("After Change");
console.log(myURL.href)