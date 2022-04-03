// ==UserScript==
// @name         r/httyd Logo template
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the canvas!
// @author       oralekin, exdeejay (xDJ_)
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
			const ts = Math.floor(Date.now() / 10000);
            i.src = "https://raw.githubusercontent.com/Auron956/httyd-place/main/melvor_idle_template.png?tstamp=" + ts;
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
