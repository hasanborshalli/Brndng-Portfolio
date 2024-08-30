const burgerButton = document.getElementById("burger");
const hiddenLinks = document.getElementById("hidden-links");

document.addEventListener("DOMContentLoaded", mainFunction);

function mainFunction() {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.07,
    };

    let observer = new IntersectionObserver(changeLinks, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
    });
    const observerOptions2 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    let observer2 = new IntersectionObserver(changeLinks2, observerOptions2);

    document.querySelectorAll("section").forEach((section) => {
        observer2.observe(section);
    });
}

function changeLinks(elements, observer) {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            if (element.target.className == "home") {
                document.querySelector(".text").classList.add("textAnimate");
                document.querySelector(".pic").classList.add("picAnimate");
            }
            if (element.target.className == "about") {
                document.querySelectorAll(".box").forEach((box) => {
                    box.classList.add("boxAnimate");
                });
            }
            if (element.target.className == "services") {
                document.querySelectorAll(".service").forEach((service) => {
                    service.classList.add("serviceAnimate");
                });
            }
            if (element.target.className == "projects") {
                document
                    .querySelectorAll(".projects img")
                    .forEach((project) => {
                        project.classList.add("projectAnimate");
                    });
            }
        }
    });
}
let links = document.querySelectorAll("nav li");
function changeLinks2(elements, observer2) {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            if (element.target.className == "home") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[0].classList.add("active");
            }
            if (element.target.className == "about") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[1].classList.add("active");
            }
            if (element.target.className == "services") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[2].classList.add("active");
            }
            if (element.target.className == "projects") {
                links.forEach((link) => {
                    link.classList.remove("active");
                });
                links[3].classList.add("active");
            }
        }
    });
}
function showLinks() {
    if (hiddenLinks.style.display == "block") {
        hiddenLinks.classList.remove("show");
        hiddenLinks.classList.add("remove");
        setTimeout(() => {
            hiddenLinks.style.display = "none";
        }, 900);
    } else {
        hiddenLinks.style.display = "block";
        hiddenLinks.classList.add("show");
        hiddenLinks.classList.remove("remove");
    }
}
