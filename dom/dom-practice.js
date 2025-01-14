// DOM is the structure of a webpage and javascript can interact and modify that structure:

// modifying text:
let heading = document.getElementById("myHeading");
heading.innerText = "New Heading Text";

// modifying HTML content:
let firstParagraph = document.querySelector('p');
firstParagraph.innerHTML = "<strong>This is a bold paragraph!</strong>";

// Changing Styles:
heading.style.color = "skyblue";
heading.style.fontSize = "40px";

// adding new elements:
let newDiv = document.createElement('div');
newDiv.innerHTML = "<p>This is a new paragraph inside a div!</p>";
document.body.appendChild(newDiv);

// removing elements:
let p2 = document.getElementById('p2');
p2.remove();

// Example: Changing text when a button is clicked:
       // Get the button and paragraph by their IDs
let button = document.getElementById("changeTextButton");
let paragraph = document.getElementById("textParagraph");

       // Add an event listener to the button to trigger when clicked
button.addEventListener("click", function() {
       // Change the text of the paragraph
  paragraph.innerText = "The text has been changed!";
});

// Example: Changing background color when a button is clicked:
let button2 = document.getElementById("changeColor");
button2.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue";
});