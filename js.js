let menu=document.querySelector('.menu');
let navul=document.querySelector('.navul');
let navbarheight=document.querySelector('.headerclass');

menu.addEventListener("click",()=>{
      navul.classList.toggle("shownavul");
      navbarheight.classList.toggle("heightheader");
})