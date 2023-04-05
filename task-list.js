"use strict";
// let todos = [
//   {
//     month: '2021-07',
//     progress: '済',
//     title: 'A社経営統合プロジェクト',
//     overview: 'プロジェクトリーダーとして担当。QDC目標いずれも達成。CS評価で５をいただいた',
//   },
//   {
//     month: '2021-09',
//     progress: '進行中',
//     title: 'B社経営統合プロジェクト',
//     overview: 'テストテストテストテストテストテストテストテストテスト',
//   }
// ];
let todos = null;
// let htmlStr = null;
if (localStorage.getItem("todos")) {
  const todosStr = localStorage.getItem("todos");
  todos = JSON.parse(todosStr);
  console.log(todos);
} else {
  todos = [];
}
// todo画面追加
const wrapper = document.getElementById("wrapper");
let htmlStr = "";
for (let i = 0; i < todos.length; i++) {
  htmlStr += `<tr id="task${i}">
  <td>${todos[i].month}</td>
  <td>${todos[i].progress}</td>
  <td>${todos[i].title}</td>
  <td>${todos[i].overview}</td>
  <td><button type="button" id="delete${i}">削除</button></td>
  </tr>
  `;
}
wrapper.innerHTML = htmlStr;
let deleteButton = [];
let todoElement = [];
for (let i = 0; i < todos.length; i++) {
  // const delete
  deleteButton[i] = document.getElementById(`delete${i}`);
  todoElement[i] = document.getElementById(`task${i}`);
  deleteButton[i].onclick = () => {
    const index = `delete${i}`.replace("delete", "");
    // todos = todos.splice(index, 1);
    todos.splice(index, 1);
    console.log(1);
    todoElement[i].remove();
    const todoStr = JSON.stringify(todos);
    localStorage.setItem("todos", todoStr);
  };
  // 消したあとインデックスがずれる
}

// todo登録
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
  // console.log(todo);
  todos.push(todo);
  // todo反映
  const wrapper = document.getElementById("wrapper");
  let htmlStr = "";
  for (let i = 0; i < todos.length; i++) {
    htmlStr += `<tr id="task${i}">
  <td>${todos[i].month}</td>
  <td>${todos[i].progress}</td>
  <td>${todos[i].title}</td>
  <td>${todos[i].overview}</td>
  <td><button type="button" id="delete${i}">削除</button></td>
  </tr>
  `;
  }
  wrapper.innerHTML = htmlStr;
  let deleteButton = [];
  let todoElement = [];
  for (let i = 0; i < todos.length; i++) {
    // const delete
    deleteButton[i] = document.getElementById(`delete${i}`);
    todoElement[i] = document.getElementById(`task${i}`);
    deleteButton[i].onclick = () => {
      const index = `delete${i}`.replace("delete", "");
      // todos = todos.splice(index, 1);
      todos.splice(index, 1);
      console.log(1);
      todoElement[i].remove();
    };
    // 消したあとインデックスがずれる
  }
  const todoStr = JSON.stringify(todos);
  localStorage.setItem("todos", todoStr);
};
// ボタンが押されたら
// formからオブジェクトを生成
// ストレージに追加
// オブジェクトをDOMで追加
// 削除されたらストレージから削除
// debugger;
// この段階では、タスクがない
// 参照を連番でとってきて、その参照にたいてい、イベントハンドラをループで追加すればいい
