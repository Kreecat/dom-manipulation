var body = document.getElementsByTagName("body")[0];

var headline = document.createElement("h1");
var headlineText = document.createTextNode("Cats are Cool");
headline.appendChild(headlineText);
body.appendChild(headline);

body.classList.add("orange");
body.classList.add("green-text");

var link = document.createElement("a");
var linkText = document.createTextNode("About");
link.appendChild(linkText);
link.setAttribute('href', '#');
body.appendChild(link);

var paragraph = document.createElement("p");
var paragraphText = document.createTextNode("Follow us on ");
paragraph.appendChild(paragraphText);
body.appendChild(paragraph);

var facebookLink = document.createElement("a");
var facebookText = document.createTextNode("facebook");
facebookLink.appendChild(facebookText);
facebookLink.setAttribute('href', '#');
paragraph.appendChild(facebookLink);
