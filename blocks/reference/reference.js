// Helper function to convert absolute URLs to relative
function convertToRelative(href) {
  const url = new URL(href, window.location.origin);
  return url.pathname + url.search + url.hash;
}

// Helper function to generate a valid id from the relative URL
function generateId(href) {
  const url = convertToRelative(href);
  return url.pathname.replace(/[^\w-]+/g, '_') + url.search.replace(/[^\w-]+/g, '_') + url.hash.replace(/[^\w-]+/g, '_');
}


function decorateLinks(main) {
  // Get all anchor elements within the main container
  const links = main.querySelectorAll('a');

  // Helper function to convert absolute URLs to relative
  function convertToRelative(href) {
      const url = new URL(href, window.location.origin);
      return url.pathname + url.search + url.hash;
  }

  // Counter to generate unique ids for each internal link and backlinks
  let linkCounter = 0;

  // Loop through each anchor element
  links.forEach((link) => {
      const { href } = link;

      // Convert to relative URL if the link is within the same domain
      if (href.startsWith(window.location.origin)) {
          const relativeHref = convertToRelative(href);
          link.setAttribute('href', relativeHref);
      }

      // Only generate a unique id if the link does not already have one
      if (!link.hasAttribute('id')) {
          linkCounter++;
          const uniqueId = `link-${linkCounter}`;
          link.setAttribute('id', uniqueId);
      }

      // If the link has a hash (indicating an internal reference), locate the target element
      if (link.hash) {
          const targetId = link.hash.substring(1); // Get the target ID without the '#' character
          const targetElement = document.getElementById(targetId);

          // Only proceed if a target element exists
          if (targetElement) {
              // Find the parent paragraph of the target element
              const targetParentParagraph = targetElement.closest('p');

              if (targetParentParagraph) {
                  // Check if any reverse links with href starting with "#link" already exist in the target paragraph
                  const reverseLinkExists = Array.from(targetParentParagraph.querySelectorAll('a.reverse-link')).some(
                      (existingLink) => existingLink.getAttribute('href').startsWith('#link')
                  );

                  if (!reverseLinkExists) {
                      // Create a reverse reference link only if it doesn't exist
                      const reverseRef = document.createElement('a');
                      reverseRef.href = `#${link.id}`; // Use the existing or newly set id as the reverse reference
                      reverseRef.textContent = '↩ Back to reference';
                      reverseRef.classList.add('reverse-link'); // Add a specific class for easy identification
                      reverseRef.style.display = 'block';
                      reverseRef.style.fontSize = '0.9em';
                      reverseRef.style.color = '#007bff';

                      // Append the reverse reference to the parent paragraph of the target element
                      targetParentParagraph.appendChild(reverseRef);
                  }
              }
          }
      }


  });
}
