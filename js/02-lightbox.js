import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imageContainer = document.querySelector('.gallery');

console.log(imageContainer);


function renderGallery (arrayOfImages) {
    const markUp = arrayOfImages.map(
        ({preview, original, description}) => 
        `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        </div>`
        ).join('');

    imageContainer.insertAdjacentHTML('beforeend', markUp);
};

renderGallery(galleryItems);



let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });