var adicionarNome = [];

var exibirNome = document.getElementById("listaAmigos");
var exibirResultado = document.getElementById("resultado");

function adicionarAmigo() {
    
    let pegarNome = document.getElementById("amigo").value; //pega o valor digitado no campo
    if (pegarNome == "") {
        alert("Por favor, insira um nome");
    } else {
        adicionarNome.push(pegarNome); //guarda os nome no array
        exibirNome.innerHTML = adicionarNome;
    }
    limparCampo();
}

function limparCampo() {
    
    pegarNome = document.getElementById("amigo");
    pegarNome.value = "";
}

function sortearAmigo() {
    
    let quantidadeNome = adicionarNome.length;
    let indiceSorteio = parseInt(Math.random() * quantidadeNome + 1);
    //console.log(indiceSorteio);
    
    let resultado = adicionarNome[indiceSorteio]
    console.log(resultado);

    exibirResultado.innerHTML = resultado;
}
