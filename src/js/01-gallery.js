import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

refs.galleryEl.addEventListener('click', onGalleryClick);

refs.galleryEl.insertAdjacentHTML(
  'beforeend',
  createGalleryItems(galleryItems)
);

const lazyImages = document.querySelectorAll('img[loading]');

lazyImages.forEach(e => {
  e.addEventListener('load', onImageLoading, { once: true });
});

console.log(lazyImages);
const lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

function onImageLoading(event) {
  event.target.classList.add('appear');
}

function onGalleryClick(event) {
  event.preventDefault();
  const targetClassName = event.target.classList.value;

  if (targetClassName !== 'gallery__image') {
    console.log('???');
    return;
  }
}

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
