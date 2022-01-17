const escapeChars = {
    '¢': 'cent',
    '£': 'pound',
    '¥': 'yen',
    '€': 'euro',
    '©': 'copy',
    '®': 'reg',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    '&': 'amp',
    '\'': '#39'
};

let regexString = '[';
for (let key in escapeChars) {
    regexString += key;
}
regexString += ']';

const regex = new RegExp(regexString, 'g');

function escapeHTML(str) {
    return str.replace(regex, (m) => '&' + escapeChars[m] + ';');
}

function createSnippet(code, element) {
    const htmlEntities = escapeHTML(code.outerHTML)
    element.innerHTML = htmlEntities;

    Prism.highlightAll();
}

function hideSidebar(sidebar) {
    const params = location.search.slice(1).split('&');
    if (params.includes('hideSidebar=true'))
        sidebar.classList.add("hidden");
}

function onLoad() {
    const sidebar = document.getElementById("sidebar-mobile-container");
    const code = document.getElementById('code');

    hideSidebar(sidebar);

    createSnippet(sidebar, code);

    const firstSection = document.querySelectorAll("[data-section='1']");
    const secondSection = document.querySelectorAll("[data-section='2']");
    const slideNext = document.getElementsByClassName("is-selected")[0];
    const slideBack = document.getElementsByClassName("slide-back")[0];

    function handleSlideBack() {
        firstSection.forEach(section => section.classList.remove("hidden"));
        secondSection.forEach(section => section.classList.add("hidden"));
    }

    function handleSlideNext() {
        firstSection.forEach(section => section.classList.add("hidden"));
        secondSection.forEach(section => section.classList.remove("hidden"));
        slideBack.addEventListener("click", handleSlideBack)
    }
    slideNext.addEventListener("click", handleSlideNext)

}
window.addEventListener('load', onLoad)
