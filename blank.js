const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

// Open/Close search form popup
const formOpenBtn = selectElement('#continue-reading');
const formCloseBtn = selectElement('#form-close-btn');
const introductionNoteContainer = selectElement('#introduction-note-container');

formOpenBtn.addEventListener('click', () => introductionNoteContainer.classList.add('activated'));

formCloseBtn.addEventListener('click', () => introductionNoteContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') introductionNoteContainer.classList.remove('activated');
});


