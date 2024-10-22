const toggleBtn = document.querySelector(".btn_toggle");
const priceBasic = document.querySelector(".price.basic");
const priceProfessional = document.querySelector(".price.professional");
const priceMaster = document.querySelector(".price.master");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("right");

  if (toggleBtn.classList.contains("right")){
    /* monthly prices */
    toggleBtn.setAttribute("aria-label", "Switch to Annual Billing");
    priceBasic.textContent = "19.99";
    priceProfessional.textContent = "24.99";
    priceMaster.textContent = "39.99";
  } else {
    /* Annual prices */
    toggleBtn.setAttribute("aria-label", "Switch to Monthly Billing");
    priceBasic.textContent = "199.99";
    priceProfessional.textContent = "249.99";
    priceMaster.textContent = "399.99";
  }
})