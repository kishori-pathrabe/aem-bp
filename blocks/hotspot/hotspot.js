export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r > 0) {
      const content = [...row.children][0].textContent.trim();
      console.log('content',content);
      const variant = block.classList.value;  
      console.log('variant',variant);
      const nexticondiv = document.createElement('div');
      nexticondiv.classList.add('hotspot'); // Added class for CSS targeting
      nexticondiv.style.left = [...row.children][1].textContent;
      nexticondiv.style.top = [...row.children][2].textContent;
      nexticondiv.setAttribute('data', content);
      
      const contentContainer = document.createElement('div');
      contentContainer.classList.add('hotspot-content');
        contentContainer.textContent = 'block; // Display text
        contentContainer.classList.add('bgborder');
        contentContainer.style.display = 'none'; // Initially hide the content
    

      // Append content container to hotspot div
      nexticondiv.appendChild(contentContainer);
      
      // Show content on hover
      nexticondiv.addEventListener('mouseenter', () => {
        contentContainer.style.display = content; // Show the content
      });

      // Hide content when not hovering
      nexticondiv.addEventListener('mouseleave', () => {
        contentContainer.style.display = 'none'; // Hide the content
      });

      nexticondiv.addEventListener('click', () => {
        // Hide content of all other hotspots
        document.querySelectorAll('.hotspot').forEach((hotspot) => {
          if (hotspot !== nexticondiv) {
            hotspot.classList.remove('onclick');
          }
        });
        // Toggle the current hotspot content
        nexticondiv.classList.toggle('onclick');
      });

      row.after(nexticondiv);
      row.remove();
    }
  });
}
