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
