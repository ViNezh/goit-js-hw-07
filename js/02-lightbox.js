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
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
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
  }
// Виклик модального вікна бібліотекою SimpleLightbox
let gallery = new SimpleLightbox('.gallery__link',
    {
    captions: true,
    captionSelector:'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    navText:    ['&lsaquo;','&rsaquo;'],
    }
  );