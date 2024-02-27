
let slideIndex = 1;
showSlide(slideIndex);

// automatic scrolling
let intervalId = setInterval(next, 3000); 

// Stop automatic scrolling on hover
document.querySelector('.col-m').addEventListener('mouseover', function() {
    clearInterval(intervalId);
});

// Resume automatic scrolling on mouseout
document.querySelector('.col-m').addEventListener('mouseout', function() {
    intervalId = setInterval(next, 3000);
});



function next() {
  showSlide(slideIndex += 1);
}

function prev() {
  showSlide(slideIndex -= 1);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
  




// carousel 2

let slideInd = 0;
showSlider(slideInd);

function to() {
  showSlider(slideInd++);
}

function fro() {
  showSlider(slideInd--);
}

function showSlider(n) {
  let slider = document.getElementsByClassName('slider');
  if (n > slider.length) {
    slideInd = 1;
  }
  if (n < 1) {
    slideInd = slider.length;
  }
  for (let i = 0; i < slider.length; i++ ) {
    slider[i].style.display = "none";
  }
  slider[slideInd - 1].style.display = "block";
}


// second carousel 

const carousel = document.querySelector('.products');
const slidee = document.querySelectorAll('.product');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

// offset for the carousel
let carouselOffset = 0;
for (let a = 0; a < slidee.length; a+=4) {
  if (a == currentSlide) {
    carouselOffset = slidee[a].offsetLeft - carousel.offsetWidth / 2 + slidee[a].offsetWidth / 2;
    break;
  }
}

// scroll position of carousel
carousel.scrollLeft = carouselOffset;

function nextSlide() {
  slidee[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 4) % slidee.length;
  slidee[currentSlide].classList.add('active');
  carouselOffset = slidee[currentSlide].offsetLeft - carousel.offsetWidth / 2 + slidee[currentSlide].offsetWidth / 2;
  carousel.scroll({ left: carouselOffset, behavior: 'smooth' });
}

function prevSlide() {
  slidee[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 4 + slidee.length) % slidee.length;
  slidee[currentSlide].classList.add('active');
  carouselOffset = slidee[currentSlide].offsetLeft - carousel.offsetWidth / 2 + slidee[currentSlide].offsetWidth / 2;
  carousel.scroll({ left: carouselOffset, behavior: 'smooth' });
}


document.querySelector('.arrow-left').addEventListener('click', () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

document.querySelector('.arrow-right').addEventListener('click', () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

// Recalculate the offset of the carousel when the window is resized
window.addEventListener('resize', () => {
  carouselOffset = slidee[currentSlide].offsetLeft - carousel.offsetWidth / 2 + slidee[currentSlide].offsetWidth / 2;
  carousel.scrollLeft = carouselOffset;
});






// third Carousel

const carouselb = document.querySelector('.products-2');
const slideb = document.querySelectorAll('.product-2');
let nowSlide = 0;
let slideRange = setInterval(bada, 5000);

// Calculate the correct offset for the carousel
let carouselShift = 0;
for (let b = 0; b < slideb.length; b += 4) {
  if (a == nowSlide) {
    carouselShift = slideb[b].offsetLeft - carousel.offsetWidth / 2 + slideb[b].offsetWidth / 2;
    break;
  }
}

// Set the initial scroll position of the carousel
carouselb.scrollLeft = carouselShift;

function bada() {
  slideb[nowSlide].classList.remove('active');
  nowSlide = (nowSlide += 4) % slideb.length;
  slideb[nowSlide].classList.add('active');
  carouselShift = slideb[nowSlide].offsetLeft - carouselb.offsetWidth / 2 + slideb[nowSlide].offsetWidth / 2;
  carouselb.scroll({ left: carouselShift, behavior: 'smooth' });
}

function qabla() {
  slideb[nowSlide].classList.remove('active');
  nowSlide = (nowSlide - 4 + slideb.length) % slideb.length;
  slideb[nowSlide].classList.add('active');
  carouselShift = slideb[nowSlide].offsetLeft - carouselb.offsetWidth / 2 + slideb[nowSlide].offsetWidth / 2;
  carouselb.scroll({ left: carouselShift, behavior: 'smooth' });
}

// Add event listeners to the previous and next buttons

document.querySelector('.back').addEventListener('click', () => {
  clearInterval(slideRange);
  qabla();
  slideRange = setInterval(qabla, 5000);
});

document.querySelector('.forward').addEventListener('click', () => {
  clearInterval(slideRange);
  bada();
  slideRange = setInterval(bada, 5000);
});

// Recalculate the offset of the carousel when the window is resized 
window.addEventListener('resize', () => {
  carouselShift = slideb[nowSlide].offsetLeft - carouselb.offsetWidth / 2 + slideb[nowSlide].offsetWidth / 2;
  carouselb.scrollLeft = carouselShift;
});







// another line


  



