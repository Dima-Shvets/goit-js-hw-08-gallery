import galleryItems from '../data/gallery.js'
import refs from '../references/refs.js'

// let currentPictureNumber = 0; 

refs.sliderForwardBtn.addEventListener('click', onSliderForwardBtnClick);
refs.sliderBackwardBtn.addEventListener('click', onSliderBackwardBtnClick);

function findCurrentPictureNumber() {
    let currentPictureIndex = 0;
    galleryItems.forEach((item, index) => {
        if (refs.lightBoxImage.src === item.original) {
            currentPictureIndex = index;
        }
    })
    return currentPictureIndex;
}

function onSliderForwardBtnClick() {
    const nextPictureNumber = findCurrentPictureNumber() + 1;
    refs.lightBoxImage.src = galleryItems[nextPictureNumber].original;
}

function onSliderBackwardBtnClick() {
    const nextPictureNumber = findCurrentPictureNumber() - 1;
    refs.lightBoxImage.src = galleryItems[nextPictureNumber].original;
}
