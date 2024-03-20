const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentImgIndex = 0;

// Function to open the modal with the clicked image
const openModal = (index) => {
    modal.style.display = 'block';
    modalImg.src = images[index].src;
    currentImgIndex = index;
};

// Event listener for opening the modal when clicking on the image container
document.querySelector('.gallery').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = Array.from(images).findIndex(img => img === event.target);
        openModal(index);
    }
});

// Event listener for closing the modal when clicking outside the modal
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Event listener for the previous button
prevBtn.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImgIndex].src;
});

// Event listener for the next button
nextBtn.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    modalImg.src = images[currentImgIndex].src;
});