import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  listElement: document.querySelector('.gallery'),
};

console.log(refs.listElement);

function galleryMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  
      `;
    })
    .join('');
  return markup;
}

function renderGallery(galleryItems) {
  const markup = galleryMarkup(galleryItems);
  refs.listElement.insertAdjacentHTML('beforeend', markup);
}
renderGallery(galleryItems);

refs.listElement.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageUrlModal = event.target.dataset.source;
  const instance = basicLightbox.create(`
        <img src='${imageUrlModal}'>
    `);

  instance.show();

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
});
