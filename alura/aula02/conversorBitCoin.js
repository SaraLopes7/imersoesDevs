function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorBit = parseFloat(valor);
  
    var valorReal = valorBit * 99.651;
  
    var valorConvertido = document.getElementById("valorConvertido");
    var resultado = "O resultado em real é R$ " + valorReal;
    valorConvertido.innerHTML = resultado;
  }