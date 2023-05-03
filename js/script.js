"use strict"
//console.log("Olá mundo!");

//var nr1 = "10"
//var nr2 = "5"

//console.log(parseInt(nr1)+parseInt(nr2));

// let nome1 = "Dubas";
// // let nome2 = "Serbatinho";
// // const nome3 = "Julia";

// if(nome1 != ""){
//     let nome1 = "Julia";
// }

// console.log(nome1)

{/* <button value="click" id="meu-btn">Click</button> */}

const btn = document.getElementById("meu-btn"); 

//primeiro passo para a transformação do botão em rgb...

btn.addEventListener("click", function(){
    //console.log(this.textContent)
    // Função matemática Math
    // randon = Retorna um número aleatório entre 0 e 1. EX: 0,3151165184;
    //floor = arredonda o numero para baixo
    //ceil = Arredonda o numero para cima
    //round = Arrendonda o numero aleatorio
    
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    // this.setAttribute("style","background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
    

});

let r=0,g=0,b=0;


