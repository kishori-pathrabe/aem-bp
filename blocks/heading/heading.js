export default function decorate(block) {
  // Select the first paragraph inside the div with class 'literature'
const firstParagraph = document.querySelector('.blue div p:first-of-type');

// Change the style of the first paragraph
if (firstParagraph) {
    firstParagraph.style.color = 'blue'; // Change text color to blue
}
}
