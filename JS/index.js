
const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close");
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

const images = document.querySelectorAll(".player-image");

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
        modal.style.display = "block";
    });
});

function showImage(index) {
    const selectedImage = images[index];
    modalImage.src = selectedImage.src;
    captionText.textContent = selectedImage.alt;
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";

});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";

    }
});

arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

arrowLeft.addEventListener("click" , () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
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

