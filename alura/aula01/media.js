var nome = "Luna Lovegood";
console.log("Bem vinda, " + nome);

var notaUm = 9.1;
var notaDois = 5.55;
var notaTres = 7.2;
var notaQuatro = 3.7;

var unidadeUm = (notaUm + notaDois);
var unidadeDois = (notaTres + notaQuatro);

var notaFinal = (unidadeUm + unidadeDois);
var media = notaFinal / 4;

if (media >= 7){ console.log("Você foi aprovada com a média: " + media.toFixed(1)) }
else { 
console.log("Você foi reprovada com a média: " + media.toFixed(1)) }


/* var notaFixada = notaFinal.toFixed(2)
// para determinar q o float vai aparecer apenas com duas casas decimais.
console.log (notaFixada); */

/* 
desafio: ver se foi aprovado e dividir em dois as quatro, estilizar o fundo, escrever na pagina ao inves do console, conversor de temperatura, botar para aparecer tudo no paragrafo final. 
*/