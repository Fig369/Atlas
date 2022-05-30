var navbar = document.getElementById("navbar");
var showcase = document.getElementById("showcase");
var footer = document.getElementById("footer");
var footerNodes = footer.childNodes;
console.log(footerNodes);

var footerChildren = footer.children;
console.log(footerChildren);

var navLinks = document.getElementsByClassName("nav-link");
console.log(navLinks);

var ul = document.querySelector("ul");
console.log(ul);

var ulChildNodes = ul.childNodes;
console.log(ulChildNodes);

var aboutLi = ulChildNodes[3];
console.log(aboutLi);
