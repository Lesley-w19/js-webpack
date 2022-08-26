import _ from "lodash";

import API from "!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js";

require("./styles.scss");
require("./color.js");
const createelement = () => {
  const element = document.createElement("div");
  element.classList.add("element");
  element.innerHTML = _.join(["Webpack", "Examples!!"], "  ");

  return element;
};
document.body.appendChild(createelement());

const list = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const showList = () => {
  const list_items = document.querySelector(".list-wrapper");

  list_items.innerHTML = list
    .map((l) => {
      return `
    <ul>
    <li>${l}</li>
    </ul>
    `;
    })
    .join("");

  return list_items;
};

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  showList();
});

const image =
  "https://images.pexels.com/photos/11004341/pexels-photo-11004341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
document.querySelector(".btn-image").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".img-wrapper").innerHTML = `<img src=${image} />`;
});
