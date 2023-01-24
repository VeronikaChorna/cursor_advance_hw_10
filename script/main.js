// const button = document.querySelector("#submit-btn");
// const removeBtn = document.querySelector("#remove");

// const bgColors = ["red", "blue", "aqua", "green"];

// // button.onclick = onBtnPress;

// function onButtonClick(e) {
//   setBtnStyles(e.target);
// }

// function setBtnStyles(el) {
//   const randomColor = Math.floor(Math.random() * (bgColors.length + 1));

//   el.style.backgroundColor = bgColors[randomColor];
// }

// button.addEventListener("click", onButtonClick);

// removeBtn.addEventListener("click", () => {
//   button.style.display = "none";
//   button.removeEventListener("click", onButtonClick);
// });

// ----------------------------------------------------------------------------------------------------------------


// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// let inputValue = "";

// input.addEventListener("input", function (e) {
//   inputValue = e.target.value;
// });

// btn.addEventListener("click", () => {
//   checkIsInputValid(input, validateEmail(inputValue));
// });

// function validateEmail(email) {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// }

// function checkIsInputValid(el, regExTest) {
//   if (regExTest == null) {
//     el.style.border = "2px solid red";
//     return;
//   }

//   el.style.border = "2px solid gray";
// }


// -----------------------------------------------------------------------------------------------------------------

// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// let inputValue = "";
let isWButtonPressed = false;
// ------------------------"keyup" 
document.addEventListener("keydown", (e) => {
  if (isWButtonPressed) {
    return;
  }

  if (e.code === "KeyW") {
    isWButtonPressed = true;
  }

  console.log("your pressed key: ", { e });
});

// document.addEventListener("keyup", (e) => {
//   if (e.code === "KeyW") {
//     isWButtonPressed = false;
//   }

//   console.log("your pressed key: ", { e });
// });


// -----------------------------------------------------------------------------------------------------------------
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// let inputValue = "";
// let isButtonPressed = false;

// btn.addEventListener("click", () => {
//   isButtonPressed = true;
//   btn.style.position = "absolute";
// });

// document.addEventListener("mousemove", function (event) {
//   if (isButtonPressed) {
//     mouseMoove(event.clientX, event.clientY);
//   }
// });

// function mouseMoove(x, y) {
//   btn.style.left = x + "px";
//   btn.style.top = y + "px";
// }

// -----------------------------------------------------------------------------------------------------------------
