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

function dist()  {
    //input
    let xa = +x1.value;
    let xb = +x2.value;
    let xc = +x3.value;
    let ya = +y1.value;
    let yb = +y2.value;
    let yc = +y3.value;
    let dista = Math.sqrt((xb - xa) ** 2 + (yb - ya) ** 2);
    let distb = Math.sqrt((xc - xb) ** 2 + (yc - yb) ** 2);
    let distc = Math.sqrt((xa - xc) ** 2 + (ya - yc) ** 2);
    let perimeter = dista + distb +distc;
    outputSpan.innerHTML = perimeter
    outputSpan1.innerHTML = dista
    outputSpan2.innerHTML = distc
    outputSpan3.innerHTML = distb
}
