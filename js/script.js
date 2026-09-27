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
document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       CURSOR SYSTEM
    ================================================= */

    const cursorGlow = document.createElement("div");
    cursorGlow.className = "cursor-glow";

    const cursorDot = document.createElement("div");
    cursorDot.className = "cursor-dot";

    document.body.appendChild(cursorGlow);
    document.body.appendChild(cursorDot);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        document.body.classList.add("cursor-active");

        document.body.style.setProperty(
            "--mouse-x",
            `${mouseX}px`
        );

        document.body.style.setProperty(
            "--mouse-y",
            `${mouseY}px`
        );

        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursor() {

        glowX += (mouseX - glowX) * .08;
        glowY += (mouseY - glowY) * .08;

        cursorGlow.style.left = `${glowX}px`;
        cursorGlow.style.top = `${glowY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();


    /* =================================================
       CURSOR HOVER STATES
    ================================================= */

    const interactiveElements = document.querySelectorAll(
        "a, button, .btn, .project-card, .stack-card, .nav-link"
    );

    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-hover");
        });

        element.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-hover");
        });

    });


    /* =================================================
       SCROLL PROGRESS
    ================================================= */

    const progress = document.createElement("div");

    progress.className = "scroll-progress";

    document.body.appendChild(progress);

    function updateScrollProgress() {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        document.documentElement.style.setProperty(
            "--scroll-progress",
            `${percentage}%`
        );
    }

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

    updateScrollProgress();


    /* =================================================
       3D CARD TILT
    ================================================= */

    const tiltElements = document.querySelectorAll(
        ".project-card, .stack-card, .terminal-window"
    );

    tiltElements.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) /
                rect.width;

            const y =
                (e.clientY - rect.top) /
                rect.height;

            const rotateX =
                (0.5 - y) * 5;

            const rotateY =
                (x - 0.5) * 5;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-3px)
            `;

            card.style.setProperty(
                "--card-x",
                `${x * 100}%`
            );

            card.style.setProperty(
                "--card-y",
                `${y * 100}%`
            );
        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

            card.style.setProperty(
                "--card-x",
                "50%"
            );

            card.style.setProperty(
                "--card-y",
                "50%"
            );
        });

    });


    /* =================================================
       MAGNETIC BUTTONS
    ================================================= */

    const magneticElements = document.querySelectorAll(
        ".btn, .nav-resume, .social-links a"
    );

    magneticElements.forEach((element) => {

        element.addEventListener("mousemove", (e) => {

            const rect =
                element.getBoundingClientRect();

            const x =
                e.clientX -
                (rect.left + rect.width / 2);

            const y =
                e.clientY -
                (rect.top + rect.height / 2);

            element.style.transform =
                `translate(${x * .12}px, ${y * .12}px)`;
        });

        element.addEventListener("mouseleave", () => {

            element.style.transform = "";

        });

    });


    /* =================================================
       SCROLL-BASED NAVBAR
    ================================================= */

    const navbar =
        document.querySelector(".navbar");

    function handleNavbar() {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        handleNavbar,
        { passive: true }
    );

    handleNavbar();


    /* =================================================
       ACTIVE SECTION NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting)
                        return;

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                        const href =
                            link.getAttribute("href");

                        if (
                            href ===
                            `#${entry.target.id}`
                        ) {
                            link.classList.add("active");
                        }

                    });

                });

            },
            {
                threshold: .35
            }
        );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /* =================================================
       REVEAL ON SCROLL
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting)
                        return;

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: .12,
                rootMargin: "0px 0px -60px 0px"
            }
        );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =================================================
       DYNAMIC SECTION BACKGROUND
    ================================================= */

    const dynamicSections =
        document.querySelectorAll(".section");

    window.addEventListener(
        "scroll",
        () => {

            dynamicSections.forEach((section) => {

                const rect =
                    section.getBoundingClientRect();

                const center =
                    window.innerHeight / 2;

                const distance =
                    Math.abs(
                        rect.top +
                        rect.height / 2 -
                        center
                    );

                const influence =
                    Math.max(
                        0,
                        1 - distance / 900
                    );

                section.style.setProperty(
                    "--section-y",
                    `${50 + influence * 20}%`
                );

            });

        },
        { passive: true }
    );


    /* =================================================
       SCROLL TO TOP
    ================================================= */

    const scrollTop =
        document.querySelector(".scroll-top");

    if (scrollTop) {

        scrollTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

        window.addEventListener(
            "scroll",
            () => {

                scrollTop.classList.toggle(
                    "show",
                    window.scrollY > 600
                );

            },
            { passive: true }
        );

    }


    /* =================================================
       MOBILE MENU
    ================================================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                menuToggle.classList.toggle("active");
                navMenu.classList.toggle("active");

                document.body.classList.toggle(
                    "menu-open"
                );

            }
        );

        navMenu.querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        menuToggle.classList.remove(
                            "active"
                        );

                        navMenu.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            });

    }

});