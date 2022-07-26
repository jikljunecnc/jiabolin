// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "Jane";

// document.body.innerHTML = greeter(user);



// let b=["贾博林"]
// console.log(b);
// document.body.innerHTML = "贾博林";


// let aa=[1+7]
// let bb=[2+3]
// console.log(aa);
// console.log(bb);




// let num1 = 1
// let num2 = 2
// let sum = num1 + num2 
// console.log(sum);


// enum Color {
//     /**红色 */
//     Red = 1,
//     /**蓝色 */
//     Blue = 2,
//     /**绿色 */
//     Green = 3
// }
// let c: Color = Color.Green;
// console.log(c) // 3


// 1.什么是ts
// ts可以理解为JavaScript的超集，它是由微软公司开发的一种编程语言，可以运行在任何浏览器还有操作系统

// 2.全局安装ts的命令是： npm i -g typescript

// 3.ts的优点 
//    *1.灵活：可以将代码自动转换为js代码 
//    *2.兼容性强： 可以在任何浏览器和操作系统运行，并不需要浏览器的支持，通过node.js运行即可
//    *3.方便维护： 在ts中的报错在编译时就能发现，不会直接显示到用户页面，

// 4.ts的缺点
//    不利于前端工程师上手，需要理解接口，枚举等类型的概念，需要多写一些类型的定义，工作量大，和一些库不能完美结合

// 5.ts分为动态类型和静态类型：
//    动态类型就是在运行时才会报错，javascript是解释型的语言，没有编译阶段，所以属于动态类型
//    静态类型是在编译阶段就能确定每个变量的类型，如果类型不对就会直接报错，ts的话在编译阶段就会检查每个类型属于静态类型

// 6.强类型和弱类型语言的主要区别就是靠是否能隐式转换来分类的，ts和jacascript都属于弱类型

// 7.ts的数据类型
//    *1.数字类型
//           语法： let num: number = 5      
//           十进制： let decLiteral: number = 6
//           十六进制： let hexLiteral: number = 0xf00d
//           es6的二进制：  let binaryLiteral: number = 0b1010
//           es6的八进制表示法： let octalLiteral: number = 0o744
//           无穷大：  let infinityNumber: number = Infinity
//     *2.布尔类型
//           语法： let isDone: boolean = false(true)
//     *3.字符串类型
//            语法：  let myName: string = '啦啦啦'
//            用法： let myAge: number = 20
// 	      let sentence = `My name is ${myName}, My age is ${myAge}`
//            在浏览器页面显示： docment.body.innerHTML = sentence
//     *4.数组类型： 
//           *1.语法： let array: number[] = [1,2,3,4]    let arratString: string[]  = ['1','2','3']
//           *2.数组泛型的语法：  let arrayList: Array<number> = [1,2,3,4]  let listString: Array<list> = ['1','2','3']
//     *5.未定义和空类型
//           *1.未定义语法： let a : undefined = undefined   
//           *2.空类型： let b: null = null
//      *6.  对象类型
//            *1.语法： let obj: {name: string, age: number}
// 	          let obj2: {name: string, age: number}
//  	         obj = {name: '党少龙', age: 20}
//  	         let info = 'My name is ${obj.name}, age is ${obj.age}'

//       *7.元组类型
//             *1.语法： let tom: [string, number] = ['Tom', 25];
//              *2.赋值或访问已知索引元素： let tom: [string, number];
//     			          tom[0] = 'Tom';
//     		                          tom[1] = 25;
//     		                          tom[0].slice(1); 
//     			          tom[1].toFixed(2)
//         *8.枚举： 
//              *1.语法：enum Color {
//        		Red = 1,
//     		Blue = 3,
//    		 Yellow = 4
// 	}
// 	let c: Color = Color.Red
// 	console.log(c);
//        *9.any可以赋任何值
// 	语法：let value: any;
// 	         value = 123;
// 	         value = "abc";
//                          value = false;
//         *10. void类型
// 	*1.不用return返回： function noReturn(): void {
//    			  console.log('My name is void');
// 			}
// 	*2.需要return返回：function haveReturn(): string {
//     			  return '55'
// 			}
//          *11.never类型：
// 	*1. 返回never的函数： function error(message: string): never {
//     			   throw new Error(message);
// 			}
// 	*2.推断： function fail() {
//    			return error("Something failed");
// 		}



