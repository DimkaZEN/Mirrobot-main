function prevSlide() {
  var currentSlide = document.querySelector(".equipment_slider .active");
  var previousSlide = currentSlide.previousElementSibling;

  if (previousSlide) {
    previousSlide.classList.add("active", "slide-in-left");
    currentSlide.classList.remove("active");

    currentSlide.classList.add("fade-out");

    previousSlide.addEventListener("animationend", function () {
      previousSlide.classList.remove("slide-in-left");
      currentSlide.classList.remove("fade-out");
    });
  } else {
    var slides = document.querySelectorAll(".equipment_slide");
    var lastSlide = slides[slides.length - 1];
    lastSlide.classList.add("active", "slide-in-left");
    currentSlide.classList.remove("active");

    currentSlide.classList.add("fade-out");

    lastSlide.addEventListener("animationend", function () {
      lastSlide.classList.remove("slide-in-left");
      currentSlide.classList.remove("fade-out");
    });
  }

  updateButtonStates();
}

function nextSlide() {
  var currentSlide = document.querySelector(".equipment_slider .active");
  var nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    nextSlide.classList.add("active", "slide-in-right");
    currentSlide.classList.remove("active");

    currentSlide.classList.add("fade-out");

    nextSlide.addEventListener("animationend", function () {
      nextSlide.classList.remove("slide-in-right");
      currentSlide.classList.remove("fade-out");
    });
  } else {
    var firstSlide = document.querySelector(".equipment_slide");
    firstSlide.classList.add("active", "slide-in-right");
    currentSlide.classList.remove("active");

    currentSlide.classList.add("fade-out");

    firstSlide.addEventListener("animationend", function () {
      firstSlide.classList.remove("slide-in-right");
      currentSlide.classList.remove("fade-out");
    });
  }

  updateButtonStates();
}
