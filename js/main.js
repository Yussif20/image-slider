///////////////     Functions ///////////////

const nextSilde = () => {
  console.log(`rawan`);
};

const prevSilde = () => {
  console.log(`waten`);
};

/////////////////////////////////////////  Selecting Elements   ///////////////////////////////////////
// get slider items, Array.from()[ES6 feature]
var sliderImages = Array.from(
  document.querySelectorAll(`.slider-container img`)
);

// get number of slides
let slidesCount = sliderImages.length;

// set currnet slide
let currnetSlide = 1;

// slide number element
let slideNumberElement = document.getElementById(`slide-number`);

// previous and next elements
let nextButton = document.getElementById(`next`);
let prevButton = document.getElementById(`prev`);

///////////////////////////////////////    Handling Events   //////////////////////////////////////////////
// Handling clicks on next and previous buttons
nextButton.onclick = nextSilde;
prevButton.onclick = prevSilde;
