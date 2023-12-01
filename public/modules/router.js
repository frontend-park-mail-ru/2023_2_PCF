import BudgetModal from "../components/BudgetModal/index";
import SidebarMenu from "../components/SidebarMenu/index";
import Api from "./api.js";

export default class Router {
  constructor(routes = new Map()) {
    this.routes = routes;
    this.current = null;
    this.budgetModal = BudgetModal();
    this.sidebar = SidebarMenu();
  }

  resetPage() {
    const appContainer = document.getElementById("root");
    if (appContainer) {
      appContainer.innerHTML = "<div id='content'></div>";
    }
  }

  go(path) {
    console.log("go  " + path);
    // if (this.current === path) return;
    this.resetPage(); // Сбрасываем контент страницы
    this.current = path;
    window.history.pushState(null, null, path);
    if (!this.routes.has(path)) {
      console.log("No path found " + path);
      this.routes.get("/notfound")();
      return;
    }
    this.routes.get(path)();

    if (!path.includes("login") && !path.includes("signup")) {
      this.sidebar.render(); // Рендерим боковое меню в личном кабинете
      this.budgetModal.render(); // Фоном рендерим модалку добавления бюджета
    }
  }

  add(path, callback) {
    this.routes.set(path, callback);
  }

  start() {
    document.addEventListener("click", (evt) => {
      const linkElement = evt.target.closest("a");

      if (linkElement) {
        evt.preventDefault();
        this.go(linkElement.pathname);
      }
    });

    window.addEventListener("popstate", () => {
      this.go(window.location.pathname);
    });

    this.go(window.location.pathname);
  }
}
