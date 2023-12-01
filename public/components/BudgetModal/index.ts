import Template from "./template.hbs";
import "../../static/css/audience.css";
import Api from "../../modules/api";

interface AddBudgetRequestData {
  amount: number;
}

function BudgetModal() {
  const content = document.createElement("div");
  content.className = "budget";
  content.id = "budgetModal";
  content.innerHTML = Template({});

  const render = () => {
    const appContainer = document.getElementById("root");
    if (appContainer) {
      appContainer.appendChild(content);
    }

    const openBudgetModalBtn: HTMLElement | null =
      document.querySelector("#budgetModalButton");
    const closeBudgetModalBtn: HTMLElement | null =
      document.querySelector("#closeBudgetModal");
    const budgetModal: HTMLElement | null =
      document.querySelector("#budgetModal");
    const addBalanceBtn: HTMLElement | null =
      document.querySelector("#addBalanceBtn");
    const balanceInput: HTMLInputElement | null =
      document.querySelector("#amount");
    const cont: HTMLElement | null = document.querySelector("#content");

    if (budgetModal && balanceInput && cont) {
      openBudgetModalBtn?.addEventListener("click", () => {
        cont?.classList.add("blurred-background");
        budgetModal.style.display = "block";
      });

      closeBudgetModalBtn?.addEventListener("click", () => {
        cont?.classList.remove("blurred-background");
        budgetModal.style.display = "none";
      });

      addBalanceBtn?.addEventListener("click", () => {
        const balance = parseFloat(balanceInput.value);
        const requestData: AddBudgetRequestData = {
          amount: 0,
        };
        requestData["amount"] = Number(balanceInput.value);
        console.log(requestData);
        if (!isNaN(balance) && balance > 0) {
          Api.addBalance(requestData)
            .then((data) => {
              console.log("Баланс пополнен:", data);
              budgetModal.style.display = "none";
              cont.classList.remove("blurred-background");
            })
            .catch((error) => {
              console.error("Ошибка при пополнении баланса:", error);
            });
        } else {
          alert("Введите корректную сумму для пополнения.");
        }
      });
    }
  };

  return { render };
}

export default BudgetModal;
