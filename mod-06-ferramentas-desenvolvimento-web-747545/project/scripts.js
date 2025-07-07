// Seleciona minha imagem do perfil e adiciona o som quando o mouse passa por cima
const imgPerfil = document.querySelector('.foto-perfil img');
const som = document.getElementById('somPerfil');

imgPerfil.addEventListener('mouseenter', () => {
  som.currentTime = 0;
  som.play();
});
