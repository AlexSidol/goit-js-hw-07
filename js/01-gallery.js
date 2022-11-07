import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardsMarkup);


console.log(galleryItems);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `;
    }).join('');
    
}

galleryRef.addEventListener('click', evt => {
evt.preventDefault();
if (evt.target.nodeName !== 'IMG') {
    return;
}
    const onImage = evt.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
    <img src="${onImage}" width="800" height="600">
`)

    instance.show()
    
    galleryRef.addEventListener('keydown', evt => {
        if (evt.key === 'Escape') {
            instance.close()
        }
    })
 })






// console.log(galleryItems);



// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті source на елементі <img>, і вказуватися в href посилання. Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>