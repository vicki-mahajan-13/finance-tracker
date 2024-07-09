// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs";
import Turbolinks from "turbolinks";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

// Importing jQuery and Bootstrap
import $ from 'jquery';
import 'bootstrap';

// Make jQuery available globally
window.$ = $;
window.jQuery = $;

Rails.start();
Turbolinks.start();
ActiveStorage.start();

document.addEventListener('turbolinks:load', () => {
  console.log('Turbolinks loaded');
  console.log('jQuery version:', $.fn.jquery);
  console.log('Bootstrap version:', $.fn.tooltip.Constructor.VERSION);

  // Initialize Bootstrap dropdowns
  $('.dropdown-toggle').dropdown();
});
