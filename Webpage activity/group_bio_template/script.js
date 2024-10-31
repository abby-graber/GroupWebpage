/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 */
function toggleBio(bioId, biopic, biolink) {
    const bio = document.getElementById(bioId);
    const biopicture = document.getElementById(biopic)
    const biolinks = document.getElementById(biolink)
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
    } else {
        bio.style.display = "none";
    }
    if (biopicture.style.display === "none" || biopicture.style.display === "") {
        biopicture.style.display = "block";
    } else {
        biopicture.style.display = "none";
    }
    if (biolinks.style.display === "none" || biolinks.style.display === "") {
        biolinks.style.display = "block";
    } else {
        biolinks.style.display = "none";
    }
}

/**
 * Shows the specified section ('bios' or 'vision') and hides the other
 * @param {string} sectionId - The ID of the section to display
 */
function showSection(sectionId) {
    const biosSection = document.getElementById("bios");
    const visionSection = document.getElementById("vision");

    // Display the bios section and hide the vision section
    if (sectionId === "bios") {
        biosSection.style.display = "flex";
        visionSection.style.display = "none";
    }
    // Display the vision section and hide the bios section
    else if (sectionId === "vision") {
        biosSection.style.display = "none";
        visionSection.style.display = "block";
    }
}