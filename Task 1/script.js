const menu = document.getElementById("menu");
const sidebar = document.querySelector(".sidebar");
const gone = document.querySelector(".gone");
const gone1 = document.querySelector(".gone1");
const gone2 = document.querySelector(".gone2");
const gone3 = document.querySelector(".gone3");
const gone4 = document.querySelector(".gone4");

menu.addEventListener("click", ()=>{
  sidebar.classList.toggle('collapsed')
  gone.classList.toggle('hide')
  gone1.classList.toggle('hide')
  gone2.classList.toggle('hide')
  gone3.classList.toggle('hide')
  gone4.classList.toggle('hide')
});

