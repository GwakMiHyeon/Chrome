// form을 통해 유저의 정보받기(form의 기본 동작은 submit)
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form > input");
const greeting = document.querySelector("#greeting");

// string만을 변수로 지정할 때는 대문자로 변수명을 지정함
// + 변수명으로 오타가 났을 시 스크립트가 오류를 말해줌(오타수정이 쉬워짐)
const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username";

function onLoginBtnSubmit(event) {
    event.preventDefault();
    
    // 1. 유저가 이름을 입력하면 className을 연결해 Form을 안보이게 만듦
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    // 2. Form이 보이지 않는 상태일 때 h1은 보이게 만들기
    // greeting.innerText = "Hello " + username;
    paintGreetings(username); 

    // 3. 같은 질문을 계속 물어볼 순 없으니 value 저장하기
    // → setItem을 이용해 local storage에 정보저장(Application에서 볼 수 있음)
    /*
        localStorage.setItem("username", "미현"); //Key: username, Value: 미현이 저장됨
        localStorage.getItem("username"); //username인 미현을 불러옴
        localStorage.removeItem("username"); //username의 정보를 삭제함
    */
    localStorage.setItem(USERNAME_KEY, username);    
}

loginForm.addEventListener("submit", onLoginBtnSubmit);

// 4. local storage에 username이라는 정보가 저장되어 있다면 
// 또 같은 질문을 하지 않기 위해 저장유무를 확인 후 form을 보이지 않도록 하기
// → 저장이 안되어있으면 결과값이 null로 나옴
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnSubmit);
} else {
    paintGreetings(savedUsername);
};

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 2.과 if-else에서 중복되므로 함수로 지정해서 사용
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`; //`` : 백틱(물결있는 자판)
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 정리
// 1. local storage에서 유저정보가 저장되어 있으면 정보를 받아 인자로 넣어 Hello미현이 출력
// 2. local storage에서 username정보가 저장되어 있지 않으면
//    form의 submit을 기다린 후 input에서 유저 정보를 받아 저장하고 paintFreetings를 호출함
//    이후 form은 안보이게 되고 저장된 정보인 Hello미현이 출력됨

