document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your inquiry! We will get back to you soon.');
  });

// Open the lightbox
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
  
    lightbox.style.display = "flex"; // Show the lightbox
    lightboxImg.src = img.src; // Set the clicked image's source
  }
  
  // Close the lightbox
  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
  }