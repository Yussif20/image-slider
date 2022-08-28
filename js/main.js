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

///////////////////////////////////////    Handling Events   //////////////////////////////////////////////
// Handling clicks on next and previous buttons
nextButton.onclick = nextSilde;
prevButton.onclick = prevSilde;
