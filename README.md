## Hordle (단어맞추기 게임)

``` Javascript
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
```
위에 for 문을 이용해 5칸의 글자에 맞춰 색깔 구별을 하였습니다.
