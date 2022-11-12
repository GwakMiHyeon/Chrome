// https://openweathermap.org 사이트에서 회원가입 후 이메일로 받은 API_KEY
const API_KEY = "28cbf40d4e4582a118f69ac9f6b807bb";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch : javascript가 (url)을 불러옴
    // fetch는 promise : 반응이(서버의 응답) 나오기까지 시간이 걸림
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather > span:first-child");
        const weather = document.querySelector("#weather > span:last-child");
        
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}℃ (${data.weather[0].main})`;
        // data.weather[0] : weather은 객체여서 첫번째 element를 얻어야함
        // weather: 날씨, temp: 온도
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// getCurrentPosition : 유저의 위치를 얻을 수 있음
// → 2개의 argument(객체)가 필요함(잘 실행됬을때와 오류가 났을 때 실행될 function)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



