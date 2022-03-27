const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
// 정답
const answer = "김건호존잘";

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
  }
  const form = document.getElementById("form");
  const template = `<div class ="input-box">
  <input type="text" class="input">
  <input type="text" class="input">
  <input type="text" class="input">
  <input type="text" class="input">
  <input type="text" class="input">
</div>`;
  form.insertAdjacentHTML("beforeend", template);
});
