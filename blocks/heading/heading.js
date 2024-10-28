const ul = document.querySelector('.default-content-wrapper ul');

// Select the paragraph that you want to convert into a list item
const paragraph = document.querySelector('.default-content-wrapper p:nth-of-type(2)');

// Create a new list item (li)
const li = document.createElement('li');

// Move the content of the paragraph into the new list item
li.innerHTML = paragraph.innerHTML;

// Append the new list item to the unordered list
ul.appendChild(li);

// Optionally, remove the original paragraph
paragraph.remove();
