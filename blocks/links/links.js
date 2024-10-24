const paragraph = document.querySelector('.link');
const content = paragraph.textContent;

// Use a regular expression to find the URL starting with "https://"
const urlMatch = content.match(/https:\/\/[^\s]+/);

if (urlMatch) {
    const url = urlMatch[0]; // The first matched URL
    const link = `<a href="${url}" target="_blank">${url}</a>`; // Create the anchor tag
    const updatedContent = content.replace(url, link); // Replace the URL with the anchor tag
    paragraph.innerHTML = updatedContent;
}
