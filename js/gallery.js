import galleryItems from '../app.js'

const gallery = document.querySelector(`.js-gallery`);
const modal = document.querySelector(`.js-lightbox`);
const lightboxImage = document.querySelector(`.lightbox__image`);
const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');

const galleryMarkup = createItems(galleryItems);

gallery.insertAdjacentHTML(`afterbegin`, galleryMarkup);

gallery.addEventListener(`click`, onGalleryClick);

modalCloseBtn.addEventListener(`click`, modalClose);

function createItems (array) {
 return array.map ( ({preview, original, description}) => {
   return `
    <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
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
 .join(``);
}

function onGalleryClick (event) {  
  if(!event.target.classList.contains(`gallery__image`)) {
    return;
  }

  event.preventDefault();

  modal.classList.toggle(`is-open`);
  lightboxImage.src = event.target.dataset.source;
  lightboxImage.alt = event.target.alt;
}

function modalClose(event) {
  modal.classList.toggle(`is-open`);
  lightboxImage.src = "";
  lightboxImage.alt = "";
}