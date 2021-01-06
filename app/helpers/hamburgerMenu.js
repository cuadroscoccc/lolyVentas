export const hamburgerMenu = (btn, nav) =>{
    const d = document;

d.addEventListener('click', e =>{
    if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
     d.querySelector(nav).classList.toggle("is-hidden"); 
       d.querySelector(btn).classList.toggle("is-active"); 
    }
 
    if(e.target.matches(".header-nav a")){
        d.querySelector(nav).classList.add("is-hidden");
        d.querySelector(btn).classList.remove("is-active");
    }
})
}  