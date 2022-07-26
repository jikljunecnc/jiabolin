

/**
 * 数组中包含的内容
 */
interface ArrayItem {
    checked: boolean,
    id: number,
    value: string
}

type TodoListArray =  Array<ArrayItem>


/**获取ul标签 */
let ul1: HTMLUListElement = document.getElementsByTagName("ul")[0];

/**定义新增数组 */
let todoArray1: TodoListArray = [];


/**定义数组自增ID */
let nextId1: number = 1






/**
 * 新增的方法
 */
function addTodoItem(e: { target: { value: string; }; }): void {
  /**获取新增的内容 */
  let inputValue: string =  e.target.value 
  if(todoArray1.length > 0) {
    nextId1++
  } 
    let addItemValue: ArrayItem = {
        checked: false,
        id: nextId1,
        value: inputValue
    }
    todoArray1.push(addItemValue)
    // 调用渲染方法
    renderHtml(todoArray1)
}


/**
 * 删除
 */
function delTodoItem(id: number) {
   let result: ArrayItem[] =  todoArray1.filter(item => item.id !== id)
   // 调用渲染方法
   renderHtml(result)
}

/**
 * 勾选
 * 修改原数据,因为本来数据就变化了,不需要在进行保留
 */
function inputChecked(id:number) {
    todoArray1.forEach( item => {
        if(item.id === id) {
            item.checked = !item.checked
        }
    })
    // 调用渲染方法
    renderHtml(todoArray1)
}

/**
 * 渲染html方法
 */
function renderHtml(array: TodoListArray) {

}