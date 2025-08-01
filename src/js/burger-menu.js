// 1. Меню
const button1 = document.getElementById('header__icons')
const element1 = document.getElementById('aside')
const element2 = document.getElementById('aside__bg')
const element3 = document.getElementById('body')
const button2 = document.getElementById('myButton')

// 2. Добавляем обработчик клика
button1.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  element1.classList.toggle('open')
  element2.classList.toggle('onBackground')
  element3.classList.toggle('onFixed')
})

// 2. Добавляем обработчик клика
button2.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  element1.classList.toggle('open')
  element2.classList.toggle('onBackground')
  element3.classList.toggle('onFixed')
})

// 1. FEEDBACK
const buttonFeed1 = document.getElementById('btn__feedback')
const elementFeed1 = document.getElementById('feadBack__container')
const elementFeed2 = document.getElementById('call__bg')
const buttonFeed2 = document.getElementById('header__burger-menuClose')
const buttonFeed3 = document.getElementById('burger-menu__call1')

// 2. Добавляем обработчик клика
buttonFeed1.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  elementFeed1.classList.toggle('call')
  elementFeed2.classList.toggle('onBackground')
})

// 2. Добавляем обработчик клика
buttonFeed2.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  elementFeed1.classList.toggle('call')
  elementFeed2.classList.toggle('onBackground')
})
// 2. Добавляем обработчик клика
buttonFeed3.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  elementFeed1.classList.toggle('call')
  elementFeed2.classList.toggle('onBackground')
})

// 1. CONNACTION
const buttonCall1 = document.getElementById('btn__call')
const elementCall1 = document.getElementById('feadBack__containerCall')
const elementCall2 = document.getElementById('call__bg')
const buttonCall2 = document.getElementById('header__burger-menuCls')
const buttonCall3 = document.getElementById('burger-menu__call2')

// 2. Добавляем обработчик клика
buttonCall1.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  elementCall1.classList.toggle('connection')
  elementCall2.classList.toggle('onBackground')
})

// 2. Добавляем обработчик клика
buttonCall2.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  elementCall1.classList.toggle('connection')
  elementCall2.classList.toggle('onBackground')
})
// 2. Добавляем обработчик клика
buttonCall3.addEventListener('click', () => {
  // 3. Переключаем класс у элемента
  elementCall1.classList.toggle('connection')
  elementCall2.classList.toggle('onBackground')
})

document.getElementById('aside__bg').addEventListener('click', () => {
  element1.classList.remove('open') // Удаляем класс
  element2.classList.remove('onBackground') // Удаляем класс
  element3.classList.toggle('onFixed')
})

document.getElementById('call__bg').addEventListener('click', () => {
  elementFeed1.classList.remove('call') // Удаляем класс
  elementFeed2.classList.remove('onBackground') // Удаляем класс
})

document.getElementById('call__bg').addEventListener('click', () => {
  elementCall1.classList.remove('connection') // Удаляем класс
  elementCall2.classList.remove('onBackground') // Удаляем класс
})
