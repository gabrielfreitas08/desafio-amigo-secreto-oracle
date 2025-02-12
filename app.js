var adicionarNome = [];

var exibirNome = document.getElementById("listaAmigos");


function adicionarAmigo() {
    
    let pegarNome = document.getElementById("amigo").value; //pega o valor digitado no campo
    adicionarNome.push(pegarNome); //guarda os nome no array
    exibirNome.innerHTML = adicionarNome;
    //console.log(adicionarNome);
    
}