window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
const list = document.querySelector(".nav-all")
const show = document.querySelector(".rest")

function menu(){
  list.classList.toggle("visible")
  document.querySelector(".menu").style.display = "none"
  document.querySelector(".rest").style.display = "block"
  
}
function andy(){
  list.classList.toggle("visible")
    document.querySelector(".menu").style.display = "block"
  document.querySelector(".rest").style.display = "none"
}