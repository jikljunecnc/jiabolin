// interface Info {
//     name: string
// }
// interface Info {
//     age: number
// }
// let info: Info
// info = { // error 类型“{ name: string; }”中缺少属性“age”
//     name: 'lison'
// }
// info = { // right
//     name: 'lison',
//     age: 18
// }


// type Info =  {
//     name: string
// }
// // error 标识符“Info”重复。
// type Info = {
//     age: number
// }


// function foo(a: number, b: string): string {
//     return a + b;
//   }
//   let a = foo.apply(this, [1]); // error Property '1' is missing in type '[number]' but required in type '[number, string]'
//   let b = foo.apply(this, [1, 2]); // error 不能将类型“number”分配给类型“string”
//   let ccd = foo.apply(this, [1, "a"]); // right
//   let ccsd = foo.apply(this, [1, "a", 2]); // right



//   function setName () {
//     console.log('get setName')
//     return function (target) {
//         console.log('setName')
//     }
// }
// function setAge () {
//     console.log('get setAge')
//     return function (target) {
//         console.log('setAge')
//     }
// }
// @setName()
// @setAge()
// class Test {}




// let sign = null;
// function setName(name: string) {
//   return function(target: Function) {
//     sign = target;
//     console.log(target.name);
//   };
// }
// @setName("lison") // Info
// class Info {
//   constructor() {}
// }
// console.log(sign === Info); // true
// console.log(sign === Info.prototype.constructor); // true



// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   const a = new A();
//   console.log(a.name); // error 类型“A”上不存在属性“name”



//   function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   interface A {
//     name: string;
//   }
//   const a = new A();
//   console.log(a.name); // "lison"




//   function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));



//   function classDecorator(target: any): any {
//     return class {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));






//   var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });


// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log(target); // { getAge: f, constructor: f }
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info(18);
//   console.log(info);
//   // { age: 18 }
//   for (let propertyName in info) {
//     console.log(propertyName);
//   }
//   // "age"
  


//   function enumerable(bool: boolean): any {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       return {
//         value: function() {
//           return "not age";
//         },
//         enumerable: bool
//       };
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info();
//   console.log(info.getAge()); // "not age"



//   function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }


//   function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
//   }
//   class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
//   }



//   function required(target: any, propertName: string, index: number) {
//     console.log(`修饰的是${propertName}的第${index + 1}个参数`);
//   }
//   class Info {
//     name: string = "lison";
//     age: number = 18;
//     getInfo(prefix: string, @required infoType: string): any {
//       return prefix + " " + this[infoType];
//     }
//   }
//   interface Info {
//     [key: string]: string | number | Function;
//   }
//   const info = new Info();
//   info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数


//   let value1: unknown;
// value1 = "a";
// value1 = 123;


// let value2: unknown;
// let value3: string = value2; // error 不能将类型“unknown”分配给类型“string”
// value1 = value2;

// let value4: unknown;
// value4 += 1; // error 对象的类型为 "unknown"


// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]
// interface Info {
//     name: string
// }
// interface Info {
//     age: number
// }
// let info: Info
// info = { // error 类型“{ name: string; }”中缺少属性“age”
//     name: 'lison'
// }
// info = { // right
//     name: 'lison',
//     age: 18
// }


// type Info =  {
//     name: string
// }
// // error 标识符“Info”重复。
// type Info = {
//     age: number
// }


// function foo(a: number, b: string): string {
//     return a + b;
//   }
//   let a = foo.apply(this, [1]); // error Property '1' is missing in type '[number]' but required in type '[number, string]'
//   let b = foo.apply(this, [1, 2]); // error 不能将类型“number”分配给类型“string”
//   let ccd = foo.apply(this, [1, "a"]); // right
//   let ccsd = foo.apply(this, [1, "a", 2]); // right



//   function setName () {
//     console.log('get setName')
//     return function (target) {
//         console.log('setName')
//     }
// }
// function setAge () {
//     console.log('get setAge')
//     return function (target) {
//         console.log('setAge')
//     }
// }
// @setName()
// @setAge()
// class Test {}




// let sign = null;
// function setName(name: string) {
//   return function(target: Function) {
//     sign = target;
//     console.log(target.name);
//   };
// }
// @setName("lison") // Info
// class Info {
//   constructor() {}
// }
// console.log(sign === Info); // true
// console.log(sign === Info.prototype.constructor); // true



// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   const a = new A();
//   console.log(a.name); // error 类型“A”上不存在属性“name”



//   function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   interface A {
//     name: string;
//   }
//   const a = new A();
//   console.log(a.name); // "lison"




//   function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));



//   function classDecorator(target: any): any {
//     return class {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));






//   var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });


// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log(target); // { getAge: f, constructor: f }
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info(18);
//   console.log(info);
//   // { age: 18 }
//   for (let propertyName in info) {
//     console.log(propertyName);
//   }
//   // "age"
  


//   function enumerable(bool: boolean): any {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       return {
//         value: function() {
//           return "not age";
//         },
//         enumerable: bool
//       };
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info();
//   console.log(info.getAge()); // "not age"



//   function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }


//   function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
//   }
//   class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
//   }



//   function required(target: any, propertName: string, index: number) {
//     console.log(`修饰的是${propertName}的第${index + 1}个参数`);
//   }
//   class Info {
//     name: string = "lison";
//     age: number = 18;
//     getInfo(prefix: string, @required infoType: string): any {
//       return prefix + " " + this[infoType];
//     }
//   }
//   interface Info {
//     [key: string]: string | number | Function;
//   }
//   const info = new Info();
//   info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数


//   let value1: unknown;
// value1 = "a";
// value1 = 123;


// let value2: unknown;
// let value3: string = value2; // error 不能将类型“unknown”分配给类型“string”
// value1 = value2;

// let value4: unknown;
// value4 += 1; // error 对象的类型为 "unknown"


// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]
// interface Info {
//     name: string
// }
// interface Info {
//     age: number
// }
// let info: Info
// info = { // error 类型“{ name: string; }”中缺少属性“age”
//     name: 'lison'
// }
// info = { // right
//     name: 'lison',
//     age: 18
// }


// type Info =  {
//     name: string
// }
// // error 标识符“Info”重复。
// type Info = {
//     age: number
// }


// function foo(a: number, b: string): string {
//     return a + b;
//   }
//   let a = foo.apply(this, [1]); // error Property '1' is missing in type '[number]' but required in type '[number, string]'
//   let b = foo.apply(this, [1, 2]); // error 不能将类型“number”分配给类型“string”
//   let ccd = foo.apply(this, [1, "a"]); // right
//   let ccsd = foo.apply(this, [1, "a", 2]); // right



//   function setName () {
//     console.log('get setName')
//     return function (target) {
//         console.log('setName')
//     }
// }
// function setAge () {
//     console.log('get setAge')
//     return function (target) {
//         console.log('setAge')
//     }
// }
// @setName()
// @setAge()
// class Test {}




// let sign = null;
// function setName(name: string) {
//   return function(target: Function) {
//     sign = target;
//     console.log(target.name);
//   };
// }
// @setName("lison") // Info
// class Info {
//   constructor() {}
// }
// console.log(sign === Info); // true
// console.log(sign === Info.prototype.constructor); // true



// function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   const a = new A();
//   console.log(a.name); // error 类型“A”上不存在属性“name”



//   function addName(constructor: { new (): any }) {
//     constructor.prototype.name = "lison";
//   }
//   @addName
//   class A {}
//   interface A {
//     name: string;
//   }
//   const a = new A();
//   console.log(a.name); // "lison"




//   function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
//     return class extends target {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));



//   function classDecorator(target: any): any {
//     return class {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }
//   @classDecorator
//   class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//       this.hello = m;
//     }
//   }
//   console.log(new Greeter("world"));






//   var obj = {};
// Object.defineProperty(obj, "name", {
//   value: "lison",
//   writable: false,
//   configurable: true,
//   enumerable: true
// });
// console.log(obj);
// // { name: 'lison' }
// obj.name = "test";
// console.log(obj);
// // { name: 'lison' }
// for (let key in obj) {
//   console.log(key);
// }
// // 'name'
// Object.defineProperty(obj, "name", {
//   enumerable: false
// });
// for (let key in obj) {
//   console.log(key);
// }
// // 什么都没打印
// Object.defineProperty(obj, "name", {
//   writable: true
// });
// obj.name = "test";
// console.log(obj);
// // { name: 'test' }
// Object.defineProperty(obj, "name", {
//   configurable: false
// });
// Object.defineProperty(obj, "name", {
//   writable: false
// });


// function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       console.log(target); // { getAge: f, constructor: f }
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info(18);
//   console.log(info);
//   // { age: 18 }
//   for (let propertyName in info) {
//     console.log(propertyName);
//   }
//   // "age"
  


//   function enumerable(bool: boolean): any {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       return {
//         value: function() {
//           return "not age";
//         },
//         enumerable: bool
//       };
//     };
//   }
//   class Info {
//     constructor(public age: number) {}
//     @enumerable(false)
//     getAge() {
//       return this.age;
//     }
//   }
//   const info = new Info();
//   console.log(info.getAge()); // "not age"



//   function enumerable(bool: boolean) {
//     return function(
//       target: any,
//       propertyName: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.enumerable = bool;
//     };
//   }
//   class Info {
//     private _name: string;
//     constructor(name: string) {
//       this._name = name;
//     }
//     @enumerable(false)
//     get name() {
//       return this._name;
//     }
//     @enumerable(false) // error 不能向多个同名的 get/set 访问器应用修饰器
//     set name(name) {
//       this._name = name;
//     }
//   }


//   function printPropertyName(target: any, propertyName: string) {
//     console.log(propertyName);
//   }
//   class Info {
//     @printPropertyName
//     name: string;
//     @printPropertyName
//     age: number;
//   }



//   function required(target: any, propertName: string, index: number) {
//     console.log(`修饰的是${propertName}的第${index + 1}个参数`);
//   }
//   class Info {
//     name: string = "lison";
//     age: number = 18;
//     getInfo(prefix: string, @required infoType: string): any {
//       return prefix + " " + this[infoType];
//     }
//   }
//   interface Info {
//     [key: string]: string | number | Function;
//   }
//   const info = new Info();
//   info.getInfo("hihi", "age"); // 修饰的是getInfo的第2个参数


//   let value1: unknown;
// value1 = "a";
// value1 = 123;


// let value2: unknown;
// let value3: string = value2; // error 不能将类型“unknown”分配给类型“string”
// value1 = value2;

// let value4: unknown;
// value4 += 1; // error 对象的类型为 "unknown"


// type type1 = unknown & string; // type1 => string
// type type2 = number & unknown; // type2 => number
// type type3 = unknown & unknown; // type3 => unknown
// type type4 = unknown & string[]; // type4 => string[]