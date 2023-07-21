function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const image = document.getElementById("fotoGui");

  if (html.classList.contains("light")) {
    image.setAttribute('src', './assets/Guilherme Cruz - Sun.svg');
  } else {
    image.setAttribute('src', './assets/Guilherme Cruz.svg');
  }

  //pegar tag img

  //substituir imagem
}
