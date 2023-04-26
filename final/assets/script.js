function scrollToSection(tabId) {
    // Get the section we want to scroll to
    const section = document.getElementById(tabId);
  
    // Use the scrollIntoView method to scroll to the section
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  const menuContainer = document.getElementById("menuContainer");
  const flower = document.getElementById("flower");
  
  const moveFlower = (tabButton) => {
    const buttonRect = tabButton.getBoundingClientRect();
    flower.style.top = (buttonRect.top + 12) + "px";
    flower.style.left = (buttonRect.right + 18) + "px";
  };
  
  menuContainer.addEventListener("click", (event) => {
    const tabButton = event.target;
  
    // Check if the clicked element has the menuButton class
    if (tabButton.classList.contains("menuButton")) {
      moveFlower(tabButton);
      // Get the tab id from the data-tab attribute and scroll to the section
      const tabId = tabButton.getAttribute("data-tab");
      scrollToSection(tabId);
    }
  });
  
  function createIntersectionObserver() {
    const tabs = document.querySelectorAll('[id$="Tab"]');
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tabId = entry.target.id;
          const menuButtonId = tabId.replace("Tab", "Button");
          const menuButton = document.getElementById(menuButtonId);
  
          if (menuButton) {
            moveFlower(menuButton);
          }
        }
      });
    };
  
    const observerOptions = {
        rootMargin: "-49.5% 0px -49.5% 0px",
        threshold: 0,
      };
      
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    tabs.forEach((tab) => {
      observer.observe(tab);
    });
  }
  
  createIntersectionObserver();
  
  window.addEventListener("load", () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  
    // Scroll to the homeTab
    scrollToSection("homeTab");

  });
  
  