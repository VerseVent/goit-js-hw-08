import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

refs.galleryEl.insertAdjacentHTML(
  'beforeend',
  createGalleryItems(galleryItems)
);

const lazyImages = document.querySelectorAll('img[loading]');

lazyImages.forEach(e => {
  e.addEventListener('load', onImageLoading, { once: true });
});

//Навешивание модалки лайтбокса на все изображения в галереи(также обработка кликов)

const lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

function onImageLoading(event) {
  event.target.classList.add('appear');
}

//Создание всех элементов галереи

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img loading = "lazy" class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        `;
    })
    .join(' ');
}
