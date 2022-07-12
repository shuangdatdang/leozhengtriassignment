// Variables to store HTML Elements
let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let x3 = document.getElementById("x3");
let y1 = document.getElementById("y1");
let y2 = document.getElementById("y2");
let y3 = document.getElementById("y3");
let calcBtn = document.getElementById("calc-btn");
let outputSpan = document.getElementById("output");
let outputSpan1 = document.getElementById("output1");
let outputSpan2 = document.getElementById("output2");
let outputSpan3 = document.getElementById("output3");
// Add Event Listener to Calculate Button
calcBtn.addEventListener("click", dist);

function dist(x1, y1, x2, y2) {
    //input
    let rise = y2 - y1;
    let run = x2 - x1;
    return Math.sqrt(rise ** 2 + run ** 2);
}
calcBtn.addEventListener("click", perim);
function perim(){
    let xa = +x1.value;
    let xb = +x2.value;
    let xc = +x3.value;
    let ya = +y1.value;
    let yb = +y2.value;
    let yc = +y3.value;
    let dista = dist(xa, ya, xb, yb);
    let distb = dist(xb, yb, xc, yc);
    let distc = dist(xc, yc, xa, ya);
    let perimeter = dista + distb + distc;
    outputSpan.innerHTML = perimeter;
    outputSpan1.innerHTML = dista;
    outputSpan2.innerHTML = distc;
    outputSpan3.innerHTML = distb;
}