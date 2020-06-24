/* author Bogdan Kurchak */

const windowHyperskill = open("https://hyperskill.org");
let name = prompt("What's your name?", "Bob");

alert(`Welcome to our website, ${name}!`);

let answer = confirm(`Do you want to close that page, ${name}?`);

if (answer) {
 windowHyperskill.close();
} else {
  alert("The pase wasn`t closed!");
}
