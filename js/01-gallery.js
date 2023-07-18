import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const ulEl = document.querySelector('.gallery');
// Створення масиву елементів
const markupLiEl = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
  )
  .join('');
//Додавання всіх елементів за один раз
ulEl.insertAdjacentHTML('beforeend', markupLiEl);
// Прослуховування подій на всьому списку
ulEl.addEventListener('click', handleClick);
// Функція обробки події клік по картинці
function handleClick(event) {
  event.preventDefault();
  //   console.log(event.target.dataset.source);
  // Виклик модального вікна бібліотекою basicLightbox
  const gallery = basicLightbox.create(
    `
  		<img width="1280px" src="${event.target.dataset.source}">
  	`,
    // Умова закриття модального вікна при натисканні ESC
    {
      onShow: gallery => {
        document.addEventListener('keydown', listener);
        function listener(event) {
          if (event.key === 'Escape') {
            gallery.close();
          }
        }
      },
    }
  );
  gallery.show();
}
