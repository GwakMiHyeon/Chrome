const quotes = [
    {
        quote: "편견을 버리기에 너무 늦은 때는 없다.",
        author: "헨리 데이비드 소로우",
    },
    {
        quote: "진실의 가장 큰 친구는 시간이고, 진실의 가장 큰 적은 편견이며, 진실의 영원한 반려자는 겸손이다.",
        author: "찰스 칼렙 콜튼",
    },
    {
        quote: "나는 힘과 자신감을 찾아 항상 바깥으로 눈을 돌렸지만, 자신감은 내면에서 나온다. 자신감은 항상 그곳에 있다.",
        author: "안나 프로이트",
    },
    {
        quote: "스스로를 존경하면 다른 사람도 당신을 존경할 것이다.",
        author: "공자",
    },
    {
        quote: "지속적인 긍정적 사고는 능력을 배가시킨다.",
        author: "콜린 파월",
    },
    {
        quote: "비관론자는 기회가 와도 위기만 보고 낙관론자는 위기가 와도 기회만 찾는다.",
        author: "처칠",
    },
    {
        quote: "운 따위는 없다. 실행 능력이 있어야 운이 왔을 때 잡을 수 있다.",
        author: "김미경",
    },
    {
        quote: "편견을 버리기에 너무 늦은 때는 없다.",
        author: "샤론 샐즈버그",
    },
    {
        quote: "성실함의 잣대로 스스로를 평가하라. 그리고 관대함의 잣대로 남들을 평가하라.",
        author: "존 미첼 메이슨",
    },
    {
        quote: "한 걸음, 한 걸음씩 나아가는 것, 어떤 일을 하든 목표를 달성하는 데 이보다 뛰어난 방법은 없다.",
        author: "마이클 조던",
    }
]

const quote = document.querySelector("#quote > span:first-child");
const author = document.querySelector("#quote > span:last-child");

// Math.random() : 랜덤실행
// Math.round() : 반올림
// Math.ceil() : 높은올림(1.1 > 2)
// Math.floor() : 낮은올림(1.9 > 1)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// innerText로 각 span에 해당하는 명언과 이름 넣어주기
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
