// Получаем все элементы с классом item-slider
const itemSliders = document.querySelectorAll('.item-slider');

// Проходим по каждому слайдеру
itemSliders.forEach(slider => {
  const horizontScroll = slider.querySelector('.slider');
  const leftBtn = slider.querySelector('#leftBtn');
  const rightBtn = slider.querySelector('#rightBtn');

  // Функция для определения ширины экрана и изменения значения скролла
  function getScrollValue() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1200) {
      return 1152; // Для экрана более 1200px
    } else if (screenWidth >= 768 && screenWidth <= 1200) {
      return 677; // Для экрана между 768px и 1200px
    } else if (screenWidth > 320 && screenWidth < 767) {
      return 345; // Для экрана между 320px и 767px
    } else {
      return 0; // Для других экранов
    }
  }

  // Скролл вправо
  rightBtn.addEventListener('click', () => {
    let scrollValue = getScrollValue();
    if (scrollValue > 0) {
      horizontScroll.style.scrollBehavior = 'smooth';
      horizontScroll.scrollLeft += scrollValue;
    }
  });

  // Скролл влево
  leftBtn.addEventListener('click', () => {
    let scrollValue = getScrollValue();
    if (scrollValue > 0) {
      horizontScroll.style.scrollBehavior = 'smooth';
      horizontScroll.scrollLeft -= scrollValue;
    }
  });

  // Обновляем значение скролла при изменении ширины окна
  window.addEventListener('resize', () => {
    getScrollValue();
  });
});
