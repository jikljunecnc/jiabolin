// enum的详情总结：
// 1.每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来。
//  2.数字类型我们可以像访问对象一样使用','和'[]'俩种方式访问里面的值。
//  3.字符串枚举的特点；含字符串成员的枚举中不允许使用计算属性,且必须是字符串类型的  枚举成员必须具有初始化表达式

// 数字类型的定义
// 1.语法使用的是es6的语法，uploading：uploading
// 2.自动添加指定索引符合
// 3.我们可以像访问对象一样使用','和'[]'俩种方式访问里面的值

enum Status {
   Uploading,
   Success,
   Faild
}
// 像访问对象一样使用','
console.log(Status.Faild);
console.log(Status.['Falied']);
console.log(Status.Success);



// 指定索引值
// 总结:每次手动添加索引的时候，下面数据如果不是手动添加添加的索引，将会以陡增的方式，把索引展示出来

enum Animal {
   // 猪
   Pig = 200,
   // 狗
   Dog,
   // 猫
   Cat = 300,
   // 蛇
   Snake
}
console.log(Anmimal.Cat);
console.log(Anmimal.['Dog']);
console.log(Anmimal.Snake);


// 计算值

const getValue = () => {
   result 1
}

// 3.计算值和常量
enum Constant {
   a = getValue(),
   B,//枚举成员必须具有初始化表达式
   c,
}

// 4.反响映射

enum Statuss {
   Success = 200,
   NotFound = 404,
   Error = 500
}
console.log(Statuss.Error);
console.log(Statuss[404]);
console.log(Statuss.NotFound);

// 5字符串枚举

const getValue = () => {
   return 0
}

const names = '小明'
enum Message {
   /**错误信息 */
   Error = 'error message',
   /**成功的错误信息 
    * 枚举成员必须具有初始化表达式。
   */
   SuccessError = 200, // 枚举成员必须具有初始化表达式。
   // 含字符串值成员的枚举中不允许使用计算值。
   // 含字符串值成员的枚举中不允许使用计算值。
   ClientError = names
}

console.log(Message.SuccessError, 'SuccessError')
console.log(Message.Error);
console.log(Message['ClientError']);



//   6.异构枚举
enum Result {
   Faild = 0,
   Success = "Success"
}

//  7.枚举成员类型

enum Animal {
   Dog = 1,
   Cat = 2,
}


//   狗
interface Dog {
   type: Animal.Dog
}

// 猫
interface Cat {
   type: Animal.Cat
}

let cat1: Cat = {
   type: Animal.Dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
};
let dog: Dog = {
   type: Animal.Dog
};

// 联合类型|

enum Keys {
   /**关闭 */
   Off,
   On
}

interface Light {
   status: Keys
}

let light: Light = {
   status: Keys.Off
}


/**
* 运行时对象
*/
enum E {
   A,
   B
}
const getIndex = (enumObj: { C: number }): number => {
   return enumObj.C;
};
console.log(getIndex(E)); // 0


/**
 * const enum
 */

/**
* const enum
*/
enum Animal {
   Rabbit,
   Pig
}

const enum Light90 {
   Off,
   On
}

const status45 = Animal.Pig
const status57 = Light90.Off
console.log(status45, status57);



/**
 * 
 * @param param0 
 * @returns 
 */
 function getFullName({firstName,lastName, age, sex}: Persion): string {
   return `My name ${lastName} ${firstName}, My age is ${age}, like smoke, ${sex}`
}


interface Persion {
   firstName: string, 
   lastName: string,
   age: number,
   sex: boolean,
   colors?: string,
   [prop: string]: any
}

let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false, height: 123})


interface Vegetables{
   color?: string,
   type: string,
   [props: string]: any
}



interface Vegetables {
   type: string;
 }
 const getVegetables = ({ type }: Vegetables) => {
   return `A ${type}`;
 };
 
 const option = { type: "tomato", size: 12 };
 getVegetables(option);


  /**
  * 只读属性
  * readonly
  */

   interface Role {
      readonly 0: string;
      readonly 1: string;
    }
   
    const role: Role = {
      0: 'super_admin',
      1: 'admin'
    }
   
    role[1] = '我是快乐的';// 无法分配到 "1" ，因为它是只读属性
   
    /**
     * const 和 readonly  对比
     */
   
    const NAME: string = "帅字辈";
   // NAME = "抬头" // 无法分配到 "NAME" ，因为它是常数。
   
   
   const obj = {
      name: '帅字辈'
   }
   obj.name = "包胜利"
   
   interface Info {
      readonly name: string
   }
   
   const info: Info = {
      name: '帅字辈'
   }
   info['name'] = "包胜利" // 无法分配到 "name" ，因为它是只读属性
   
   /**
    * 类型别名
    */
   
   interface AddFunc {
      (num1: number, num2: number) : number
   }
   const add: AddFunc = (n1, n2) => n1 + n2;
   const join: AddFunc = (n1, n2) => `${n1} ${n2}`; // 不能将类型'string'分配给类型'number'
   add("a", 2); // 类型'string'的参数不能赋给类型'number'的参数
   
   
   
   


// js中实现一个计数的函数

// let count = 0;
// const countUp = () => count++

/**
 * 闭包的概念
 * 1. 函数套函数
 * 2. 外部不能获取内部变量
 * 3. 返回函数
 * 4. 内部可以获取外部变量
 * 5. 是自调用函数
 */

 const closure = (() => {
   let count = 1
   const sayHi = (a,b) => {
     return a + b
   }
   return sayHi(count,1)
 })()
 
 const countUp = (() => {
     let count = 0
     return () => {
         return count++
     }
 })()
 
 
 // javascript
 // let countUps = () => {
 //     return ++countUps.count1;
 //   };
 //   countUps.count1 = 0;
 //   console.log(countUps()); // 1
 //   console.log(countUps()); // 2
 
 
 // 在ts中如何使用闭包实现上面的方式呢
 interface Counter {
     (): void;
     count: number;
 }
 
 const getCounter = (): Counter => {
     const C = () => {
         C.count++
     }
     C.count = 0;
     return C
 }
 
 const counter:Counter = getCounter()
 counter()
 console.log(counter.count);
 counter()
 console.log(counter.count);





 
/**
 * 1. 索引签名
 绕开多余属性时,[]中间的内容,是可变的
    (1). eadonly
 */
interface Rolec {
   [id: number]: string
}

let role: Rolec = {
   0: 'super_admin',
   1: 'admin'
}

// let copeRole: Rolec = {
//     //不能将类型“{ A: string; C: string; }”分配给类型“Rolec”。
//    // 对象文字可以只指定已知属性，并且“'A'”不在类型“Rolec”中
//     'A': 'super_admin',
//     'C': 'admin'
// }

/**
* 数组模式
*/
let roleArray: Rolec = ['super_admin', 'admin']
roleArray[0] = '我要站着上课'

/**
* 想要我们的东西不可更改,你只有查看权限,----
* readonly
*/

interface RoleInfo {
   readonly [id: number]: string
}

const roleCHange: RoleInfo = {
   0: "super_admin"
 };
 roleCHange[0] = "admin"; // 类型“RoleInfo”中的索引签名仅允许读取。

 const obj = {
   123: "a", // 这里定义一个数值类型的123这个属性
   "123": "b" //对象文本不能具有多个名称相同的属性
 };
 console.log(obj); // { '123': 'b' }

 /**
  * 接口继承
  * extends
  */

 // 这是一个公共接口类型定义
interface Vegetables {
   color: string;
}

/**
* Tomato: color radius
*/
 interface Tomato  extends Vegetables{
   radius: number;
 }

 interface Carrot extends  Vegetables{
   length: number;
 }

 //类型“{}”缺少类型“Tomato”中的以下属性: radius, color 
 let useTomato: Tomato = {
   // 类型 "{ radius: number; }" 中缺少属性 "color"，但类型 "Tomato" 中需要该属性。
   radius: 13,
   color: 'red',
 }

 //类型 "{ length: number; }" 中缺少属性 "color"，但类型 "Carrot" 中需要该属性。t
let useCarrot: Carrot = {
   length: 12,
   color: 'red',
}


/**
* 混合接口类型
*/

/**不想被污染掉  放到闭包里,形成独立的作用yu*/
/**
* 自调用函数
*/
//  let count = 0;
//  const countUp = () => count++;
// console.log(count);
const countUps = (() => {
   let count = 0;
   function useCount(){
       return ++count
   }
   return useCount
})()
console.log(countUps()); // 1
console.log(countUps()); // 2

//  const countUp = (() => {
//     let count = 0;
//     return () => {
//       return ++count;
//     };
//   })();
//   console.log(countUp()); // 1
//   console.log(countUp()); // 2


/**
* js中手动添加对象属性
*/
let obj = {}
obj.name = '小红'

// javascript
let countUp = () => {
    return ++countUp.count;
  };
  countUp.count = 0;
  console.log(countUp()); // 1
  console.log(countUp()); // 2



  /**
   * 混合接口
   * 1. 变量永久保存,不会被污染
   * 2. 变量只是内部使用
   * 3. 定义每个类型,方便维护
   */

   interface Counter {
       (): void; 
       count: number; 
     }
     const getCounter = (): Counter => {
       const c = () => { 
         c.count++;
       };
       c.count = 0; // 再给这个函数添加一个count属性初始值为0
       return c; // 最后返回这个函数对象
     };
     const counter: Counter = getCounter(); // 通过getCounter函数得到这个计数器
     counter();
     console.log(counter.count); // 1
     counter();
     console.log(counter.count); // 2