// MyBank demo frontend.
// IMPORTANT: This is a front-end demo only. Do not use client-side credentials
// for a real financial application.

const DEMO_PHONE = "07030528292";
const DEMO_PIN = "123456";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");

  if (loginForm) {
    if (sessionStorage.getItem("mybankLoggedIn") === "true") {
      window.location.href = "dashboard.html";
      return;
    }

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const phone = document.querySelector("#phone").value.trim();
      const pin = document.querySelector("#pin").value.trim();
      const error = document.querySelector("#loginError");

      if (phone === DEMO_PHONE && pin === DEMO_PIN) {
        sessionStorage.setItem("mybankLoggedIn", "true");
        window.location.href = "dashboard.html";
      } else {
        error.textContent = "Incorrect phone number or PIN.";
      }
    });
  }

  const logoutBtn = document.querySelector("#logoutBtn");
  if (logoutBtn) {
    if (sessionStorage.getItem("mybankLoggedIn") !== "true") {
      window.location.href = "index.html";
      return;
    }

    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("mybankLoggedIn");
      window.location.href = "index.html";
    });
  }

  const toggleBalance = document.querySelector("#toggleBalance");
  if (toggleBalance) {
    let visible = true;
    toggleBalance.addEventListener("click", () => {
      visible = !visible;
      document.querySelector("#balance").textContent =
        visible ? "₦9,999,880.00" : "₦••••••••••";
    });
  }
});
