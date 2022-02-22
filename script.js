let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");
const mq = window.matchMedia("(min-width: 962px)");
const scrollSpy = () => {
    if (mq.matches) {
        section.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    links.classList.remove("active");
                    document
                        .querySelector("nav a[href*=" + CSS.escape(id) + "]")
                        .classList.add("active");
                });
            }
        });
    }
};

window.onscroll = scrollSpy;
window.addEventListener("resize", scrollSpy, true);

const checkbox = document.getElementById("checkbox");
const codeStyle = document.getElementById("code-style");

checkbox.addEventListener("change", function() {
    document.body.classList.toggle("dark");
    if (this.checked) {
        codeStyle.setAttribute(
            "href",
            "./libs/highlight/styles/stackoverflow-dark.min.css"
        );
    } else {
        codeStyle.setAttribute(
            "href",
            "./libs/highlight/styles/stackoverflow-light.min.css"
        );
    }
});
