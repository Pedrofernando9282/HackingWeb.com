function toggleGuide(btn){
  const card = btn.closest(".card");
  const guide = card.querySelector(".guide");
  guide.classList.toggle("active");
}