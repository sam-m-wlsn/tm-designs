'use strict';

(function(){
  document.querySelector('[data-splash-trigger]').addEventListener('click', function scrollToContent(event) {
    event.preventDefault();

    document.getElementById('header').scrollIntoView();
  });
})();