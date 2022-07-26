

/**
 * 数组中包含的内容
 */
interface ArrayItem {
    checked: boolean,
    id: number,
    value: string
}

type TodoListArray = Array<ArrayItem>


/**获取ul标签 */
let ul: HTMLUListElement = document.getElementsByTagName("ul")[0];
//获取底部按钮
let completed_order: HTMLElement | null = document.getElementById("completed_order")
let allinfo: HTMLElement | null = document.getElementById("allinfo")
let completed_todo: HTMLElement | null = document.getElementById("completed_todo")
let clear_completed: HTMLElement | null = document.getElementById("clear_completed")

/**定义新增数组 */
let todoArray: TodoListArray = [];


/**定义数组自增ID */
let nextId: number = 1


/**
 * 获取新增数据内容
 */
function addTodoList(event: { keyCode: number; }) {
    if (!event || event.keyCode === 13) {
        // 首先获取input框的输入内容
        //@ts-ignore
        let inputValue: string = document.getElementsByClassName("input-todoList")[0].value;
        if (inputValue) {
            circulation(inputValue);
             //@ts-ignore
            document.getElementsByClassName("input-todoList")[0].value = ''
        }
    }
}

/**
 * 新增数据,并且保证数据id的唯一性
 */
function circulation(inputValue: string) {
    // 首先获取ul标签
    // 存储数据,li标签的循环
    if (todoArray.length > 0) {
        nextId++
    }
    let addItemValue: ArrayItem = {
        checked: false,
        id: nextId,
        value: inputValue
    }
    todoArray.push(addItemValue)
    circulationHtml(todoArray);
}


/**
 * 根据数据的变化进行生成html
 */
function circulationHtml(date: TodoListArray, checkId?: number) {
    // 清空原来的元素
    ul.innerHTML = ''
    date.forEach((item) => {
        // 创建li标签
        let li: HTMLLIElement = document.createElement("li");
        
        if(item.id == checkId && item.checked) {
            li.className = 'completed'
        } else if(item.checked) {
            li.className = 'need-completed'
        } else {
            li.className = ''
        }
        li.id = `${item.id}`
       
        if(item.id == checkId && item.checked) {}
        li.innerHTML = ` 
          <div class="li-style-div">
              <input type="checkbox" class="checkbox" id=${item.id} ${item.checked ? "checked" : null
            } onchange="changeCheckboxDate(this)"></input>
              <p class="li-style-div-content">${item.value}</p>
          </div>
          <button class= ${item.id == checkId && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close"}  id=${item.id}  onclick=deleteDate(this)>X</button>
        `;
        ul.append(li)
    });
    changeLeftItem(date)
}

/**
 * 删除
 */
function deleteDate(ele: ArrayItem) {
    todoArray = todoArray.filter(item => item.id != ele.id)
    circulationHtml(todoArray)
}

/**
 * 选中的时候改变数据结构,并且添加样式
 */
function changeCheckboxDate(ele: ArrayItem) {
    todoArray.forEach(item => {
        if (item.id == ele.id) {
            item.checked = !item.checked
        }
    })
    circulationHtml(todoArray, ele.id)
}


/**
 * 左下角条数的变化
 */
function changeLeftItem(data: TodoListArray) {
    let docuemnt: HTMLElement | null = document.getElementById('item-current')
    if (docuemnt) {
        docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项'
    }
}

/**
 * 待完成的事项
 * 获取待办事件,并且更新视图
 */
function toBeCompleted() {
    let result: ArrayItem[] = todoArray.filter(item => !item.checked)
    circulationHtml(result)
    footerButton('completed_todo')
}

/**
 * 已完成
 */

function completed() {
    let result: ArrayItem[] = todoArray.filter((item: ArrayItem) => item.checked)
    circulationHtml(result)
    footerButton('completed_order')
}

/**
 * 清空所有
 */

function clearAll() {
    todoArray = []
    ul.innerHTML = ''
    footerButton('clear_completed')
}

/**
 * 查看所有
 */
function viewAllInfo() {
    circulationHtml(todoArray)
    footerButton('allinfo')
}


/**
 * 定义底部按钮接口类型
 */
interface ButtonArry {
    name: HTMLElement | null,
    key: string
}
/**
 * 底部元素新增样式
 */

function footerButton(className: string): void {
    const buttonArry: Array<ButtonArry> = [
        {
            name: completed_order,
            key: "completed_order"
        },
        {
            name: allinfo,
            key: "allinfo"
        },
        {
            name: completed_todo,
            key: "completed_todo"
        },
        {
            name: clear_completed,
            key: "clear_completed"
        },
    ]
    buttonArry.forEach(item => {
        if (item && item.key === className) {
             //@ts-ignore
           item.name.classList.add('clickButton')
        } else {
             //@ts-ignore
            item.name.classList.remove('clickButton')
        }
    })
}
