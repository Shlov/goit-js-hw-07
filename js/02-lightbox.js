import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createMarkupGallery() {
    galleryEl.innerHTML = galleryItems.map(({preview, original, description}) => `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`).join('');
}

createMarkupGallery();

const lightbox = new SimpleLightbox('.gallery a', {overlayOpacity: 0.75, captionsData: 'alt', captionDelay: 250});