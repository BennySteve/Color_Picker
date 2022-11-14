let color="#ffffff"
// creating div
const area = document.createElement("div");
area.classList.add("area");

// appending created div
let body = document.querySelector("body");
let p = document.querySelector("p");

body.insertBefore(area,p);

area.style.cssText="margin-top:1rem;font-size:2rem;color:white;"
area.style.background="#000"
//selecting buttons
let grey,green,blue,pink;

grey=document.querySelector("#grey");
green=document.querySelector("#green");
blue=document.querySelector("#blue");
pink=document.querySelector("#pink");
//event
let greyCl="#e0e0e0",greenCl="#6fcf97",blueCl="#56ccf2",pinkCl="#bb6bd9";
function clicked(name) { 
let body = document.querySelector("body");
body.style.background =name;}

function bgC(color){
area.textContent= "Background color :"+color;
}
//Listening

grey.addEventListener("click",function (e) { 
let body = document.querySelector("body");
body.style.background =greyCl;
bgC(greyCl);}
);

green.addEventListener("click",function (e) { 
let body = document.querySelector("body");
body.style.background =greenCl;
bgC(greenCl)}
);

blue.addEventListener("click",function (e) { 
let body = document.querySelector("body");
body.style.background =blueCl;
bgC(blueCl)}
);

pink.addEventListener("click",function (e) { 
let body = document.querySelector("body");
body.style.background =pinkCl;
bgC(pinkCl)}
);

area.textContent= "Background color :"+color;
