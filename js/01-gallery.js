import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createMurkupGallery() {
    const murkup = galleryItems.map(({preview, original, description}) => 
    `<div class="gallery__item">
    <a class="gallery__link" href="#">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </div>`
    ).join('');
    galleryEl.innerHTML = murkup;
}
createMurkupGallery();

galleryEl.addEventListener('click', createMurkupImgBLB);
let showImgBLB = '';

function createMurkupImgBLB(evt) {
    const murkupShowImg = `<img src="${evt.target.getAttribute('data-source')}" data-source="${evt.target.getAttribute('data-source')}" alt="${evt.target.getAttribute('alt')}">`;
    showImgBLB  = basicLightbox.create(`${murkupShowImg}`);
    showImgBLB.show();
    document.addEventListener('keydown', closeImgBLB);
}

function closeImgBLB(evt) {
    if (!showImgBLB.visible()) {
        document.removeEventListener('keydown', closeImgBLB);
    }
    if (evt.code !== 'Escape') {
        return
    }
    showImgBLB.close();
    document.removeEventListener('keydown', closeImgBLB);
}

