const img = document.getElementById("img");
const buttons = document.getElementsByTagName("button");

const removeclass = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.background = "#fff";
  }
};

const topleft = () => {
  img.className = "img";
  img.classList.add("top-left");
  removeclass();
  document.getElementById("button-tl").style.background = "#ffd500";
};

const topright = () => {
  img.className = "img";
  img.classList.add("top-right");
  removeclass();
  document.getElementById("button-tr").style.background = "#ffd500";
};

const bottomleft = () => {
  img.className = "img";
  img.classList.add("bottom-left");
  removeclass();
  document.getElementById("button-bl").style.background = "#ffd500";
};

const bottomright = () => {
  img.className = "img";
  img.classList.add("bottom-right");
  removeclass();
  document.getElementById("button-br").style.background = "#ffd500";
};
