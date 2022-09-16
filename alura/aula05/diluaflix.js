/* function adicionarFilme() {
    var filme = document.getElementById("filme").value;
    if (filme.endsWith(".JPG")) {
// se "terminar com" 
      var elementoFilme = "<img src=" + filme + ">";
      var elementoListaFilmes = document.getElementById("listaFilmes");
      elementoListaFilmes.innerHTML += elementoFilme;
// elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme 
    } else {
      console.error("Endereço de filme inválido");
// error mostra em vermelhão no console
    }
    document.getElementById("filme").value = "";
// isso aqui limpa o campo do input dps q vc clica no botão 
  } 
*/

// Dividindo em duas funções

function adicionarFilme() {
    var filme = document.getElementById("filme").value;
    if (filme.endsWith(".JPG")) {
      listarFilmes (filme);
    } else {
      alert("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
  }
  
  function listarFilmes (filme) {
      var elementoFilme = "<img src=" + filme + ">";
      var elementoListaFilmes = document.getElementById("listaFilmes");
      elementoListaFilmes.innerHTML += elementoFilme;
  }

  /*
Desafios:
remover filme 
colocar o nome do filme tbm
guardar o filme numa lista tbm 

Projeto:
fazer funçoes de conversor, retornar valor, menu de opçoes. Tipo euro ou bitcoin ou real
*/
