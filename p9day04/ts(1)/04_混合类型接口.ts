

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