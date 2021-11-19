function onLoad() {
    const iframe = document.getElementById("frame-tbl-c-mobile");
    const tbl = iframe.contentWindow.document.getElementById("tbl-collapse-mobile");

    const code = document.getElementById('code-tbl-c-mobile');
    createSnippet(tbl, code);
}
window.addEventListener('load', onLoad)
