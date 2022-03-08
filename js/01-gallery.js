import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery');

console.log(imageContainer);


function renderGallery (arrayOfImages) {
    const markUp = arrayOfImages.map(
        ({preview, original, description}) => 
        `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
        ).join('');

    imageContainer.insertAdjacentHTML('beforeend', markUp);
};

renderGallery(galleryItems);


imageContainer.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();

    const imageAddress = evt.target.dataset.source;

    if (!evt.target.classList.contains('gallery__image')){
        return;
    }
    console.log(evt.target);

    const instance = basicLightbox.create(`
         <img src="${imageAddress}" width="800" height="600">
     `,
     {
        onShow: () => {
          window.addEventListener("keydown", onEscClick);
        },
      }
     );

     function onEscClick(evt) {
        if (evt.code === 'Escape') {
          instance.close();
          }  
      }

     instance.show();
}


