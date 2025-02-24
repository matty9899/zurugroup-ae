document.addEventListener("DOMContentLoaded", () => {
    scrollHeaderClasses();
    menuToggle();
});

function menuToggle() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menuToggle');
    const header = document.getElementById('header');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('menuopen');
        header.classList.toggle('headerOpen');
    });
}

function scrollHeaderClasses() {
    const scrollStart = 20;
    let lastScrollY = 0;
    const delta = 20;
    const header = document.getElementById('header');

    function scrolled() {
        const sy = window.scrollY;
        if (Math.abs(lastScrollY - sy) > delta) {
            if (sy > lastScrollY && sy > scrollStart) {
                header.classList.add("headerscrolled");
            } else if (sy < lastScrollY) {
                header.classList.remove("headerscrolled");
            }

            lastScrollY = sy;
        }
    }

    let didScroll = false;
    window.addEventListener(
        "scroll",
        function () {
            didScroll = true;
        },
        { passive: true }
    );

    setInterval(function () {
        if (didScroll) {
            scrolled();
            didScroll = false;
        }
    }, 250);
}