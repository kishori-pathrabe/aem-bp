export default function decorate(block) {
 // Select the first paragraph inside the nested div within the div with class 'literature'
const nestedFirstParagraph = document.querySelector('.blue > div p:first-of-type');

// Change the style of the first nested paragraph
if (nestedFirstParagraph) {
    nestedFirstParagraph.style.backgroundColor = '#0070c0'; // Change background color
}

}
