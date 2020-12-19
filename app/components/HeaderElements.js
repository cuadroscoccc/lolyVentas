export function HeaderElements(){
const $headerElements = document.createElement("div");
$headerElements.classList.add("headerElements")
 const $logo = document.createElement("img"); 
$logo.setAttribute("src", "app/assets/logo-large-white.svg")
$logo.classList.add("logo") 
const $icoMenu = document.createElement("div");
$icoMenu.classList.add("ico-menu");

$icoMenu.innerHTML =`<button  class="panel-btn hamburger hamburger--vortex" type="button">
    <span  class="hamburger-box">
      <span  class="hamburger-inner" ></span>
    </span>
  </button>`
$headerElements.appendChild($logo);   
$headerElements.appendChild($icoMenu);  
  return $headerElements; 


}