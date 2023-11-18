document.addEventListener("DOMContentLoaded", function () {
    // Selectors
    var linksWithDropdown = document.querySelectorAll(
      "nav ul li a:not(:only-child)"
    );
    var navDropdowns = document.querySelectorAll(".nav-dropdown");
    var html = document.querySelector("html");
    var navToggle = document.getElementById("nav-toggle");
    var fabLinks = document.querySelectorAll(".fab-link");
    var multiLink = document.querySelector(".multi-link");
    var parentMultiLink = document.querySelector(".parent-ml");
    var closeButtom = document.querySelector(".close-button");
  
    // Event listener for links with dropdowns
    linksWithDropdown.forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (this.nextElementSibling) {
          var siblingDropdown = this.nextElementSibling;
          siblingDropdown.style.display = "block";
  
          e.stopPropagation();
        }
      });
    });
  
    // Event listener to close dropdowns on outside click
    html.addEventListener("click", function () {
      var isClickWithinClass = event.target.closest(".nav-dropdown") !== null;
  
      // Close dropdowns and reset multiLink styles
      if (!isClickWithinClass) {
        navDropdowns.forEach(function (dropdown) {
          dropdown.style.display = "none";
          multiLink.style.borderBottom = "0px";
          multiLink.style.paddingBottom = "0px";
        });
      }
    });
  
    // Event listener for fab links
    fabLinks.forEach(function (fabLink) {
      fabLink.addEventListener("click", function (event) {
        // Confirm before navigating to another domain
        event.preventDefault();
        let text =
          "You are going to another domain!\nPress OK to proceed or Cancel to stay.";
        if (confirm(text)) {
          text = "You pressed OK!";
          // Add logic to navigate to the link if needed
        } else {
          text = "You canceled!";
        }
      });
    });
  
    // Burger menu toggle
    navToggle.addEventListener("click", function () {
      var navUl = document.querySelector("nav ul");
      navUl.style.display = navUl.style.display === "block" ? "none" : "block";
      this.classList.toggle("active");
    });
  
    parentMultiLink.addEventListener("click", function () {
      multiLink.style.borderBottom = "4px solid #00AEEF";
      multiLink.style.paddingBottom = "4px";
    });
  
    closeButtom.addEventListener("click", function () {
      navDropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
        multiLink.style.borderBottom = "0px";
        multiLink.style.paddingBottom = "0px";
      });
    });
  });
  