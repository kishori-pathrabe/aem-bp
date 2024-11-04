export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r > 0) {
      const content = [...row.children][0].textContent.trim();
      const variant = block.classList.value;  
      
      const isTextVariant = !variant.includes('image') && !variant.includes('video');

      const nexticondiv = document.createElement('div');
      nexticondiv.classList.add('hotspot'); // Added class for CSS targeting
      nexticondiv.style.left = [...row.children][1].textContent;
      nexticondiv.style.top = [...row.children][2].textContent;
      nexticondiv.setAttribute('data', content);
      
      const contentContainer = document.createElement('div');
      contentContainer.classList.add('hotspot-content');
      
      if (isTextVariant) {
        contentContainer.textContent = content; // Display text
        contentContainer.classList.add('bgborder');
      }

      // Append content container to hotspot div
      nexticondiv.appendChild(contentContainer);
      
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
