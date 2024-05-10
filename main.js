function tambah() {
  tambahkan();
}
function tambahkan() {
  var todo = document.getElementById("todo");
  var text = document.getElementById("text").value;
  var li = document.createElement("li");
  var list = `<div class="listTodo"><div>${text}</div><button id="delet" onclick="delet()">x</button</div>`;
  li.innerHTML = list;
  todo.appendChild(li);
  kosongkan();
}

function delet() {
  var delet = document.querySelector(".listTodo");
  delet.parentElement.remove();
}

function kosongkan() {
  document.getElementById("text").value = "";
}
