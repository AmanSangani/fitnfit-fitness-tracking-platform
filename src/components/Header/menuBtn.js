let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")



menu.onclick = () =>{
    menu.classList.toggle("faXmark")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("faXmark")
    navbar.classList.remove("active")
}