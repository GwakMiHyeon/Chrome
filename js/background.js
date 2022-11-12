const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 랜덤으로 배경이미지가 변경되어야 하기때문에
// html에서 이미지를 넣는 것이 아니라 javascript로 추가해서 랜덤실행시키기

// createElement() : 괄호 안에 있는 코드를 생성
const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

// img코드를 생셩했으니 body에 나타내기 위해 bgImage를 생성
document.body.appendChild(bgImage);


