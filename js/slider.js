import galleryItems from '../data/gallery.js'
import refs from '../references/refs.js'

// let currentPictureNumber = 0; 

refs.sliderForwardBtn.addEventListener('click', onSliderForwardBtnClick);
refs.sliderBackwardBtn.addEventListener('click', onSliderBackwardBtnClick);

function onSliderForwardBtnClick() {
    const currentPictureNumber = findCurrentPictureNumber()
    if (currentPictureNumber === galleryItems.length - 1) {
        const nextPictureNumber = 0;
        updateLightboxImageSrc(nextPictureNumber);
        return
    }

    const nextPictureNumber = currentPictureNumber + 1;
    updateLightboxImageSrc(nextPictureNumber);
}

function onSliderBackwardBtnClick() {
    const currentPictureNumber = findCurrentPictureNumber()
    if (currentPictureNumber === 0) {
        const nextPictureNumber = galleryItems.length - 1;
        updateLightboxImageSrc(nextPictureNumber)
        return
    }
    
    const nextPictureNumber = currentPictureNumber - 1;
    updateLightboxImageSrc(nextPictureNumber)
}

function findCurrentPictureNumber() {
    let currentPictureIndex = 0;
    galleryItems.forEach((item, index) => {
        if (refs.lightBoxImage.src === item.original) {
            currentPictureIndex = index;
        }
    })
    return currentPictureIndex;
}

function updateLightboxImageSrc(nextPictureNumber) {
    refs.lightBoxImage.src = galleryItems[nextPictureNumber].original;
}