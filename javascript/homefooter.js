document.addEventListener("DOMContentLoaded", () => {
  const socialMediaLinks = {
    facebook: "https://www.facebook.com/RobogalsAKL",
    linkedin: "https://www.linkedin.com/company/robogals-auckland",
    instagram: "https://www.instagram.com/robogalsakl/",
  };

  const socialIcons = document.querySelectorAll(".icon");
  const hoverMessage = document.getElementById("hover-message");

  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuIcon.classList.toggle("open");
  });

  socialIcons.forEach((icon) => {
    const name = icon.getAttribute("data-name");

    // Handle icon click
    icon.addEventListener("click", () => {
      const url = socialMediaLinks[name];
      if (url) {
        window.open(url, "_blank");
      }
    });

    // Handle hover (mouse enter)
    icon.addEventListener("mouseenter", () => {
      hoverMessage.textContent = `Follow Us on ${
        name.charAt(0).toUpperCase() + name.slice(1)
      }!`;
    });

    // Handle hover out (mouse leave)
    icon.addEventListener("mouseleave", () => {
      hoverMessage.textContent = "";
    });
  });
});
