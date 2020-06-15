import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [useDark, setUseDark] = useLocalStorage("dark", true);

  useEffect(() => {
    const app = document.querySelector(".App");
    const appHeader = document.getElementById("App-header");
    const footer = document.querySelector(".footer-container");
    const anchor = document.querySelectorAll("a");
    const readMe = document.querySelector(".read-me-container");
    // const overlay = document.querySelector(".overlay-text");
    if (useDark) {
      app.classList.add("dark-mode");
      appHeader.classList.add("dark-mode-background");
      footer.classList.add("dark-mode-background");
      anchor.forEach((a) => a.classList.add("dark-mode"));
      // overlay.style.backgroundColor = "lightgray";
    } else {
      app.classList.remove("dark-mode");
      appHeader.classList.remove("dark-mode-background");
      footer.classList.remove("dark-mode-background");
      anchor.forEach((a) => a.classList.remove("dark-mode"));
      // overlay.style.backgroundColor = "gray";
    }
  }, [useDark]);

  return [useDark, setUseDark];
};
