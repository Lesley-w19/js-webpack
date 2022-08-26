const colrwrapper = document.createElement("div");

const wrpper = document.querySelector(".color-wrapper");

document.querySelector(".btn-color").addEventListener("click", (e) => {
  e.preventDefault();
  wrpper.appendChild(colrwrapper);

  colrwrapper.style.backgroundColor = generateColor();
});

const generateColor = () => {
  var optn = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += optn[Math.floor(Math.random() * 16)];
  }
  return color;
};
