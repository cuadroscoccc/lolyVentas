export function Router(){
const d = document,
$content= d.getElementById("content");
  const getHtml = (options) =>{
      let {url,success,error}= options;
     const xhr = new XMLHttpRequest();


  xhr.addEventListener("readystatechange", e =>{
    if(xhr.readyState !== 4) return;

    if(xhr.status>=200 && xhr.status<300){
    let html = xhr.responseText;
        success(html)
    }else{
    let message = xhr.statusText || "Ocurrio un errror!";
        error(`Error ${xhr.status}:${message}`);
    }
  })

  xhr.open("GET", url);
  xhr.setRequestHeader("Content-type","text/html; charset=utf-8");
  xhr.send();
}

d.addEventListener("DOMContentLoaded", e=>{
  getHTML({
    url:"components/secciones/home.html",
    success:(html)=>$content.innerHTML = html,
    error:(err)=>$main.innerHTML =`<h1>${err}</h1>`

  })
})


  }
