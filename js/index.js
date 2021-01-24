var workimages = document.querySelectorAll("#image figure");
for (i = 0; i < workimages.length; i++) {
    workimages[i].addEventListener('click', function () { this.classList.toggle("expanded"); image.classList.toggle("full") });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};