// ==UserScript==
// @name Gmail Font Type and Size
// @include https://mail.google.com/mail*
// @include https://calendar.google.com/calendar/*
// @description Set Gmail font to classic view
// @version 1.0
// ==/UserScript==


(function () {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) {
            return;
        }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    let css = `
* {
    font-family: sans-serif !important;
    font-size: 10pt !important;
}
.nn.aeN {
    width: 200px !important;
    min-width: 200px !important;
    max-width: 200px !important
}
.bq9 {
    position: absolute;
    top: 62% !important;
    left: 0;
    height: 369px;
    width: 200px !important;
    min-width: 200px !important;
    max-width: 200px !important
}
.brC-brG {
    height: 369px;
    width: 200px !important;
    min-width: 200px !important;
    max-width: 200px !important
}
.tfZEue {
    margin: 0 0 0 0 !important
}
.O4scvf {
    display: none !important
}
.bsU {
    margin-left: 0 !important;
}
.NQ .bsU {
    margin-left: 0 !important;
    display: block !important;
}
.nU {
    margin-right: 0 !important;
}
.TK .TO {
    width: 200px !important;
}
.pM {
    margin-left: 2px !important;
}
.bqX.brv, .uUQygd, .aqw .bq4.xY, .O4scvf{
    display: none !important;
}

.aqw .xW.xY {
    display: flex !important;
}
* {
    font-family: sans-serif !important;
    font-size: 10pt !important;
}
`;

    addGlobalStyle(css);


})();
