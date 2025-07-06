const imgPerfil = document.querySelector('.foto-perfil img');
const som = document.getElementById('somPerfil');

imgPerfil.addEventListener('mouseenter', () => {
  som.currentTime = 0;
  som.play();
});