// SMOOTH SCROLL
document.querySelectorAll("nav ul li").forEach((item, index) => {
  item.addEventListener("click", () => {
    const sections = document.querySelectorAll("section");
    sections[index].scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ACTIVE NAVBAR HIGHLIGHT
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("nav ul li");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("class");
    }
  });

  navItems.forEach(li => {
    li.style.color = "white";
    if (li.textContent.toLowerCase().includes(current)) {
      li.style.color = "#00B4D8";
    }
  });
});


// CONTACT FORM (TEMP FUNCTION)
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
});


// OPTIONAL: SCROLL SHADOW NAVBAR
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});