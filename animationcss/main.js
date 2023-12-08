const animatedBox = document.getElementById('animatedBox');

// Добавляем обработчик события клика для запуска анимации изменения размера
animatedBox.addEventListener('click', () => {
  animatedBox.classList.add('clicked');
  setTimeout(() => {
    animatedBox.classList.remove('clicked');
  }, 800);
});

// Запуск анимации цвета фона при загрузке страницы
animatedBox.style.animation = 'backgroundColorAnimation 3s ease-in-out';

// Функция для запуска комбинированной анимации
function startCombinedAnimation() {
  animatedBox.style.animation = 'combinedAnimation 2s ease-in-out';
  setTimeout(() => {
    animatedBox.style.animation = 'backgroundColorAnimation 3s ease-in-out';
  }, 2000);
}