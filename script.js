const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const items = document.querySelectorAll('.carousel-container img');

let currentItem = 0;

function reset() {
  container.style.transform = `translateX(-${currentItem * 33.33}%)`;
}

function slideLeft() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = items.length - 1;
  }
  reset();
}

function slideRight() {
  currentItem++;
  if (currentItem >= items.length) {
    currentItem = 0;
  }
  reset();
}

prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);