// Reusable slider scroll function
function setupSlider(sectionClass, contentId) {
  const section = document.querySelector(sectionClass);
  const content = document.getElementById(contentId);
  const leftArrow = section.querySelector(".arrow.left");
  const rightArrow = section.querySelector(".arrow.right");

  // Scroll amount = width of one movie card * 3 (like Netflix)
  const scrollAmount = 250 * 3;

  leftArrow.addEventListener("click", () => {
    content.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  rightArrow.addEventListener("click", () => {
    content.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });
}

// Call this for each category
setupSlider(".trending", "trendingSlider");
setupSlider(".top-rated", "top-Slider");
setupSlider(".action", "action-Slider");
setupSlider(".comedy", "comedy-Slider");
setupSlider(".romance", "romance-Slider");



  /*-------------------frequently asked questions-------------------*/
  // Select all faq checkboxes
let faqs = document.querySelectorAll(".faq-item input[type='checkbox']");

faqs.forEach(faq => {
  faq.addEventListener("change", function() {
    // Find the answer div right after the faq-item parent
    let answer = faq.parentElement.nextElementSibling;

    if (faq.checked) {
      answer.classList.add("show");
      answer.classList.remove("hide");
    } else {
      answer.classList.add("hide");
      answer.classList.remove("show");
    }
  });
});





// Select modal + fields
const modal = document.getElementById("movieModal");
const closeBtn = document.getElementById("closeModal");

const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalGenre = document.getElementById("modalGenre");
const modalYear = document.getElementById("modalYear");
const modalRating = document.getElementById("modalRating");

// Select all clickable posters
const posters = document.querySelectorAll(".movie-poster");

// Event listener for posters
posters.forEach(poster => {
  poster.addEventListener("click", () => {
    const id = poster.getAttribute("data-id");
    const movie = movies.find(m => m.id === id);

    if (movie) {
      modalPoster.src = movie.poster;
      modalTitle.textContent = movie.title;
      modalDescription.textContent = movie.description;
      modalGenre.textContent = movie.genre;
      modalYear.textContent = movie.year;
      modalRating.textContent = movie.rating;
      modal.style.display = "flex";
    }
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close if click outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



