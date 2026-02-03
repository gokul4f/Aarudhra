function openPopup(product) {
  const popup = document.getElementById("productPopup");
  const img = document.getElementById("popupImage");
  const title = document.getElementById("popupTitle");
  const desc = document.getElementById("popupDescription");

  if (product === "oil") {
    img.src = "images/coconut-oil.jpg";
    title.innerText = "Expeller Coconut Oil";
    desc.innerText =
      "Traditional wooden expeller extracted coconut oil. Suitable for bulk buyers, traders, and exporters. No chemicals or preservatives.";
  }

  if (product === "copra") {
    img.src = "images/copra.jpg";
    title.innerText = "Coconut Copra";
    desc.innerText =
      "Sun-dried, milling grade copra sourced from Kangayam region. Consistent quality suitable for oil extraction.";
  }

  if (product === "cake") {
    img.src = "images/coconut-cake.jpg";
    title.innerText = "Coconut Cake";
    desc.innerText =
      "High oil content coconut cake used for cattle feed and industrial purposes. Available in bulk quantities.";
  }

  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("productPopup").style.display = "none";
}
