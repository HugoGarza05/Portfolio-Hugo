document.addEventListener("DOMContentLoaded", function () {
    const achievementItems = document.querySelectorAll(".achievement-item");
    const xpContainer = document.querySelector(".xp-container");
    const currentXpElement = document.querySelector(".current-xp");
    const levelProgressBar = document.querySelector(".level-progress");
    const levelElement = document.querySelector(".level");

    let currentXp = 0;
    let xpNeededForNextLevel = 100; // Initial XP needed for next level (adjust as needed)
    let currentLevel = 1; // Initial level
    let hoveredProjects = new Set(); // Use a set to keep track of hovered projects

    achievementItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            // Check if the project has already been hovered
            if (!hoveredProjects.has(item)) {
                const xp = parseInt(item.getAttribute("data-xp"));
                currentXp += xp;

                // Update XP text
                currentXpElement.textContent = currentXp;

                // Calculate XP percentage
                const progressPercentage = (currentXp / xpNeededForNextLevel) * 100;

                // Update the XP bar width
                levelProgressBar.style.width = `${progressPercentage}%`;

                // Add or remove the 'full' class based on the condition (e.g., when reaching 100%)
                if (progressPercentage === 100) {
                    levelProgressBar.parentElement.classList.add('full');
                } else {
                    levelProgressBar.parentElement.classList.remove('full');
                }
                // Check for level up
                if (currentXp >= xpNeededForNextLevel) {
                    levelUp();
                }

                // Add the project to the set to mark it as hovered
                hoveredProjects.add(item);

                // Add active class to XP container
                xpContainer.classList.add("active");
            }
        });

        item.addEventListener("mouseout", () => {
            xpContainer.classList.remove("active");
        });
    });

    function levelUp() {
        // Trigger level up animation first
        showLevelUpAnimation();

        // Reset current XP after triggering the animation
        currentXp = 0;

        // Increment level
        currentLevel++;

        // Update XP text, level text, and level progress bar
        currentXpElement.textContent = currentXp;
        levelProgressBar.style.width = "0";
        levelElement.textContent = `Level ${currentLevel}`;

        // Increase the XP needed for the next level (for demonstration purposes)
        xpNeededForNextLevel += 50; // Adjust as needed
    }

    function showLevelUpAnimation() {
        // Display level up popup
        const levelUpPopup = document.getElementById("levelUpPopup");
        levelUpPopup.style.display = "block";

        // Fade out after 2 seconds
        setTimeout(() => {
            levelUpPopup.style.display = "none";
        }, 2000);
    }
});


