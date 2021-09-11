import gallery from '../data/gallery.js'
import refs from '../references/refs.js'

refs.gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'A' || e.target.nodeName === 'IMG') {
        e.preventDefault();
        refs.closeBtn.addEventListener('click', onCloseBtnClick)
        refs.lightBox.classList.add("is-open");
        refs.lightBoxImage.src = e.target.dataset.original;
        refs.lightBoxImage.alt = e.target.alt;
    }
}

function onCloseBtnClick() {
    refs.lightBox.classList.remove("is-open");
    refs.lightBoxImage.src = '';
    refs.closeBtn.removeEventListener(onCloseBtnClick)
}

