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

//<h2 class="tit-sec">Seção de fotos</h2>
const h2Element = document.querySelector(".tit-sec")

//queryselectorall

//Declaração de um array e seu métodos
let frutas = ["banana","maça","laranja","morango","uva","amora","cereja","abacaxi"]

console.log(frutas)
console.log(frutas[7])

console.log(`O tamanho do Array é : ${frutas.length}`);

//Inserindo um item ao final do array com o metodo push(nomeIten);

frutas.push("pêssego");
console.log(frutas)

//Inserindo um item ao final do array com o metodo unshift(nomeIten);
frutas.unshift("kiwi");
console.log(frutas)

//Removendo um item ao final do array com o metodo pop(nomeIten);
frutas.pop();
console.log(frutas);

//Removendo um item ao inicio do array com o metodo shift(nomeIten);
frutas.shift();
console.log(frutas);

//Localizando um iten no no array com o meétodo indexOF(nomeIten);
//Obs: o método indexOf(nomeIten) retorna o indice do iten.
// let indice = frutas.indexOf("uva");
// console.log(`Indece do iten buscado ${indice}`)
// console.log(`Elemento buscado:  ${frutas[indice]}`)

//Removendo im item do array com o método splice(indíce do item, qtd de vezes que o indice será removido)
// OBS: Utilize o método indexOf(nomeItem) para descobrir o indice do item
// let indice = frutas.indexOf("amora")
// console.log(`Elemento no índice antes da remoção: ${frutas[indice]}`)
// frutas.splice(indice,1)
// console.log(frutas)
// console.log(`Elemento no índice antes da remoção: ${frutas[indice]}`)

// //Impressão do aray em tabela
// console.table(frutas)

// frutas.forEach( (fruta)=>{
//     console.log("Fruta da vez: " + fruta)
// } )

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("ARRAY 1 : " + nr1);
// console.log("ARRAY 2 : " + nr2);
// //Concatenando arrays em um novo array com operador SPREAD( ... );
// let nr3 = [...nr1,...nr2];
// console.log("NOVO ARRAY : " + nr3);
// //Imprimindo o novo array com forEach
// nr3.forEach((nr)=>{
//     // nr.forEach((n)=>{
//         console.log("ITENS DO NOVO ARRAY : " + nr);
//     // });
// });

