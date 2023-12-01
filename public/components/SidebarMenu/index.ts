import Template from "./template.hbs";
import "../../static/css/sidebar.css";

function SidebarMenu() {
  var removeListener = false;

  const content = document.createElement("div");
  content.className = "sidebar";
  content.innerHTML = Template({});

  const mobileContent = document.createElement("div");
  mobileContent.className = "sidebar-mobile__menu";
  mobileContent.innerHTML = `
    <button class="mobile-menu-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 18L20 18"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  `;

  const render = () => {
    const appContainer = document.getElementById("content");
    if (appContainer) {
      appContainer.appendChild(content);
      appContainer.appendChild(mobileContent);
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
      if (removeListener) mobileButton.removeEventListener("click", () => {});

      mobileButton.addEventListener(
        "click",
        () => {
          if (!removeListener && mobileMenu.style.display === "none") {
            mobileMenu.style.display = "block";
            desktopSidebarLogo.style.display = "none";
            desktopSidebarContainer.style.display = "none";
            sidebar.style.display = "none";
          } else {
            mobileMenu.style.display = "none";
            desktopSidebarLogo.style.display = "block";
            desktopSidebarContainer.style.display = "block";
            sidebar.style.backgroundColor = "#000";
            sidebar.style.display = "flex";
          }
          removeListener = true;
        },
        { once: true }
      );

      console.log(mobileButton);

      const mobileMenuCloseButton = document.querySelector(
        ".sidebar-mobile__menu__close-button"
      );

      if (mobileMenuCloseButton) {
        mobileMenuCloseButton.addEventListener("click", () => {
          mobileMenu.style.display = "block";
          desktopSidebarLogo.style.display = "none";
          desktopSidebarContainer.style.display = "none";
          sidebar.style.backgroundColor = "transparent";
          sidebar.style.display = "none";
        });
      }

      const menuButtons = document.querySelectorAll(".menu-button");

      if (menuButtons) {
        menuButtons.forEach((mb) => {
          mb.addEventListener("click", () => {
            if (window.innerWidth <= 1280) {
              mobileMenu.style.display = "block";
              desktopSidebarLogo.style.display = "none";
              desktopSidebarContainer.style.display = "none";
              sidebar.style.display = "none";
            }
          });
        });
      }
    }
  };

  return { render };
}

export default SidebarMenu;
