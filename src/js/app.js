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
