import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = [];
const galleryListEl = document.querySelector('.gallery');

galleryItems.map( item => isMakeItem(item));
galleryListEl.append(...markup);
const lightbox = new SimpleLightbox('.gallery li a', 
    {fadeSpeed: 250,
    captionsData: "alt",});

function isMakeItem({preview, original, description}) {
    const liGalleryItemEl = document.createElement('li');
    liGalleryItemEl.classList.add('gallery__item');

    const aGalleryLinkEl = document.createElement('a');
    aGalleryLinkEl.classList.add('gallery__link');
    aGalleryLinkEl.href = original;
    liGalleryItemEl.append(aGalleryLinkEl);

    const imgGalleryEl = document.createElement('img');
    imgGalleryEl.classList.add('gallery__image');
    imgGalleryEl.src = preview;
    imgGalleryEl.alt = description;
    aGalleryLinkEl.append(imgGalleryEl);

    markup.push(liGalleryItemEl);
}
console.log(galleryItems);
