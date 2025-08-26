// ===== Inject Modal into DOM (without editing HTML file) =====
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span id="closeModal">&times;</span>
      <div id="modalBody"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");

  // Close modal
  closeModal.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };

  // Attach click event to all posters
  document.querySelectorAll(".img").forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const movie = moviesData.find(m => m.image === src);

      if (movie) {
        modalBody.innerHTML = `
          <h2>${movie.title} (${movie.year})</h2>
          <img src="${movie.image}" alt="${movie.title}">
          <p><b>Genre:</b> ${movie.genre}</p>
          <p>${movie.description}</p>
        `;
        modal.style.display = "flex";
      } else {
        modalBody.innerHTML = `<p>Details not found for this movie.</p>`;
        modal.style.display = "flex";
      }
    });
  });
});
