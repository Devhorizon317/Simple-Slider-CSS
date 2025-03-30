let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

const updateCarousel = () => {
  const offset = -currentIndex * 100;
  document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
};

document.querySelector('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    alert(`You clicked on Image ${index + 1}`);
  });
});
