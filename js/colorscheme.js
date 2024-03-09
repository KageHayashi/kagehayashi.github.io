// colorscheme.js
let switchHandle = document.querySelector("#switch-color-scheme");
let themeIcon = document.querySelector("#theme-icon");
var html = document.documentElement;
var author_photo = document.getElementById("author_photo");

const switchMode = () => {
  let attr = html.getAttribute("color-mode");
  let colorMode = "light";

  if (attr === "light") {
    html.setAttribute("color-mode", "dark");
    themeIcon.classList = "iconfont icon-sun";
    colorMode = "dark";
    if (author_photo.src != "/images/dark.png") {
      author_photo.src = "/images/dark.png";
    }
  } else {
    html.setAttribute("color-mode", "light");
    themeIcon.classList = "iconfont icon-moon";
    colorMode = "light";
    if (author_photo.src != "/images/light.png") {
      author_photo.src = "/images/light.png";
    }
  }
  localStorage.setItem("color-mode", colorMode);
};

switchHandle.addEventListener("click", switchMode, false);

const currColorMode = localStorage.getItem("color-mode");
if (currColorMode === "light") {
  themeIcon.classList = "iconfont icon-moon";
  if (author_photo.src != "/images/light.png") {
    author_photo.src = "/images/light.png";
  }
} else {
  themeIcon.classList = "iconfont icon-sun";
  if (author_photo.src != "/images/dark.png") {
    author_photo.src = "/images/dark.png";
  }
}
