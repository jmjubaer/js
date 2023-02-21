const boldButton = document.getElementById("boldButton");
const textToStyles = document.getElementById("textToStyles");
let isBold = false;

boldButton.addEventListener("click", function () {
  if (isBold) {
    textToStyles.style.fontWeight = "normal";
  } else {
    textToStyles.style.fontWeight = "bold";
  }
  isBold = !isBold;
});

const italicButton = document.getElementById("italicButton");
const textToStyle = document.getElementById("textToStyle");

let isItalic = false;

function toggleItalicStyle() {
  if (isItalic) {
    textToStyle.style.fontStyle = "normal";
  } else {
    textToStyle.style.fontStyle = "italic";
  }
  isItalic = !isItalic;
}

italicButton.addEventListener("click", toggleItalicStyle);

