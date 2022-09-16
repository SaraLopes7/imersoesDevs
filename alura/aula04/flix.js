var listaFilmes = [
    "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg",
    "https://br.web.img3.acsta.net/pictures/14/09/26/22/42/410634.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/8/8e/Divergent.png",
    "https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }