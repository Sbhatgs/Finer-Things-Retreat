document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
  });

  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  
  let currentIndex = 0;
  
  // Open lightbox
  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.style.display = "flex";
  }
  
  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
  }
  
  // Change lightbox image
  function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateLightboxImage();
  }
  
  // Update the lightbox image
  function updateLightboxImage() {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
  }
  
// Attach event listeners for images
images.forEach((image, index) => {
  image.addEventListener('click', () => openLightbox(index));
});

// Attach event listeners for controls
document.querySelector('.close').addEventListener('click', closeLightbox);
document.querySelector('.prev').addEventListener('click', () => changeImage(-1));
document.querySelector('.next').addEventListener('click', () => changeImage(1));