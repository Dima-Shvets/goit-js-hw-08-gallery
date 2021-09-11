import galleryItems from '../data/gallery.js'
import refs from '../references/refs.js'


function makeGalleryMarkup(galleryItemsArray) {
  return galleryItemsArray.map(({preview, description, original}) => `
      <li class="gallery__item">
      <a
      class="gallery__link"
      href="${original}">
      <img
      class="gallery__image"
      src="${preview}" 
      alt="${description}"
      data-original="${original}"
      >
      </a>
      </li>
    `).join('')
}

const galleryMarkup = makeGalleryMarkup(galleryItems);

refs.gallery.innerHTML = galleryMarkup;

