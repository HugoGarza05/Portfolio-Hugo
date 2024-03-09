document.addEventListener("DOMContentLoaded", function () {
    const magicSidebar = document.getElementById("magicSidebar");
    const magicOverlay = document.getElementById("magicOverlay");
    const startQuestButton = document.querySelector(".magic-sidebar-button[href='#professional-quests']");
    const levelUpButton = document.querySelector(".magic-sidebar-button[href='#achievements']");
    const skillsButton = document.querySelector(".magic-sidebar-button[href='#skills']");

    // Toggle sidebar visibility
    function toggleSidebar() {
        magicOverlay.classList.toggle("visible");
    }

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Event listener for Start Quest button
    startQuestButton.addEventListener("click", (event) => {
        event.preventDefault();
        scrollToSection("professional-quests");
        toggleSidebar();
    });

    // Event listener for Level Up button
    levelUpButton.addEventListener("click", (event) => {
        event.preventDefault();
        scrollToSection("achievements");
        toggleSidebar();
    });

    // Event listener for Skills button
    skillsButton.addEventListener("click", (event) => {
        event.preventDefault();
        scrollToSection("skills");
        toggleSidebar();
    });

    magicOverlay.addEventListener("click", () => {
        toggleSidebar();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && magicSidebar.classList.contains("visible")) {
            toggleSidebar();
        }
    });

    document.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        if (mouseX < 150) {
            magicSidebar.classList.add("visible");
            magicOverlay.classList.add("visible");
        } else {
            magicSidebar.classList.remove("visible");
            magicOverlay.classList.remove("visible");
        }
    });
});
