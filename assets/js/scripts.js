var h = window.innerHeight;
var w = window.innerWidth;

function pageload(){
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        document.body.style.overflowY = "scroll";
        document.querySelector(".header").classList.add("header-animated");
        document.querySelector(".home .p1").classList.add("p1-animate");
        document.querySelector(".home h2").classList.add("h2-animate");
        document.querySelector(".home h3").classList.add("h3-animate");

        var list = document.querySelectorAll(".bio p");
        list.forEach(item =>{
            item.classList.add("p-animate")
        })
    }, 200);
   
}
function show_mbl_nav()
{
    document.querySelector(".mbl-nav").classList.add("show-up-nav");
}
function hide_mbl_nav()
{
    document.querySelector(".mbl-nav").classList.remove("show-up-nav");
}


var swap_right = document.querySelectorAll(".swap-right");
var swap_left = document.querySelectorAll(".swap-left");
window.addEventListener("scroll",()=>{
    swap_right.forEach(item =>{
        if(item.getBoundingClientRect().top < 0.8*h)
        item.classList.add("swap-right-activate")
    })
    swap_left.forEach(item =>{
        if(item.getBoundingClientRect().top < 0.8*h)
        item.classList.add("swap-left-activate")
    })
})
