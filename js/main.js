///////////////     Functions ///////////////

const nextSilde = () => {
  console.log(`rawan`);
};

const prevSilde = () => {
  console.log(`waten`);
};

const checker = () => {
  // set the slide number string
  slideNumberElement.textContent =
    `Slide #` + currnetSlide + ` of ` + slidesCount;

  //remove all active classes
  removeAllActive();
  //adding the active class to the current slide
  sliderImages[currnetSlide - 1].classList.add(`active`);

  // set active classs on current pagination item
  paginationCreatedUl.children[currnetSlide - 1].classList.add(`active`);

  //the disabled class
  if (currnetSlide == 1) {
    prevButton.classList.add(`disabled`);
  } else {
    prevButton.classList.remove(`disabled`);
  }
  if (currnetSlide == slidesCount) {
    nextButton.classList.add(`disabled`);
  } else {
    nextButton.classList.remove(`disabled`);
  }
};

const removeAllActive = () => {
  //remove active class from all images
  sliderImages.forEach((img) => {
    img.classList.remove(`active`);
  });
  //remove active class from all bullets
  paginationsBullets.forEach((bullet) => {
    bullet.classList.remove(`active`);
  });
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

// Create the main ul element
let paginationElement = document.createElement(`ul`);

// Set attribute to the created ul
paginationElement.setAttribute(`id`, `pagination-ul`);

// Create list items based on slides count
for (let i = 1; i <= slidesCount; i++) {
  // create the list item
  let paginationItem = document.createElement(`li`);

  // Set attribute to custome li
  paginationItem.setAttribute(`data-index`, i);

  //set item content
  paginationItem.appendChild(document.createTextNode(i));

  //append items to the main ul list
  paginationElement.appendChild(paginationItem);
}

//Add the created ul to the page
document.getElementById(`indicators`).appendChild(paginationElement);

//get the created ul
let paginationCreatedUl = document.getElementById(`pagination-ul`);

// get pagination items, Array.from()[ES6 feature]
var paginationsBullets = Array.from(
  document.querySelectorAll(`#pagination-ul li`)
);

// Trigger the cheacker function
checker();
///////////////////////////////////////    Handling Events   //////////////////////////////////////////////
// Handling clicks on next and previous buttons
nextButton.onclick = nextSilde;
prevButton.onclick = prevSilde;
