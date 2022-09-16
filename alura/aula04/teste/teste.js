// aprendendo sobre arrays e exibindo o texto direto numa pagina em branco do html

var listaFilmes = ["Harry Potter", "Jogos Vorazes", "Divergente"];
// isso é uma variavel array

listaFilmes.push("Rick and Morty");
listaFilmes.push("Senhor dos Anéis");
// adcionando novos filmes na lista

console.log(listaFilmes.length);
// mostra o numero de elementos presentes na lista

/* document.write("<p>" + listaFilmes[0] + "</p>");
 ele ta chamando o elemento na primeira posição, que é o indice (zero) */

// valor inicial; condição; expressão final
for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
  /* document.write("<p>" + indice + "</p>");
 indice - mostra só as posições */
}
