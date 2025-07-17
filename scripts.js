// Toggle Mobile Menu
      const menuToggle = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      const menuIcon = document.getElementById("menu-icon");

      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.add("fade-in");
        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-times");
      });

      // Dark Mode Toggle
      const html = document.documentElement;
      const darkIcon = document.getElementById("dark-icon");
      const darkIconMobile = document.getElementById("dark-icon-mobile");
      const toggleButtons = [document.getElementById("dark-toggle"), document.getElementById("dark-toggle-mobile")];

      toggleButtons.forEach((btn) => {
        btn?.addEventListener("click", () => {
          html.classList.toggle("dark");

          const isDark = html.classList.contains("dark");
          localStorage.setItem("theme", isDark ? "dark" : "light");

          darkIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
          darkIconMobile.className = isDark ? "fas fa-sun" : "fas fa-moon";
        });
      });

      // Load Theme from localStorage
      if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        darkIcon.className = "fas fa-sun";
        darkIconMobile.className = "fas fa-sun";
      } else {
        darkIcon.className = "fas fa-moon";
        darkIconMobile.className = "fas fa-moon";
      }