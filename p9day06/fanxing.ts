
// const getArray = (value: any, times: number = 5): any[] => {
//     return new Array(times).fill(value)
// }

// getArray([1], 2).forEach(item => {
//     console.log(item.lenght);
// })

// getArray(2, 3).forEach(function (item) {
//     console.log(item.lenght);

// })

// var getArray = function (value, times) {
//     if (times === void 0) { times = 5; }
//     return new Array(times).fill(value);
// };
// getArray([1], 2).forEach(function (item) {
//     console.log(item.lenght);
// });
// getArray(2, 3).forEach(function (item) {
//     console.log(item.lenght);
// });


// 泛型的使用 
// const getArray=<T>(value:T,times:number=5):T[]=>{
//     return new Array(times).fill(value)
//     }





// 下午

// 类 用来继承的，在原生js中

// function Anmation(name){
//     this.name=name,
//     this.Sayhi=function(){
//         console.log("我是一个继承的函数");
//     }
// }

// Anmation.prototype.age="13"
// Anmation.prototype.Task=function(){
//     console.log("我在吼叫");
// }


// es6类
// class Persion {
//     // 定义属性
//     constructor(name, age) {
//         this.name = name,
//             this.age = age
//     }
//     // 定义方法
//     SayHi() {
//         return this.name
//     }
// }
// let p = new Persion("小红", 12)
// console.log(p.age);
// console.log(p.name);
// console.log(p.SayHi());


// // ts类
// class People {
//     name: String;
//     age: Number
//     constructor(name, age) {
//         this.age = age
//         this.name = name
//     }
//     sayHi(): String {
//         return this.name
//     }
// }
// let p1 = new People('张三', 12)
// console.log(p1);



// 类的继承
 class Rabbit extends People{
    constructor(age:number,name:string){
        super(age.name)
    }
 }
 let d1= new Raddit("兔子",13)
 console.log(d1.name);
 console.log(d1.age);
 console.log(d1.sayHi());
 

class Animal implements IAnimal{
    name:string;
    constructor(name:string){
        this.name=name
    }
    cat():string{
        return''
    }
}
