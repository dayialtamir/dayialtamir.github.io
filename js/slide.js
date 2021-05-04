/* This script is for the pciture slides in the gallery webpage*/
let slideIndex = 1;

/* This funciton is used for my slide show images in gallery.html */
function showSlides(currentSlide) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  let index;

  if (currentSlide > slides.length) {
    slideIndex = 1
  }

  if (currentSlide < 1) {
    slideIndex = slides.length
  }

  /* hide all the slides */
  for (index = 0; index < slides.length; index++) {
      slides[index].style.display = "none";  
  }
  /* Only show the current picture slide */
  slides[slideIndex-1].style.display = "block";  

  /* Change the classname for the circles at the button to not show active */ 
  for (index = 0; index < dots.length; index++) {
      dots[index].className = dots[index].className.replace(" active", "");
  }


  /* Only activate the current circle */
  dots[slideIndex-1].className += " active";
}

/* Call the function to display the slide */
showSlides(slideIndex);

/* This function is called in the prev and next arrows */
function nextSlide(currentSlide) {
  showSlides(slideIndex += currentSlide);
}

/* This function is used when the user click the circles 
   at the bottom to display the slide with the index */
function currentSlide(currentSlide) {
  showSlides(slideIndex = currentSlide);
}

