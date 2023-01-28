const buttonOn = document.getElementById("more-btn");
const buttonOff = document.getElementById("back-btn");
const menu = document.getElementById("menu-mobile");

buttonOn.addEventListener("click",function(){
    if(menu.style.display == "none")menu.style.display = "initial";
    menu.classList.replace("menu-mobile--off" ,"menu-mobile--on");
})

buttonOff.addEventListener("click",function(){
    menu.classList.replace("menu-mobile--on" ,"menu-mobile--off");
})
window.onload = function(){
    menu.style.display = "none";
}