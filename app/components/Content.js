
export function Content(){
  const $contenido = document.createElement("section");
  $contenido.classList.add("contenido");
  const $boxtitle = document.createElement("div");
  $boxtitle.classList.add("box-title")
  const $h1= document.createElement("h1");
  $h1.classList.add("title")
  $h1.innerHTML = "Bienvenidos a Lolyventas"

  $boxtitle.appendChild($h1)
  $contenido.appendChild($boxtitle)
  return $contenido;
}