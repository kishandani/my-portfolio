document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const scrollTop = document.querySelector(".scroll-top");
    const year = document.getElementById("year");
    const preloader = document.querySelector(".preloader");



    /* =====================================================
       PRELOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 700);

    });



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    if (year) {
        year.textContent = new Date().getFullYear();
    }



    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    function handleNavbar() {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
            document.body.classList.toggle("menu-open");

        });

    }



    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") === `#${sectionId}`
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();



    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    function handleScrollTop() {

        if (window.scrollY > 600) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", handleScrollTop);

    if (scrollTop) {

        scrollTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       TYPING EFFECT
    ===================================================== */

    const typingElement = document.querySelector(".typing-text");

    const phrases = [

        "enterprise applications.",
        "REST APIs.",
        "full-stack systems.",
        "Angular applications.",
        "database-driven solutions."

    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) {
            return;
        }

        const currentPhrase = phrases[phraseIndex];

        if (!deleting) {

            typingElement.textContent =
                currentPhrase.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;

            if (characterIndex === currentPhrase.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;

            }

        } else {

            typingElement.textContent =
                currentPhrase.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                phraseIndex++;

                if (phraseIndex >= phrases.length) {
                    phraseIndex = 0;
                }

            }

        }

        const speed = deleting ? 35 : 65;

        setTimeout(typeEffect, speed);

    }

    setTimeout(typeEffect, 1200);



    /* =====================================================
       TERMINAL CURSOR / SUBTLE EFFECT
    ===================================================== */

    const terminal = document.querySelector(".terminal-window");

    if (terminal) {

        terminal.addEventListener("mousemove", event => {

            const rect = terminal.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width) * 100;

            const y =
                ((event.clientY - rect.top) / rect.height) * 100;

            terminal.style.background = `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(56,189,248,.035),
                    #0a0d12 45%
                )
            `;

        });

        terminal.addEventListener("mouseleave", () => {

            terminal.style.background = "#0a0d12";

        });

    }

    /* =====================================================
       PROJECT CARD INTERACTION
    ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.zIndex = "2";

        });

        card.addEventListener("mouseleave", () => {

            card.style.zIndex = "1";

        });

    });



    /* =====================================================
       KEYBOARD ESCAPE
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        }

    });

});