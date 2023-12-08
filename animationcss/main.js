const animatedBox = document.getElementById('animatedBox');

animatedBox.addEventListener('click', () => {
  animatedBox.classList.add('clicked');
  setTimeout(() => {
    animatedBox.classList.remove('clicked');
  }, 800);
});

animatedBox.style.animation = 'backgroundColorAnimation 3s ease-in-out';

function startCombinedAnimation() {
  animatedBox.style.animation = 'combinedAnimation 2s ease-in-out';
  setTimeout(() => {
    animatedBox.style.animation = 'backgroundColorAnimation 3s ease-in-out';
  }, 2000);
}