document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
  });
  document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
      document.querySelectorAll(".sub-menu").forEach(sub => sub.style.display = "none");
      const targetId = item.getAttribute("data-sub");
      document.getElementById(targetId).style.display = "block";
    });
    item.addEventListener("mouseleave", () => {
      const targetId = item.getAttribute("data-sub");
      document.getElementById(targetId).style.display = "none";
    });
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
  }
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
  
  const totalPages = 115;
  const paginationEl = document.querySelector(".pagination");
  function renderPagination(current) {
    let html = "";
    if (current > 1) html += `<button data-page="${current-1}">◀</button>`;
    for (let i = 1; i <= Math.min(5, totalPages); i++) {
      html += `<button data-page="${i}" class="${i===current?'active':''}">${i}</button>`;
    }
    if (totalPages > 5) html += `...<button data-page="${totalPages}">${totalPages}</button>`;
    if (current < totalPages) html += `<button data-page="${current+1}">▶</button>`;
    paginationEl.innerHTML = html;
  }
  paginationEl.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      const page = Number(e.target.getAttribute("data-page"));
      renderPagination(page);
    }
  });
  renderPagination(1);