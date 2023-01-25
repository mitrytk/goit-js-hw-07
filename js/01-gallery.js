import { galleryItems } from './gallery-items.js';
// Change code below this line
const markup = [];
const galleryListEl = document.querySelector('.gallery');

galleryItems.map( item => isMakeItem(item));
galleryListEl.append(...markup);
galleryListEl.addEventListener("click", onImgClick);

function isMakeItem({preview, original, description}) {
    const divGalleryItemEl = document.createElement('div');
    divGalleryItemEl.classList.add('gallery__item');

    const aGalleryLinkEl = document.createElement('a');
    aGalleryLinkEl.classList.add('gallery__link');
    aGalleryLinkEl.href = original;
    divGalleryItemEl.append(aGalleryLinkEl);

    const imgGalleryEl = document.createElement('img');
    imgGalleryEl.classList.add('gallery__image');
    imgGalleryEl.src = preview;
    imgGalleryEl.dataset.source = original;
    imgGalleryEl.alt = description;
    aGalleryLinkEl.append(imgGalleryEl);

    markup.push(divGalleryItemEl);
}

function onImgClick(evt) {
    const isImgEl = evt.target.classList.contains("gallery__image");
    if (!isImgEl) {
        return;
    };
    evt.preventDefault();
    const imgSrc = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src= ${imgSrc} >
    `);
    instance.show();
}

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */