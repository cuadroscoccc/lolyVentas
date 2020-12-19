
import {HeaderElements} from './HeaderElements.js';


export function Header(){
  const $header = document.createElement("header");
  $header.classList.add("header");
  $header.setAttribute("data-include", "./components/Header.js")

  $header.appendChild(HeaderElements());

  return $header;
}