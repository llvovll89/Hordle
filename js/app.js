const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
// 정답
const answer = "날씨가좋아";

btn1.addEventListener("click", () => {
  const hint = document.querySelector(".hint");
  if (hint.style.display === "none") {
    hint.style.display = "block";
  } else {
    hint.style.display = "none";
  }
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  // 위치
  let input = document.querySelectorAll(".input");

  for (let i = 0; i < 5; i++) {
    if (input[i].value == answer[i]) {
      input[i].style.background = "green";
    } else if (answer.includes(input[i].value)) {
      input[i].style.background = "yellow";
    } else {
      input[i].style.background = "lightgrey";
    }
    input[i].classList.remove("input");
  }

  const form = document.getElementById("form");
  const template = `<div classe="input-box">
  <input type="text" class="input" maxlength="1">
  <input type="text" class="input" maxlength="1">
  <input type="text" class="input" maxlength="1">
  <input type="text" class="input" maxlength="1">
  <input type="text" class="input" maxlength="1">
  </div>`;
  form.insertAdjacentHTML("beforeend", template);
});
