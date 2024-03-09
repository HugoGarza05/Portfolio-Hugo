document.addEventListener("DOMContentLoaded", function () {
    const questItems = document.querySelectorAll(".quest-item");
    const modals = document.querySelectorAll(".modal-container");
    
    questItems.forEach((item) => {
        item.addEventListener("click", () => {
            const questId = item.getAttribute("data-quest-id");
            const modalId = item.getAttribute("data-modal-id");
            const questDetails = getQuestDetailsById(questId);

            // Set full description in modal
            const questDescriptionElement = document.getElementById(`quest-description-${questId}`);
            if (questDescriptionElement) {
                questDescriptionElement.textContent = questDetails.description;
            }

            // Display the correct modal
            const selectedModal = document.getElementById(modalId);
            if (selectedModal) {
                selectedModal.style.display = "block";
            }
        });
    });

    modals.forEach((modal) => {
        const closeModalButton = modal.querySelector(".close-modal");
        closeModalButton.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    function getQuestDetailsById(questId) {
        // Replace this with your actual logic to fetch details from HTML
        const questDescriptionElement = document.querySelector(`.quest-item[data-quest-id="${questId}"] p`);
        
        // Check if the element is found
        if (questDescriptionElement) {
            return {
                description: questDescriptionElement.textContent.trim(),
                // Add more details as needed
            };
        } else {
            return {
                description: "Quest details not found.",
                // Add more details as needed
            };
        }
    }
});

