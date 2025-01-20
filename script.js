let currentIndex = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.children.length;

function slideImages() {
    currentIndex++;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    images.style.transform = `translateX(-${currentIndex * 20}%)`;
}

setInterval(slideImages, 3000); // Change image every 3 seconds



let 