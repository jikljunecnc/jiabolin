/**
 * 创建一个构造函数
 */

// 步骤1：新建构造函数
function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    }
}

// 步骤2：创建实例
var person = new Person('yang');
person()
console.log(persion);