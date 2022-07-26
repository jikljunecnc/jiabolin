
/**
 * 1. 在编辑器执行过程提示错误信息
 * 2. ts是js的超集,所有js结尾的文件,全部可以改成ts结尾,并且执行报错
 * 3. ts具有隐推导,可以添加类型
 * 4. ts不能直接在浏览器中运行,需编译器进行编写
 */



/**
 * 数据类型 number
 */

let num: number = 123
let num1: number = 234
// 不能将类型“string”分配给类型“number”。
//num = 'ddd'
let sum = num + num1
console.log(sum);


/**
 * 字符串:  string
 */
let name1: string = '我是王帅奇'
let age: number = 24
// 造个句子
let persionInfo = `My name is ${name1}, age is ${age}`
document.body.innerHTML = persionInfo
console.log(persionInfo);


/**
 * boolean 类型
 * Boolean
 * false true
 */

let boolean: boolean = false

/**
 * js 创建数组的方式
 * 1. 字面量创建 []
 * 2. new Array
 * 
 * 
 * --------------------
 * 
 * []
 * Array<[]>
 */

/**第一种 字面量创建方式 */
let  arry: [] = []

/**第二种 */
let Arry: Array<[]> = []
//-------------------------
//不能将类型“string”分配给类型“number”。
//let  numArry: number[] = ['1']
/**
 * 只能放数字类型,且不限长度
 */
let  numArry: number[] = [1,2,3,4,5,5]

//不能将类型“number”分配给类型“string”。
//let stringArray: Array<string> = [12,2232]
let stringArray: Array<string> = ['1','2','4']


/**
 * 对象 object
 * ---字面量创建方法
 */
let obj: {name: string, age: number}
let obj2: {name: '宁帅', age: 20}
let obj3: {name: string, age: number}

obj = {name: '王帅林', age: 12}
obj3 = {name:'王帅奇', age: 30}
//不能将类型“"小红"”分配给类型“"宁帅"”。
//obj2 = {name: '小红',}


/**
 * undefined 和null 类型
*/
let undefined1: undefined = undefined;
let null1: null = null



/**
 * 元组: Tuple
 * 定义一个人的信息,比如: name, age, sex, height
 */
let persion: [name: string, age:number, sex: boolean, height: number] = ['师福气', 24, true, 181]
// let persionInfos = 
// console.log(persion[0]);
// persion.push(40)
// console.log(persion);


/**
 * enum 枚举
 */

enum Color {
    /**
     * 红色
     */
    Ok = 1,
    Error = 400,
    /**
     * 蓝色
     */
    Blue = 3
}

let c: Color = Color.Blue


/**
 * Any
 */
let value: any;
value = 12
value = "你好"
value = true

/**
 * Void:  用于函数,和any是相反的
 */
function noReturn(): void {
  console.log('我是一个没返回值的函数')
}

// 其声明类型不为 "void" 或 "any" 的函数必须返回值。
function haveReturn(): string {
    // 不能将类型“number”分配给类型“string”。
 return 'hello world'
}

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}


/**
 * 交叉类型(&)
 * 交叉类型就是取多个类型的并集，使用 & 符号定义，被&符链接的多个类型构成一个交叉类型，表示这个类型同时具备这几个连接起来的类型的特点
 */

interface user{
    name: string
    age: number
}

interface other{
    sex: boolean
}


type persions = user & other

let others: persions = {name: '包胜利', age: 18, sex: false}
// 展示到页面中 造句

/**
 * 联合类型(|)
 * 联合类型就是取多个类型的或集，使用 | 符号定义，被|符链接的多个类型构成类型，满足其中一个即可
 */


let unite: number | string;
unite = 1
unite = 'hello world'
// 不能将类型“boolean”分配给类型“string | number”。
//unite = false

/**
 * 类型断言
 */


        /***
     * 类型断言
    * 尖括号写类型断言
    */
  let someValue: any;
  someValue = 123;
  someValue = "dddd";
  let someValueLength = (<string>someValue).length




  let someName: any;
  someName = 123
  someName = '123'
  let someNameValueLength = (someName as string).length




  /**
   * 
   */


















/**
 * TODO: 1. 用两种方式创建boolean类型的数组
 *       2. ​工厂模式创建对象 --
 *          构造函数创建对象
 *       3. 将对象造个句子
 *       4. 找一个数组中修改源数组的方式,找一下数组中那些方式是可以使用的,那些事不可以使用
 *       5. 为什么类型断言左后是number
 *       6. 函数有哪几种 --总结
 *       7. Status["Uploading"] = 0
 *       
 */