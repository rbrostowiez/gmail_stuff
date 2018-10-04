// ==UserScript==
// @name Gmail Font Type and Size
// @include https://mail.google.com/mail*
// @description Set Gmail font to classic view
// @version 1.0
// ==/UserScript== 


(function() {
  'use strict';
  function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
  }
  addGlobalStyle('* { font-family: sans-serif !important; font-size: 10pt !important; }');

  addGlobalStyle('.nn.aeN {width: 187px !important; min-width: 187px !important; max-width: 187px !important}');
  addGlobalStyle('.bq9 {position: absolute; top: 62% !important; left: 0; height: 369px; width: 187px !important; min-width: 187px !important; max-width: 187px !important}');
  addGlobalStyle('.brC-brG {height: 369px; width: 187px !important; min-width: 187px !important; max-width: 187px !important}');
  
  addGlobalStyle('.tfZEue {margin: 0 0 0 0 !important}'); 
  
  addGlobalStyle('.O4scvf {display: none !important}'); 
  
  
  addGlobalStyle('* { font-family: sans-serif !important; font-size: 10pt !important; }');
})();
