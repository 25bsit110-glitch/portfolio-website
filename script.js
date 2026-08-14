/* ==========================================
   PORTFOLIO WEBSITE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio website loaded successfully!");

    /* ==========================================
       MOBILE NAVIGATION
    ========================================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                hamburger.innerHTML = "✕";
            } else {
                hamburger.innerHTML = "☰";
            }

        });

    }


    /* ==========================================
       SMOOTH SCROLLING
    ========================================== */

    const navigationLinks = document.querySelectorAll(
        '.nav-menu a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = this.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

            // Close mobile menu
            if (navMenu) {

                navMenu.classList.remove("active");

            }

            if (hamburger) {

                hamburger.innerHTML = "☰";

            }

        });

    });


    /* ==========================================
       PROJECT FILTER
    ========================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Add active class to clicked button
            this.classList.add("active");

            const category =
                this.getAttribute("data-category");


            // Filter projects
            projectCards.forEach(function (project) {

                const projectCategory =
                    project.getAttribute("data-category");

                if (
                    category === "all" ||
                    projectCategory === category
                ) {

                    project.style.display = "block";

                } else {

                    project.style.display = "none";

                }

            });

        });

    });


    /* ==========================================
       LIGHTBOX
    ========================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxClose =
        document.getElementById("lightbox-close");

    const lightboxImage =
        document.getElementById("lightbox-image");

    const lightboxTitle =
        document.getElementById("lightbox-title");

    const lightboxDescription =
        document.getElementById("lightbox-description");


    const projectInformation = {

        portfolio: {
            icon: "🌐",
            title: "Personal Portfolio",
            description:
                "A responsive portfolio website created using HTML, CSS and JavaScript."
        },

        cpp: {
            icon: "💻",
            title: "C++ Programming Project",
            description:
                "A programming project demonstrating object-oriented programming concepts using C++."
        },

        database: {
            icon: "🗄️",
            title: "Database Management",
            description:
                "A database project demonstrating SQL queries, tables, joins and data management."
        },

        responsive: {
            icon: "🎨",
            title: "Responsive Website",
            description:
                "A responsive website designed to work properly on desktop, tablet and mobile devices."
        }

    };


    const projectButtons =
        document.querySelectorAll(".view-project");


    projectButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const projectName =
                this.getAttribute("data-image");

            const project =
                projectInformation[projectName];


            if (project) {

                lightboxImage.textContent =
                    project.icon;

                lightboxTitle.textContent =
                    project.title;

                lightboxDescription.textContent =
                    project.description;

                lightbox.classList.add("show");

            }

        });

    });


    // Close lightbox
    if (lightboxClose) {

        lightboxClose.addEventListener("click", function () {

            lightbox.classList.remove("show");

        });

    }


    // Close when clicking outside content
    if (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                lightbox.classList.remove("show");

            }

        });

    }


    // Close lightbox using Escape key
    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            lightbox &&
            lightbox.classList.contains("show")
        ) {

            lightbox.classList.remove("show");

        }

    });


    /* ==========================================
       CONTACT FORM VALIDATION
    ========================================== */

    const contactForm =
        document.getElementById("contact-form");

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const messageInput =
        document.getElementById("message");

    const nameError =
        document.getElementById("name-error");

    const emailError =
        document.getElementById("email-error");

    const messageError =
        document.getElementById("message-error");

    const successMessage =
        document.getElementById("success-message");


    function validateName() {

        const name =
            nameInput.value.trim();

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            nameInput.classList.add("error");
            nameInput.classList.remove("success");

            return false;

        }

        if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            nameInput.classList.add("error");
            nameInput.classList.remove("success");

            return false;

        }

        nameError.textContent = "";

        nameInput.classList.remove("error");
        nameInput.classList.add("success");

        return true;

    }


    function validateEmail() {

        const email =
            emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            emailError.textContent =
                "Please enter your email.";

            emailInput.classList.add("error");
            emailInput.classList.remove("success");

            return false;

        }


        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            emailInput.classList.add("error");
            emailInput.classList.remove("success");

            return false;

        }

        emailError.textContent = "";

        emailInput.classList.remove("error");
        emailInput.classList.add("success");

        return true;

    }


    function validateMessage() {

        const message =
            messageInput.value.trim();


        if (message === "") {

            messageError.textContent =
                "Please enter your message.";

            messageInput.classList.add("error");
            messageInput.classList.remove("success");

            return false;

        }


        if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            messageInput.classList.add("error");
            messageInput.classList.remove("success");

            return false;

        }

        messageError.textContent = "";

        messageInput.classList.remove("error");
        messageInput.classList.add("success");

        return true;

    }


    /* ==========================================
       REAL-TIME VALIDATION
    ========================================== */

    if (nameInput) {

        nameInput.addEventListener(
            "input",
            validateName
        );

    }

    if (emailInput) {

        emailInput.addEventListener(
            "input",
            validateEmail
        );

    }

    if (messageInput) {

        messageInput.addEventListener(
            "input",
            validateMessage
        );

    }


    /* ==========================================
       FORM SUBMISSION
    ========================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const validName =
                    validateName();

                const validEmail =
                    validateEmail();

                const validMessage =
                    validateMessage();


                if (
                    validName &&
                    validEmail &&
                    validMessage
                ) {

                    successMessage.textContent =
                        "Thank you! Your message has been submitted successfully.";

                    contactForm.reset();

                    nameInput.classList.remove("success");
                    emailInput.classList.remove("success");
                    messageInput.classList.remove("success");

                    console.log(
                        "Contact form submitted successfully."
                    );

                } else {

                    successMessage.textContent = "";

                    console.log(
                        "Please correct the form errors."
                    );

                }

            }
        );

    }


    /* ==========================================
       TESTING MESSAGE
    ========================================== */

    console.log("Navigation: Ready");
    console.log("Smooth scrolling: Ready");
    console.log("Project filtering: Ready");
    console.log("Lightbox: Ready");
    console.log("Form validation: Ready");

});