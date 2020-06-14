import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [useDark, setUseDark] = useLocalStorage("dark", true);

  useEffect(() => {
    const app = document.querySelector(".App");
    const appHeader = document.getElementById("App-header");
    const evens = document.querySelectorAll(".even-styles");
    const odds = document.querySelectorAll(".odd-styles");
    const footer = document.querySelector(".footer-container");
    const anchor = document.querySelectorAll("a");
    if (useDark) {
      app.classList.add("dark-mode");
      appHeader.classList.add("dark-mode-background");
      footer.classList.add("dark-mode-background");
      anchor.forEach((a) => a.classList.add("dark-mode"));
      // evens.forEach((e) => e.classList.add("dark-mode-background"));
      // odds.forEach((e) => (e.style.backgroundColor = "#69868c"));
    } else {
      app.classList.remove("dark-mode");
      appHeader.classList.remove("dark-mode-background");
      footer.classList.remove("dark-mode-background");
      anchor.forEach((a) => a.classList.remove("dark-mode"));
      // evens.forEach((e) => e.classList.remove("dark-mode-background"));
      // odds.forEach((e) => (e.style.backgroundColor = "#a6d5df"));
    }
  }, [useDark]);

  return [useDark, setUseDark];
};
