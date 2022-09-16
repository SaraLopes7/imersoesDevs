function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolar = parseFloat(valor);
  
    var valorReal = valorDolar * 5.25;
  
    var valorConvertido = document.getElementById("valorConvertido");
    // é uma div vazia q já veio pronta, ai vai aparecer dentro dessa div
    var resultado = "O resultado em real é R$ " + valorReal;
    valorConvertido.innerHTML = resultado;
    // dentro do html, para aparecer dentro do html
  }
  