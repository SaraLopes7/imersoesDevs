var numeroSecreto = parseInt(Math.random() * 11);
// o numero secreto vai ser gerado pelo pc, mas o math.random só gera números de 0 a 1. Aí multiplicou ele por 11 para aparecer de 0 a 10 e transformou ele em int, pois é por default um float, aí fica cheio de nmr lero lero

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  // transformando o valor q eu quero pegar para int e o .value é p pegar só o número que vai entrar
  var resultado = document.getElementById("resultado");
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns! Você acertou o número secreto";
  } else if (chute > 10) {
    resultado.innerHTML = "Você deve digitar um número menor que dez(10)";
  } else if (chute < 0) {
    resultado.innerHTML = "Você deve digitar um número maior que zero(0)";
  } else {
    resultado.innerHTML = "Poxa! Não foi dessa vez. Tente novamente!";
  }
  
}
