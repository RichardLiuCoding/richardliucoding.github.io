"use strict";
document.documentElement.classList.add("js");
const config = window.LAB_CONFIG || {};
const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
if (menu && navigation) {
  function closeMenu() { navigation.classList.remove("is-open"); menu.setAttribute("aria-expanded", "false"); menu.textContent = "Menu"; }
  menu.addEventListener("click", () => { const opened = menu.getAttribute("aria-expanded") !== "true"; menu.setAttribute("aria-expanded", String(opened)); menu.textContent = opened ? "Close" : "Menu"; navigation.classList.toggle("is-open", opened); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") { closeMenu(); menu.focus(); } });
  navigation.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
  window.matchMedia("(min-width: 821px)").addEventListener("change", event => { if (event.matches) closeMenu(); });
}
function safeWebUrl(value) { try { const url = new URL(value, window.location.href); return /^(https?:|file:)$/.test(url.protocol) ? url.href : null; } catch { return null; } }
const email = typeof config.email === "string" ? config.email.trim() : "";
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
if (validEmail) {
  document.querySelectorAll("[data-contact]").forEach(link => { link.href = "mailto:" + email + "?subject=" + encodeURIComponent(link.dataset.subject || "Research inquiry"); });
  document.querySelectorAll("[data-email]").forEach(el => { el.textContent = email; });
  document.querySelectorAll("[data-email-ready]").forEach(el => { el.hidden = false; });
  document.querySelectorAll("[data-email-missing]").forEach(el => { el.hidden = true; });
} else {
  document.querySelectorAll("[data-direct-contact]").forEach(el => { el.hidden = true; });
}
for (const key of ["facultyUrl", "githubUrl", "scholarUrl", "cvUrl"]) {
  const url = config[key] && safeWebUrl(config[key]);
  document.querySelectorAll(`[data-config-link="${key}"]`).forEach(link => { if (url) { link.href = url; link.hidden = false; } else { link.hidden = true; } });
}
document.querySelectorAll("[data-year]").forEach(el => { el.textContent = String(new Date().getFullYear()); });
