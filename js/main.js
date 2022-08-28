// get slider items, Array.from()[ES6 feature]
var sliderImages = Array.from(
  document.querySelectorAll(`.slider-container img`)
);
console.table(sliderImages);
