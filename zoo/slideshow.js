const slideshowContainer = document.getElementById('slideshow');

const images = [
    'product2.png',
    'product1.jpg',
    'product3.png',
];

let currentIndex = 0;

function showImage(index) {
    slideshowContainer.innerHTML = `<img src="${images[index]}" alt="Slide ${index + 1}">`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextSlide, 3000);