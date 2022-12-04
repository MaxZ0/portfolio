var workimages = document.querySelectorAll("#image figure");
for (i = 0; i < workimages.length; i++) {
  workimages[i].addEventListener("click", function () {
    this.classList.toggle("expanded");
    image.classList.toggle("full");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    //slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  //slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
