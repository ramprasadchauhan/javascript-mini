let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", (e) => {
  let item = document.createElement("li");
  item.innerText = inp.value;
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add = "delete";
  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", () => {
//     let par = delBtn.parentElement;
//     par.remove();
//   });
// }

ul.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
  }
});
