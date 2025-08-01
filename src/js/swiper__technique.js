import Swiper from 'swiper'
import '../../node_modules/swiper/swiper-bundle.js'
import '../../node_modules/swiper/swiper-bundle.min.mjs'
import '../../node_modules/swiper/modules'
import { Pagination } from '../../node_modules/swiper/modules'

Swiper.use([Pagination])
// Создаем переменную для хранения экземпляра Swiper
let mySwiper = null

// Функция инициализации/уничтожения Swiper
function initSwiper() {
  const isMobile = window.innerWidth < 768
  const swiperEl = document.querySelector('.swiperTechnique')

  if (isMobile && !mySwiper) {
    // Инициализируем Swiper только для мобильных
    mySwiper = new Swiper('.swiperTechnique', {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 0,
      resistanceRatio: 0,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, // Опционально: динамические буллеты
        type: 'bullets', // Тип пагинации (кружки)
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      }
    })
  } else if (!isMobile && mySwiper) {
    // Уничтожаем Swiper на десктопе
    mySwiper.destroy(true, true)
    mySwiper = null

    // Возвращаем исходную разметку (опционально)
    swiperEl.innerHTML = `
     <div class="swiper-wrapper">
       ${swiperEl.querySelector('.swiper-wrapper').innerHTML}
     </div>
     <div class="swiper-pagination"></div>
   `
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initSwiper)

// Реагирование на изменение размера окна
window.addEventListener('resize', initSwiper)

const techniqueBtn = document.querySelector('.techniqueText')
const tmp2 = document.querySelector('.swiperTechnique')

techniqueBtn.onclick = () => {
  if (techniqueBtn.textContent === 'Показать все') {
    techniqueBtn.textContent = 'Скрыть'
    tmp2.style.height = 'max-content'
  } else {
    techniqueBtn.textContent = 'Показать все'
    tmp2.style.height = '190px'
  }
}
