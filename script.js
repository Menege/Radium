"use strict";

let text = document.querySelector(".text");

text.addEventListener("click", () => {
  text.style.display = "none";
});

document.addEventListener("keyup", (e) => {
  if (e.code === 'Space') {
    text.remove();
  }
});
