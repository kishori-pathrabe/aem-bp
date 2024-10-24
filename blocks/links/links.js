export function decorateMain(main) {
    // hopefully forward compatible button decoration
    decorateButtons(main);
    decorateIcons(main);
    buildAutoBlocks(main);
    decorateSections(main);
    decorateBlocks(main);
    decorateBookmarkLinks(main)
}
 
/**
* Decorates decorate BookmarkLinks links to absolute.
* @param {Element} main The container element
*/
export function decorateBookmarkLinks(main) {
    main.querySelectorAll('a').forEach((a) => {
        const href = a.getAttribute('href'); if (href) { // Check if the href contains 'bookmark' if (href.includes('bookmark')) { // Convert to a relative URL by removing the domain const relativeUrl = href.replace(/^.*\/\/[^\/]+/, ''); a.setAttribute('href', relativeUrl); console.log(`Converted to relative URL: ${relativeUrl}`); } } });
}
export function decorateLinkedPictures(container, processInBlocks = true) {
  /* MS Word online does not support linked images. As a workaround use any links
  that are directly after the image. */

  // picture + br + a in the same paragraph
  [...container.querySelectorAll('picture + br + a, picture + a')]
  // link text is an unformatted URL paste
    .filter((a) => a.textContent.trim().startsWith('http'))
    .forEach((a) => {
      const br = a.previousElementSibling;
      let picture = br.previousElementSibling;
      if (br.tagName === 'PICTURE') picture = br;
      picture.remove();
      br.remove();
      a.innerHTML = picture.outerHTML;
      // make sure the link is not decorated as a button
      a.parentNode.classList.remove('button-container');
      a.className = '';
    });
