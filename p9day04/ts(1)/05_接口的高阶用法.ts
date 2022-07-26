
/**
 * 1. 索引签名
 *     !!!!重点: 绕开多余属性时,[]中间的内容,是可变的
 *    (1). eadonly
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