import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [useDark, setUseDark] = useLocalStorage("dark", true);

  useEffect(() => {
    const body = document.querySelector("body")
    const app = document.querySelector(".App");
    const appHeader = document.getElementById("App-header");
    const anchor = document.querySelectorAll("a");
    if (useDark) {
      body.classList.add("dark-mode");
      app.classList.add("dark-mode");
      appHeader.classList.add("dark-mode-background");
      anchor.forEach((a) => a.classList.add("dark-mode"));
    } else {
      body.classList.remove("dark-mode");
      app.classList.remove("dark-mode");
      appHeader.classList.remove("dark-mode-background");
      anchor.forEach((a) => a.classList.remove("dark-mode"));
    }
  }, [useDark]);

  return [useDark, setUseDark];
};
