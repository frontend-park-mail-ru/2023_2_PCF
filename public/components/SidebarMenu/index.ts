import Template from "./template.hbs";
import "../../static/css/sidebar.css";

function SidebarMenu() {
  const content = document.createElement("div");
  content.className = "sidebar";
  content.innerHTML = Template({});

  const render = () => {
    const appContainer = document.getElementById("content");
    if (appContainer) {
      appContainer.appendChild(content);
    }

    const sidebar = document.querySelector(".sidebar") as HTMLElement;

    const mobileButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(
      ".sidebar-mobile__menu"
    ) as HTMLElement;
    const desktopSidebarLogo = document.querySelector(
      ".sidebar__logo-container"
    ) as HTMLElement;
    const desktopSidebarContainer = document.querySelector(
      ".sidebar__menu"
    ) as HTMLElement;

    if (mobileButton) {
      mobileButton.addEventListener("click", () => {
        if (mobileMenu.style.display === "none") {
          mobileMenu.style.display = "block";
          desktopSidebarLogo.style.display = "none";
          desktopSidebarContainer.style.display = "none";
        } else {
          mobileMenu.style.display = "none";
          desktopSidebarLogo.style.display = "block";
          desktopSidebarContainer.style.display = "block";
          sidebar.style.backgroundColor = "#000";
        }
      });

      const mobileMenuCloseButton = document.querySelector(
        ".sidebar-mobile__menu__close-button"
      );

      if (mobileMenuCloseButton) {
        mobileMenuCloseButton.addEventListener("click", () => {
          mobileMenu.style.display = "block";
          desktopSidebarLogo.style.display = "none";
          desktopSidebarContainer.style.display = "none";
          sidebar.style.backgroundColor = "transparent";
        });
      }
    }
  };

  return { render };
}

export default SidebarMenu;
