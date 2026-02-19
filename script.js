function openPopup(product) {
  const popup = document.getElementById("productPopup");
  const img = document.getElementById("popupImage");
  const title = document.getElementById("popupTitle");
  const desc = document.getElementById("popupDescription");
  if (!popup || !img || !title || !desc) return;

  const data = {
    oil: {
      src: "images/coconut-oil.jpg",
      title: "Expeller Coconut Oil",
      desc: "Traditional expeller extracted coconut oil suitable for edible, cosmetic, and bulk industrial buyers."
    },
    copra: {
      src: "images/gallery-copra.jpg",
      title: "Coconut Copra",
      desc: "Sun-dried milling grade copra sourced from coconut-rich belts for consistent pressing output."
    },
    cake: {
      src: "images/gallery-cake.jpg",
      title: "Coconut Cake",
      desc: "Nutrient-rich by-product used in cattle feed and industrial applications, available in bulk quantities."
    }
  };

  if (!data[product]) return;
  img.src = data[product].src;
  title.textContent = data[product].title;
  desc.textContent = data[product].desc;
  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById("productPopup");
  if (popup) popup.style.display = "none";
}

function openQuoteModal() {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

function closeQuoteModal() {
  const modal = document.getElementById("quoteModal");
  if (!modal) return;
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

function initReveal() {
  const targets = document.querySelectorAll(".section, .product-card, .gallery figure, .metric-card, .products-cta");
  if (!targets.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
}

function initGalleryLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const galleryImages = document.querySelectorAll(".gallery img");
  if (!lightbox || !lightboxImage || !lightboxCaption || !galleryImages.length) return;

  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightboxCaption.textContent = image.dataset.caption || image.alt;
      lightbox.style.display = "flex";
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeButton = lightbox.querySelector(".lightbox-close");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightbox.setAttribute("aria-hidden", "true");
    });
  }

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.style.display = "none";
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initGalleryLightbox();

  document.querySelectorAll("[data-open-quote]").forEach((trigger) => {
    trigger.addEventListener("click", openQuoteModal);
  });

  document.querySelectorAll("[data-close-quote]").forEach((trigger) => {
    trigger.addEventListener("click", closeQuoteModal);
  });

  const quoteForm = document.querySelector(".quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you! Your enquiry has been noted. Our team will contact you shortly.");
      closeQuoteModal();
      quoteForm.reset();
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closePopup();
  closeQuoteModal();

  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.style.display = "none";
    lightbox.setAttribute("aria-hidden", "true");
  }
});

window.addEventListener("click", (event) => {
  const popup = document.getElementById("productPopup");
  if (popup && event.target === popup) closePopup();

  const modal = document.getElementById("quoteModal");
  if (modal && event.target === modal) closeQuoteModal();
});
