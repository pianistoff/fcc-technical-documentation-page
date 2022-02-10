let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");
const mq = window.matchMedia("(min-width: 962px)");

window.onscroll = () => {
    if (mq.matches) {
        section.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            console.log(top);

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
