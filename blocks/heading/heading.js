document.addEventListener('DOMContentLoaded', function() {
    const ul = document.querySelector('.default-content-wrapper ul');

    // Get all siblings of the <ul> that are <p> elements
    const siblings = Array.from(ul.parentElement.children);
    
    // Loop through each sibling after the <ul>
    let foundUl = false;
    siblings.forEach(sibling => {
        if (sibling === ul) {
            foundUl = true; // Mark that we found the <ul>
        } else if (foundUl && sibling.tagName === 'P') {
            // Create a new list item (li)
            const li = document.createElement('li');
            // Move the content of the paragraph into the new list item
            li.innerHTML = sibling.innerHTML;

            // Append the new list item to the unordered list
            ul.appendChild(li);
            // Optionally, remove the original paragraph
            sibling.remove();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all anchor tags with href containing 'bookmark'
  const anchors = document.querySelectorAll('a[href*="#bookmark-"]');

  anchors.forEach(anchor => {
    anchor.addEventListener('click',	 function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      // Get the href attribute's target
      const bookmarkId = this.getAttribute('href').split('#')[1];
	  console.log(bookmarkId);
      // Update the URL with window.location.href
	  
	  window.location.html = `#${bookmarkId}`;
	  console.log('location window: ',window.location.href);
	  
	  //console.log("history replace: ",history.replaceState('',`#{bookmarkId}`));

      // Scroll to the bookmarked element
      const targetElement = document.getElementById(bookmarkId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle the back button functionality
  window.addEventListener('popstate', function() {
    if (location.hash.includes("bookmark")) {
      // If the URL contains 'bookmark', navigate to the bookmark
      const bookmarkId = location.hash.substring(1);
      const targetElement = document.getElementById(bookmarkId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
