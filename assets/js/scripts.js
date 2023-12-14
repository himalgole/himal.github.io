function pageload(){
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        document.body.style.overflowY = "scroll";
    }, 700);
   
}
function show_mbl_nav()
{
    document.querySelector(".mbl-nav").classList.add("show-up-nav");
}
function hide_mbl_nav()
{
    document.querySelector(".mbl-nav").classList.remove("show-up-nav");
}