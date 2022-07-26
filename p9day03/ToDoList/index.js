// 输入框自动获取焦点
let add_input = document.querySelector(".add-input");
// 自动获取焦点
add_input.focus();
//  存放所有的任务
let ToDoListData = [];

// 添加事件函数
function addEvent() {
  if (add_input.value == "") {
    alert("添加不能为空");
    return;
  }
  // 向数组中进行添加输入框内容
  ToDoListData.push({ val: add_input.value });
  // 添加后清空输入框
  add_input.value = "";
  document.querySelectorAll("li").forEach((item) => {
    item.style.display = "block";
  });
}

// 判断事件是否全部完成函数
function If_event_completion() {
  if (document.querySelector(".Data_List").childNodes.length == 0) {
    document.querySelector(".bottomText").style.display = "block";
    document.querySelector(".bottom_state").style.display = "none";
  } else {
    document.querySelector(".bottomText").style.display = "none";
    document.querySelector(".bottom_state").style.display = "block";
  }
}

// 给添加按钮添加点击事件
document.querySelector(".submit").onclick = function () {
  // 调用添加事件函数
  addEvent();
  // 更新DOM
  updateDom();
  If_event_completion();
  bottom_update_state();
};

// 底部显示更新
function bottom_update_state() {
  // 计算未完成的数量
  let countArr = document.querySelectorAll(".checked_state");
  let countNumber = 0;
  countArr.forEach((item, index) => {
    if (item.checked == false) {
      countNumber++;
    }
  });

  // 给未完成数量进行更新
  document.querySelector(".Event_count").innerHTML =
    "未完成数量:&nbsp;" + countNumber + "&nbsp;件";
}

// 键盘事件（当按下回车时触发）
document.querySelector(".add-input").onkeydown = function (e) {
  if (e.code != "Enter") {
    return;
  } else {
    //  调用添加事件函数
    addEvent();
    // 更新DOM
    updateDom();
    If_event_completion();
    bottom_update_state();
  }
};

// // 更新DOM时调用此函数
function updateDom() {
  ToDoListData.forEach((item, index) => {
    // 创建li元素;
    let li = document.createElement("li");
    // 向li中添加内容
    li.innerHTML = `<input type="checkbox" class="checked_state"/>${item.val}<img
    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yNCA0NEMzNS4wNDU3IDQ0IDQ0IDM1LjA0NTcgNDQgMjRDNDQgMTIuOTU0MyAzNS4wNDU3IDQgMjQgNEMxMi45NTQzIDQgNCAxMi45NTQzIDQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRaIiBmaWxsPSJub25lIiBzdHJva2U9IiM0NkMwMUIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yOS42NTY3IDE4LjM0MzJMMTguMzQzIDI5LjY1NjkiIHN0cm9rZT0iIzQ2QzAxQiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTguMzQzMyAxOC4zNDMyTDI5LjY1NyAyOS42NTY5IiBzdHJva2U9IiM0NkMwMUIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+"
    class="del"
  />`;

    // 向ul中添加li这个元素
    document.querySelector(".Data_List").appendChild(li);
  });

  //   清空数据避免重复
  ToDoListData = [];
}

// 动态给li添加点击事件
document.querySelector(".Data_List").addEventListener("click", function (e) {
  //   console.log();
  //   console.log();
  // 判断如果点击的是删除按钮
  if (e.target.className == "del") {
    // 获取到ul父元素删除父元素中的子元素li e.target.parentNode (当前点击的子节点)
    document.querySelector(".Data_List").removeChild(e.target.parentNode);
    If_event_completion();
    bottom_update_state();
  } else if (e.target.className == "checked_state") {
    if (e.target.checked == true) {
      // 动态添加样式
      // 当前点击节点的父级节点添加样式
      e.target.parentNode.className = "State_Css";
      bottom_update_state();
    } else {
      // 动态添加样式
      // 当前点击节点的父级节点添加样式
      e.target.parentNode.className = "";
      bottom_update_state();
    }
  }
});

// 点击已完成出发的事件
document.querySelector(".completed").onclick = function () {
  document.querySelectorAll("li").forEach((item, index) => {
    item.style.display = "none";
  });

  let completedArr = document.querySelectorAll(".State_Css");
  completedArr.forEach((item, index) => {
    item.style.display = "block";
  });
};

// 点击未完成触发的事件
document.querySelector(".active").onclick = function () {
  document.querySelectorAll("li").forEach((item) => {
    item.style.display = "block";
  });
  document.querySelectorAll(".State_Css").forEach((item, index) => {
    item.style.display = "none";
  });
};
// 点击全部出触发的事件
document.querySelector(".show_all").onclick = function () {
  document.querySelectorAll("li").forEach((item) => {
    item.style.display = "block";
  });
};

// 点击清除完成项触发的事件
document.querySelector(".clear_checked").onclick = function () {
  document.querySelectorAll(".State_Css").forEach((item) => {
    item.remove()
  });
};
// 单选状态 false
// 多选状态 false
