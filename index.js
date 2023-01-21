let slide = document.querySelectorAll('.slide');
var current = 0;



function cls(){
    for(let i = 0; i < slide.length; i++){
          slide[i].style.display = 'none';
    }
}
function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;
    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;
    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.2;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}
function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;
    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;
    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);
}
function start(){
    cls();
    slide[current].style.display = 'block';
}
start();
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.09)";
        document.getElementById("navbar").style.backdropFilter = "blur(6px)";
        document.getElementById("navbar").style.borderBottom= "1px solid rgba(255, 255, 255, 0.16)";
    } else {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar").style.backdropFilter = "none";
        document.getElementById("navbar").style.borderBottom = "none";
    }
}        
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

