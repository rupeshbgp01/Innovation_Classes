//  -----------mini navbar for mobile version------

let navbar=document.querySelector(".navbar");
let navlist=document.querySelector(".nav-list");
let icon=document.querySelector(".icon");
icon.onclick=function(){
    navbar.classList.toggle("new-nav-resp");
    navlist.classList.toggle("vis-resp")
}

// -------------on click go to top------------------

let goTop=document.querySelector(".top")
goTop.onclick=function(){
    window.scrollTo({top:0,behavior:'smooth'});
}


// ----------------------slider------------------------------
let flag = 0;
function display(x) {
    flag=flag+x;
    myslider(flag);
    
}
myslider(flag);
function myslider(num) {
    let slides = document.getElementsByClassName("slides");
    if(num==slides.length)
    {
        num=0;
        flag=0;
    }
    if(num<0)
    {
        num=slides.length-1;
        flag=slides.length-1;
    }
    for(y of slides)
    {
        y.style.display="none";
    }
    slides[num].style.display="block";

}
