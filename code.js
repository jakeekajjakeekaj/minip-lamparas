// onclick="encender(0)" funcionando en html con inputs
let encendidas = [false, false, false];
let luces = document.querySelectorAll(".luz");
let textos = document.querySelectorAll(".texto");
let inputs = document.querySelectorAll("input");
// let lamp0 = document.getElementById(".lamp-0");

function encender(i) {
    if(encendidas[i] == false) {
        luces[i].className = "luz l" + i;
        textos[i].className = "texto t" + i;
        encendidas[i] = true;
    } else {
        luces[i].className = "luz";
        textos[i].className = "texto";
        encendidas[i] = false;
        // inputs[i].checked = false;
    }
}

// const encender = ()=> {
//     luces.classList.toggle ("l" + i);
//     textos.classList.toggle ("t" + i);
// }

// inputs.addEventListener("click", encender);