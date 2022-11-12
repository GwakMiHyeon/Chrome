const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 6. []로 인해 항상 빈 array로 시작하여 새로운 정보도 빈 array로 push되기 때문에
// 기존의 정보는 새로운 정보에 의해 사라지게 되었음
// 그래서 기존에 있던 정보를 복원시켜주고
// 복원시킨 정보에 새로운 정보가 추가로 저장될 수 있도록 수정해야 함
let toDos = []; //let으로 변수생성 후 하단에서 수정하며 정보가 업데이트되도록 해야함

const TODOS_KEY = "todos";

// 4. todo리스트를 f5하면 사라지지 않도록 정보를 저장하기
// → localStorage를 통해 정보가 저장되지만 f5후 새로운 value가 입력되면
//   기존에 있던 정보는 사라지고 새로운 정보가 다시 저장됨
// 4.3 위의 문제를 해결하기 위해 저장되는 정보의 요소를 string으로 변경해서 객체(array)로 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 3. todo리스트에 작성한 목록을 삭제할 버튼 생성
// → 버튼을 클릭할 때 해당하는 목록이 삭제되어야 함
function deleteToDo(event) {
    const li = event.target.parentElement; //target: 현재 이벤트가 발생하고 있는 element
    // 7.1 목록을 삭제하기 전 li에 해당하는 ID를 가져와야 데이터를 삭제할 수 있음
    // console.log(li.id);
    li.remove();

    // 8. forEach는 배열의 요소(item)마다 작동 됌.
    // array에서 목록을 삭제했을 때 실제로 일어나는 효과로는
    // 지우고 싶은 item을 제외하고(기존 데이터는 남아있음) 새로운 array를 만드는 것이다.
    // → filter : 반드시 true를 리턴함(새로운 array에서 object를 유지하고 싶다면 filter함수는 반드시 true를 리턴해야함.)
    // 8.1 해당하는 ID는 제외하고 나머지는 그대로 출력
    // → toDo.id는 number타입이고 li.id는 string타입이라서 타입수정이 필요
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos(); //li를 삭제했으니 다시 저장하기 위해 saveToDos()를 호출.
}

// 2. input의 value를 비우기 전의 값을 나타내는 newToDo(string 요소)
// html에 생성된 ul(todo-list)에 스크립트를 통해 li(목록생성), span(value호출), button(목록삭제)을 생성하고 각 요소에 알맞은 효과 추가
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //todo리스트 입력될 때 li에 ID도 함께 출력
    const span = document.createElement("span");
    // span.innerText = newTodo; //newTodo의 value값이 span에 생성

    // 7의 paintToDo(newTodoObj)의 출력값이 [object Object]로 나오기 때문에
    // 실제글씨가 나오기 위해서 newTodo.text로 수정
    span.innerText = newTodo.text; //object의 text
    
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span); //li > span
    li.appendChild(button);
    toDoList.appendChild(li);
} //paintToDo

// 1. input에 value가 입력될 때 저장하도록 만들기
function handleToDoSubmit(event) {
    event.preventDefault();
    
    // input의 현재 value를 새로운 변수에 복사
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    // 7. x버튼을 눌러 todo리스트의 목록을 삭제해도 localStorage에 저장되어 있는
    // 정보는 삭제가 되지 않음
    // → 저장된 정보를 삭제하기 전 array요소를 object요소로 수정하는 것 먼저!
    const newTodoObj = {
        text : newTodo,
        id : Date.now(), //Date.now() : 밀리초(1000/1)를 주는 함수를 통해 랜덤숫자처럼 아이디를 지정 
    }

    // 4.1 텍스트(newTodo)를 toDos array에 push해주면 화면에 todo를 (paint)그려줌
    // toDos.push(newTodo);
    // paintToDo(newTodo); 
    
    // 7.1 newTodo를 object로 변환시켜서 push한 후 newTodoObj를 출력
    // → 4번의 paintToDo는 newTodo의 text만 가지고 있기에 object를 갖고 있는 newTodoObj를 준 것
    toDos.push(newTodoObj); 
    paintToDo(newTodoObj);
    
    // 4.2 saveToDos를 통해 toDo들을 저장
    saveToDos();
    

} //handleToDoSubmit

toDoForm.addEventListener("submit", handleToDoSubmit);

// 5. 4번의 string으로 만들어진 요소들을 javascript에서 사용이 가능한 object로 변환
// → 아래의 경우는 array로 변환
const savedToDos = localStorage.getItem(TODOS_KEY);
// → todo에 값이 없으면 결과값이 null이 나오기도 함. 그것을 방지하기 위해 if사용!

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // 6.1 parsedToDos를 통해 기존에 있던 todo데이터들을 복원
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
    // forEach는 array의 각 item에 대해 function을 실행시켜줌
    // → array가 3개(a,b,c)가 있다면 5개의 item을 모두 실행시켜주기에 3개(a,b,c)의 실행결과가 나옴
}


