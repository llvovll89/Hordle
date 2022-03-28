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

에러 ) 
1. ~~5글자를 치고 Enter / button click 시 새로 나오는 input 5칸이 위치가 안맞음 (수정 전)~~

수정 할 점)
1. 성공 시에 보일 modal 창으로 clear 했다고 알려주기
2. 위 에러 수정 및 UI 개선
3. 모바일 사이즈에만 맞추어져 있으므로, pc 환경 사이즈 UI 
