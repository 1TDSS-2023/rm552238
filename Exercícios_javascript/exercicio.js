document.getElementById("altera-background").addEventListener("click", function(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  });


function addpalavra(){
    var input = document.getElementById("palavra")
    var valor = input.value;

    if (valor.trim() !== ""){
        var lista = document.getElementById("listaPalavras")
        var novoItem = document.createElement("li")
        novoItem.textContent = valor
        lista.appendChild(novoItem)
        input.value = ""
    }
}

function trocarImagem() {
    var imagem = document.getElementById("imagem");

    if (imagem.src.endsWith("imagem1.jpeg")) {
        imagem.src = "./img/imagem2.jpg";
        imagem.alt = "Imagem 2";
    } else if (imagem.src.endsWith("imagem2.jpg")) {
        imagem.src = "./img/imagem3.jpg";
        imagem.alt = "Imagem 3";
    } else if (imagem.src.endsWith("imagem3.jpg")) {
        imagem.src = "./img/imagem1.jpeg";
        imagem.alt = "Imagem 1";
    }
}

function exibirMensagem() {
    var mensagemElemento = document.getElementById("mensagem");
    mensagemElemento.textContent = "Parabéns, você está conseguindo desennvolver botões utilizando Javascript!"
}

function ocultarElemento() {
    var elemento = document.getElementById("elemento");
    elemento.classList.add("oculto");
}