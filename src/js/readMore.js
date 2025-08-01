const readMore = document.querySelector('.read-more__text')
const readMore__text = document.querySelector('.expert')

readMore.onclick = () => {
  if (readMore.textContent === 'Читать далее') {
    readMore.textContent = 'Скрыть'
    readMore__text.style.height = 'max-content'
  } else {
    if (window.innerWidth < 768) {
    readMore.textContent = 'Читать далее'
    readMore__text.style.height = '90px'
    }
    else {
    readMore.textContent = 'Читать далее'
    readMore__text.style.height = '160px'
    }
  }
}