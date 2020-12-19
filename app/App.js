import {Header} from './components/Header.js';
import {Content} from './components/Content.js';
import {Router} from './components/Router.js';
export function App() {
  const $root = document.getElementById("root");
  const $content = document.getElementById("content") 
  $root.appendChild(Header());
  $content.appendChild(Content());


  Router();

}