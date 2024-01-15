let body = document.querySelector("body"); 
body.addEventListener("keydown", (e) =>{
// console.log(e);

let btn = document.getElementById("btn");
btn.innerText = `You Pressed ${e.key}`;



div1.innerText = ` ${e.keyCode}`;
div1.classList.add("btn1");
body.appendChild(div1);

});
let div1 = document.createElement("div");