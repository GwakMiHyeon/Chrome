// setInterval과 setTimeout
// setInterval: 지정된 초마다 반복재생
// setTimeout: 지정된 초에 한번 재생
const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    // padStart : string을 지정한 숫자만큼의 자릿수로 만들어줌
    // → "1".padStart(2, "0") : 1, 2, 3 > 01, 02, 03
    // → hello.padStart(5, "x") : xxxxxhello
    // number을 string요소로 변경 후 padStart를 사용해주면 됌.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // window가 로딩 되자마자 실행
setInterval(getClock, 1000); // getClock이라는 function이 1초마다 실행


