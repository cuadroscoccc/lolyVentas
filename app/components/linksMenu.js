
export function MenuMovil(){
  const $contenido = document.createElement("nav");
  $contenido.classList.add("menu-movil");

  const $link = document.createElement("a");
  $link.classList.add("item-link");
  $link.setAttribute("href")
  const $h1= document.createElement("h1");
  $h1.classList.add("title")
  $h1.innerHTML = "Bienvenidos a Lolyventas"

  $boxtitle.appendChild($h1)
  $contenido.appendChild($boxtitle)
  return $contenido;
}

