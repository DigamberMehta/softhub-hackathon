window.onload = function() {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const hamburger = document.querySelector("#hamburger-btn");
    const platformText = document.querySelector(".platform-text");
    const iconElement = document.querySelector(".heading-link .link_name i");
  
    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.add("bx-menu-alt-right");
            iconElement.className = "";
            platformText.textContent = "Platform";
        } else {
            closeBtn.classList.remove("bx-menu-alt-right");
            iconElement.className = "bx bx-minus";
            platformText.textContent = "";
        }
    }
  
    menuBtnChange();
  
    closeBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        menuBtnChange();
    });
  
    function toggleSidebar() {
        sidebar.classList.toggle("open");
        menuBtnChange();
    }
  
    hamburger.addEventListener("click", toggleSidebar);
  
    handleWindowSizeChange();
  //   window.addEventListener("resize", handleWindowSizeChange);  //commented due unknown error
  };
  