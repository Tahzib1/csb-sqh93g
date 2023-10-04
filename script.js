const themeChangeButton = document.querySelector("#theme-change-button");

themeChangeButton.addEventListener("click", () => {
  const htmlElement = document.querySelector("html");
  const currentTheme = htmlElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    htmlElement.setAttribute("data-theme", "light");
  } else {
    htmlElement.setAttribute("data-theme", "dark");
  }
});
