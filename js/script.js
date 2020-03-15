/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
    $("#header, .info").ripples({
        dropRadius: 15,
        perturbance: 0.05
    });
});

$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
      enabled: true  
  }
  // other options
});

