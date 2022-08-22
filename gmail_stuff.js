// ==UserScript==
// @name Gmail Font Type and Size
// @match https://mail.google.com/mail*
// @match https://tasks.google.com/embed/*
// @description Set Gmail font to classic view
// @version 1.0
// ==/UserScript== 


(function() {
  'use strict';
  function addGlobalStyle(css, target) {
    console.log('adding style, length: ', css.length);
    var head, style;
    head = target.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = target.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    var ret = head.appendChild(style);
  }

  function findIframe() {
    console.log(window.top.document.querySelector('iframe[src^="https://tasks"]'));
    window.top.document.querySelector('iframe[src^="https://tasks"]').onload = function(){
      console.log(document);
    };
    //addGlobalStyle(document.querySelector('.brC-brG-avO')[0].document);
  }

  var css = [
    'body {',
      'display: block !important',
    '}',
    '* {',
    'font-family: sans-serif !important;',
    'font-size: 10pt !important;',
    '}',
    '.AOq4tb {',
    'height: 48px;',
    '}',
    '.B9yICe  {',
    'height: 48px;',
    '}',
    '.nn.aeN {',
    'width: 187px !important;',
    'min-width: 187px !important;',
    'max-width: 187px !important;',
    '}',
    '.PYj7ue {',
    'width: 187px;',
    '}',
    '.JbNP1e {',
    'display: none;',
    '}',
    '.mUbCce {',
    'width: 24px;',
    'height: 24px;',
    '}',
    '.V0C2Oc  {',
    'width: 24px;',
    'height: 24px;',
    'margin: 0;',
    '}',
    '.CTxcDf {',
    'width: 187px;',
    '}',
    '.QMEh5b {',
    'width: 187px;',
    '}',
//     '.bq9 {',
//     'position: absolute;',
//     'top: 62% !important; ',
//     'left: 0;',
//     'height: 369px;',
//     'width: 187px !important;',
//     'min-width: 187px !important;',
//     'max-width: 187px !important;',
//     '}',
    '.brC-brG {',
    'width: 250px !important;',
    'min-width: 250px !important;',
    'max-width: 250px !important;',
     '}',
    '.bq9 {',
    'top: 64px !important',
    '}',
    '.dw .nH .nH .no .nH.nn {',
    'width: 272px !important;',
    '}',
    '.tfZEue {',
    'margin: 0 0 0 0 !important;',
    '}',
    '.O4scvf {',
    'display: none !important;',
    '}',

  ].join('\n');

  addGlobalStyle(css, window.document);

  // var observer = new window.top.MutationObserver(function(records, observer){
  //   records
  //       .filter(function(record){
  //         console.log(record.target.getAttribute('src'));
  //         return record.target.classList.includes('brC-brG-avO');
  //       })
  //       .forEach(function(record){
  //         console.log(record);
  //     });
  // });
  //
  // observer.observe(window.top.document.body, {childList: true, subtree: true, attributes: true});
})();
