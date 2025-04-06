// Smooth scroll untuk semua anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // Tombol back to top (jika ada)
  const backToTopBtn = document.getElementById("backToTop");
  
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
  
  // Animasi saat scroll ke elemen
  const sections = document.querySelectorAll(".fade-up");
  
  const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
  
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
  
      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };
  
  window.addEventListener("scroll", showOnScroll);
  window.addEventListener("load", showOnScroll);
  