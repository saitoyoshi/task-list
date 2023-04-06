"use strict";
// fixme:追加して、削除して、更新すると、復活する.localstrageが消えない、localstrageが消えていないのが原因
let todos = null;
if (localStorage.getItem("todos")) {
  const todosStr = localStorage.getItem("todos");
  todos = JSON.parse(todosStr);
} else {
  todos = [];
}
renderTodos(todos);


let deleteButton = [];
let todoElement = [];
for (let i = 0; i < todos.length; i++) {
  deleteButton[i] = document.getElementById(`delete${i}`);
  todoElement[i] = document.getElementById(`task${i}`);
  deleteButton[i].onclick = () => {
    const index = `delete${i}`.replace("delete", "");
    todos.splice(index, 1);
    todoElement[i].remove();
    renderTodos(todos);
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("todos", todoStr);
  };
}

const button = document.getElementById("regist");
button.onclick = () => {
  const month = document.getElementById("month");
  const progress = document.getElementById("progress");
  const title = document.getElementById("title");
  const overview = document.getElementById("overview");
  const todo = {
    month: month.value,
    progress: progress.value,
    title: title.value,
    overview: overview.value,
  };
  todos.push(todo);
  renderTodos(todos);
  const todoStr = JSON.stringify(todos);
  localStorage.setItem("todos", todoStr);
  let deleteButton = [];
  let todoElement = [];
  for (let i = 0; i < todos.length; i++) {
    deleteButton[i] = document.getElementById(`delete${i}`);
    todoElement[i] = document.getElementById(`task${i}`);
    deleteButton[i].onclick = () => {
      const index = `delete${i}`.replace("delete", "");
      todos.splice(index, 1);
      todoElement[i].remove();
      const todoStr = JSON.stringify(todos);
    localStorage.setItem("todos", todoStr);
    };
  }
};

function renderTodos(todos) {
  const wrapper = document.getElementById("wrapper");
  let htmlStr = "";
  for (let i = 0; i < todos.length; i++) {
    htmlStr += `<tr id="task${i}">
  <td>${todos[i].month}</td>
  <td>${todos[i].progress}</td>
  <td>${todos[i].title}</td>
  <td>${todos[i].overview}</td>
  <td><button type="button" id="delete${i}" class="btn btn-danger">削除</button></td>
  </tr>
  `;
  }
  wrapper.innerHTML = htmlStr;
}
