var adicionarNome = [];

var exibirNome = document.getElementById("listaAmigos");
var exibirResultado = document.getElementById("resultado");

function adicionarAmigo() {
    
    let pegarNome = document.getElementById("amigo").value; //pega o valor digitado no campo
    if (pegarNome == "") {
        alert("Por favor, insira um nome");
    } else {
        adicionarNome.push(pegarNome); //guarda os nome no array

        let itensLista = "";
        for (let i = 0; i < adicionarNome.length; i++) {
            itensLista += "<li>" + adicionarNome[i] + "</li>";
        }
        exibirNome.innerHTML = itensLista;
    }
    limparCampo();
}

function limparCampo() {
    
    pegarNome = document.getElementById("amigo");
    pegarNome.value = "";
}

function sortearAmigo() {

    if (adicionarNome == 0) {
        alert("Sem nomes para sorteio");
    } else{

        let quantidadeNome = adicionarNome.length;
        let indiceSorteio = parseInt(Math.random() * quantidadeNome);
        //console.log(indiceSorteio);
        
        let resultado = adicionarNome[indiceSorteio]
        //console.log(resultado);
    
        exibirResultado.innerHTML = resultado;
    }
    
}
