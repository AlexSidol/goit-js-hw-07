import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardsMarkup);



console.log(galleryItems);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}">
</a>
</li>
        `;
    }).join('');
    
}

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: 250 });



// title="${description}"


console.log(galleryItems);
