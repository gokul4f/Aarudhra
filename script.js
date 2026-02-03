function openPopup(product) {
  const popup = document.getElementById("productPopup");
  const img = document.getElementById("popupImage");
  const title = document.getElementById("popupTitle");
  const desc = document.getElementById("popupDescription");

  if (product === "oil") {
    img.src = "images/coconut-oil.jpg";
    title.innerText = "Expeller Coconut Oil";
    desc.innerText =
      "Traditional expeller extracted coconut oil. Suitable for bulk buyers and traders.";
  }

  if (product === "copra") {
    img.src = "images/gallery-copra.jpg";
    title.innerText = "Coconut Copra";
    desc.innerText =
      "Sun-dried, milling grade copra sourced from Kangayam region.";
  }

  if (product === "cake") {
    img.src = "images/gallery-cake.jpg";
    title.innerText = "Coconut Cake";
    desc.innerText =
      "High oil content coconut cake used for cattle feed and industrial purposes.";
  }

  popup.style.display = "flex";

  // allow CSS transition to apply
  setTimeout(() => {
    popup.classList.add("show");
  }, 10);
}

function closePopup() {
  const popup = document.getElementById("productPopup");

  popup.classList.remove("show");

  // wait for fade-out animation before hiding
  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const popup = document.getElementById("productPopup");
    if (popup.classList.contains("show")) {
      closePopup();
    }
  }
});

window.onclick = function (event) {
  const popup = document.getElementById("productPopup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

