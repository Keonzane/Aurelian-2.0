const fileInput = document.getElementById("design-upload");
const fileLabel = document.querySelector(".file-upload-label");

if (fileInput && fileLabel) {
  fileInput.addEventListener("change", () => {
    const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : "Custom Design Image (Optional)";
    fileLabel.textContent = fileName;
    fileLabel.classList.add("active");
  });
}

const phoneInput = document.querySelector('input[type="tel"]');
if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, ""); // remove non-numeric characters
  });
}

// Mobile navbar toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


// Product carousels
document.querySelectorAll(".product-card").forEach(card => {
  const images = card.querySelectorAll(".carousel img");
  const prevBtn = card.querySelector(".prev");
  const nextBtn = card.querySelector(".next");
  let index = 0;

  if (images.length) images[0].classList.add("active");

  nextBtn.addEventListener("click", () => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  });

  prevBtn.addEventListener("click", () => {
    images[index].classList.remove("active");
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add("active");
  });
});
