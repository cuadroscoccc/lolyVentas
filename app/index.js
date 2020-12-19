import {App} from './App.js';
import {hamburgerMenu} from './helpers/hamburgerMenu.js';
document.addEventListener("DOMContentLoaded", App);

hamburgerMenu(".panel-btn",".panel", ".menu a");

