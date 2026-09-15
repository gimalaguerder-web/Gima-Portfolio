document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       WORK FILTERS
    ========================= */

    const filters = document.querySelectorAll(".filter");
    const projects = document.querySelectorAll(".project-card");

    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            const selectedCategory = filter.dataset.filter;

            filters.forEach(button => {
                button.classList.remove("active");
            });

            filter.classList.add("active");

            projects.forEach(project => {

                const categories = project.dataset.category || "";

                if (
                    selectedCategory === "all" ||
                    categories.includes(selectedCategory)
                ) {
                    project.classList.remove("hidden");
                } else {
                    project.classList.add("hidden");
                }

            });

        });

    });


    /* =========================
       VIDEO MODAL
    ========================= */

    const modal = document.getElementById("videoModal");
    const viewer = document.getElementById("videoViewer");
    const closeButton = document.getElementById("videoModalClose");

    const clickableProjects =
        document.querySelectorAll(".project-clickable");


    clickableProjects.forEach(project => {

        project.addEventListener("click", () => {

            const videoUrl = project.dataset.video;

            if (!videoUrl) return;

            viewer.src = videoUrl;

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    function closeVideo() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

        /* Reset iframe so video stops */
        viewer.src = "";

    }


    closeButton.addEventListener("click", closeVideo);


    /* Close when clicking outside video */

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeVideo();
        }

    });


    /* Close with ESC */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeVideo();
        }

    });


    /* =========================
       NAVBAR
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(11, 37, 69, 0.96)";

        } else {

            navbar.style.background =
                "rgba(11, 37, 69, 0.88)";

        }

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});
