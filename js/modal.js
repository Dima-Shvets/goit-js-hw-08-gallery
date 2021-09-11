import refs from '../references/refs.js'

refs.gallery.addEventListener('click', onGalleryItemClick);
refs.closeBtn.addEventListener('click', onCloseBtnClick);
refs.lightBoxOverlay.addEventListener('click', onLightBoxOverlayClick);
window.addEventListener('keydown', onEscBtnPress);

function onGalleryItemClick(e) {
    if (e.target.nodeName === 'LI' || e.target.nodeName === 'A' || e.target.nodeName === 'IMG') {
        e.preventDefault();
        window.addEventListener('keydown', onEscBtnPress);
        refs.lightBox.classList.add("is-open");
        refs.lightBoxImage.src = e.target.dataset.original;
        refs.lightBoxImage.alt = e.target.alt;
    }
}

function onCloseModal() {
    window.removeEventListener('keydown', onEscBtnPress)
    refs.lightBox.classList.remove("is-open");
    refs.lightBoxImage.src = '';
}

function onCloseBtnClick() {
    window.addEventListener('keydown', onEscBtnPress);
    onCloseModal();
}

function onLightBoxOverlayClick(e) {
    if (e.currentTarget === e.target) {
        onCloseModal();
    }
}

function onEscBtnPress(e) {
    if (e.code === 'Escape') {
        onCloseModal();
    }
} 



