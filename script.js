const locator = document.getElementById("locator");
const paragraph = document.createElement("p");
const searchField = document.createElement("div");
searchField.innerHTML =
	'<form action="https://www.trusselltrust.org/get-help/find-a-foodbank/" method="get" target="_blank">        <label for="search" style="color:white">Search</label>        <input type="tex" id="search" name="q">               <button>Find your Bank</button>';
locator.appendChild(searchField)
paragraph.innerText =
	"The purpose of our product is to use modern technology such as social media and data collection techniques to generate knowledge and mapping of current trends in the cost of living crisis and to turn that data into a saleable asset whose profits can then be used for the creation of a chain of food banks.";
locator.appendChild(paragraph);
paragraph.style.color = "white";
// link to be replaced with a search field
const anchorTag = document.createElement("a")
anchorTag.setAttribute("href", "https://www.trusselltrust.org/get-help/find-a-foodbank/");
locator.appendChild(anchorTag);
anchorTag.innerText = "Click here to find your local Food Bank"


// food bank search form to implement
/* <form action="https://github.com/search" method="get" target="_blank">
        <label for="search">Search</label>
        <input type="text" id="search" name="q">
        <!-- <label for="search">Search</label>
        <input id="search" type="submit" name="q" /> -->
        <button>GitHub</button>

*/