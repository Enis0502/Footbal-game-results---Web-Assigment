

//********************************************************* */


// Get modal elements
// Get modal elements
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

// Get all images in the gallery
const images = document.querySelectorAll(".player-image");

// Track the current image index
let currentIndex = 0;

// Open modal and display clicked image
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index; // Set current index
        showImage(currentIndex); // Display the clicked image
        modal.style.display = "block"; // Show modal
    });
});

// Function to display an image in the modal
function showImage(index) {
    const selectedImage = images[index];
    modalImage.src = selectedImage.src; // Set modal image source
    captionText.textContent = selectedImage.alt; // Set caption text
}

// Close modal when 'X' is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";

});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";

    }
});

// Navigate to the next image when the right arrow is clicked
arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the start if at the end
    showImage(currentIndex); // Display the next image
});

// Navigate to the previous image when the left arrow is clicked
arrowLeft.addEventListener("click" , () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the end if at the start
    showImage(currentIndex); // Display the previous image
});

//********************************************************* */

let sectionViewer = document.getElementById("about-players");
sectionViewer.style.display = "none";

function show(){
    if (sectionViewer.style.display === "none"){
        sectionViewer.style.display = "block";

    } else {
        sectionViewer.style.display = "none";
    }
}
//********************************************************* */

