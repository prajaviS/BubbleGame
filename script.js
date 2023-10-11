//bubble
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 126; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`
    }
    document.querySelector("#bottomdown").innerHTML = clutter;
}
makeBubble();
//timer
var timer= 60;
var timerint="";
function runtimer() {
    timerint= setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#time").textContent=timer;
        } 
        else{
            clearInterval(timerint);
            document.querySelector("#bottomdown").innerHTML="<h1>GAME OVER!</h1>"
        } 
    }, 1000);
}
runtimer();
//hit
var hitrn=0;
function HitValue(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;

}
HitValue();

var score=0;
function scoreincrease(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
//event buffering
//event listener add hota hai agar click hua aur uske saath hai to it will run
//else it will search in its parent if found then run else it will search in its parent's parent
const pbtm=document.querySelector("#bottomdown");
pbtm.addEventListener("click", function(x) {
    var getnum=Number(x.target.textContent);
    if(getnum===hitrn){
        scoreincrease();
        makeBubble();
        HitValue();
    }
    else{
        clearInterval(timerint);
        document.querySelector("#bottomdown").innerHTML="<h1>YOU LOOSE!</h1>"
            
    }
});
