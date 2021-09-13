import galleryItems from '../app.js'

const gallery = document.querySelector('.js-gallery');

function createItems(array) {
    return array.map((element) => {
        const { preview, original, description } = element
        return `<li class="gallery__item">
                    <a
                        class="gallery__link"
                        href=${original}
                    >
                        <img
                        class="gallery__image"
                        src=${preview}
                        data-source="${original}
                        alt=${description}
                        />
                    </a>
                </li>`
    }).join('')
};

const galleryMarkup = createItems(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);