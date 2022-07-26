

# 第一单元 了解TypeScript

### 一、教学目标

	#### (1) 知识目标

```tsx
  1.TypeScript简介
  2.TypeScript安装
  3.TypeScrip自动编译配置
  4.TypeScript数据类型
```

#### (2) 能力目标

```js
1.掌握TypeScript的概念
2.掌握TypeScript安装
3.掌握TypeScript编译
4.掌握TypeScript的数据类型
```

# 二、关于TypeScript

### 2.1 TypeScript简介 		

- 简介
  - TypeScript是[微软](https://baike.baidu.com/item/微软/124767)开发的一个开源的[编程语言](https://baike.baidu.com/item/编程语言/9845131)，通过在[JavaScript](https://baike.baidu.com/item/JavaScript/321142)的基础上添加静态类型定义构建而成。TypeScript通过TypeScript[编译器](https://baike.baidu.com/item/编译器/8853067)或Babel转译为JavaScript代码，可运行在任何[浏览器](https://baike.baidu.com/item/浏览器/213911)，任何[操作系统](https://baike.baidu.com/item/操作系统/192)。(eg不会有兼容性)
  - 它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了**可选的静态类型**和**基于类的面向对象编程**。
- 产生的背景
  - js语言是一种动态型语言（变量类型是动态的，也就是在js中定义的变量 let a中的a可以存放任何类型的值，若是使用一个[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)去运算,eg 字符串1和数字1相加....）且在编写代码的过程当中编译器并不会报错,这导致后期维护十分困难，微软在js的基础上进行扩展形成了TypeScript。
- 官网: https://www.tslang.cn/

### 2.2 TypeScript的前世今生

- 发展历史

  - 2012-10：微软发布了 TypeScript 第⼀个版本（0.8），此前已经在微软内部开发了两年。

  - 2014-04：TypeScript 发布了 1.0 版本。

  - 2014-10：Angular 发布了 2.0 版本，它是⼀个基于 TypeScript 开发的前端框架。

  - 2015-01：ts-loader 发布，webpack 可以编译 TypeScript ⽂件了。

  - 2015-04：微软发布了 Visual Studio Code，它内置了对 TypeScript 语⾔的⽀持，它⾃⾝也是⽤ TypeScript 开发的。

  - 2016-05：@types/react 发布，TypeScript 可以开发 React 应⽤了。

  - 2016-05：@types/node 发布，TypeScript 可以开发 Node.js 应⽤了。

  - 2016-09：TypeScript 发布了 2.0 版本。

  - 2018-06：TypeScript 发布了 3.0 版本。

  - 2019-02：TypeScript 宣布由官⽅团队来维护 typescript-eslint，以⽀持在 TypeScript ⽂件中运⾏ ESLint 检查。

  - 2020-05：Deno 发布了 1.0 版本，它是⼀个 JavaScript 和 TypeScript 运⾏时。

  - 2020-08：TypeScript 发布了 4.0 版本。

  - 2020-09：Vue 发布了 3.0 版本，官⽅⽀持 TypeScri
    --------------------------------------------------------

### 2.3 TypeScript的发展优缺点

- 优点

  - TypeScript 增加了代码的可读性和可维护性		

    ```
    1、类型系统实际上是最好的文档，大部分的函数看看类型的定义就知道如何使用了。
    2、可以在编译阶段就发现大部分的错误，这总比在运行时出错好。
    3、增强了编译器和IDE的功能，包括代码补全，接口提示，跳转到定义，重构等。
    ```

  - TypeScript 非常包容

    ```
    1、Typescript是javascript的超集，.js文件可以直接重命名为.ts即可。
    2、即使不显示的定义类型，也能够自动做出类型推导。
    3、可以定义从简单到复杂的几乎一切类型。
    4、兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 TypeScript 读取。
    ```

  - TypeScript 拥有活跃的社区

    ```
    1、大部分第三方库都有提供给Typescript的类型定义文件
    2、大型开源编程软件,和多方人员合作
    ```

  - TypeScript 兼容性很强

    ```
    1、TypeScript会在编译时期去掉数据类型和特有语法，生成纯粹的 JavaScript 代码。由于最终在浏览器上运行的是 JavaScript 语言，所以 TypeScript 并不依赖于浏览器的支持，也并不会带来兼容问题，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。
    2、TypeScript扩展了JavaScript的语法，所以任何现有的JavaScript程序可以运行在TypeScript环境中,因此我们可以在 ts 中继续写 js 的代码而不会报错,这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript
    ```

  - TypeScript 拥抱最新的 ECMAScript 标准,与时俱进

    ```
    1、TypeScript 与标准同步发展，符合最新的 ECMAScript 标准（stage 3）
    ```

  - ### TypeScript 的编译步骤可以输出运行之前的错误.

    ``` 
    ts: let a:number = 1
        let b:string = 1
        let c: number = 0,
      	 c = a + b
        //不能将类型“number”分配给类型“string”。
        // 运行时候回报错,类型不相符
        
    js: a + b = C, // 可以运行,需要随后我们自己找bug
    ```

- 缺点

  - 有一定的学习成本，需要理解接口，泛型，类，枚举类型等前端工程师可能不是很熟悉的概念。
  - 短期内会增加开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，Typescript能够减少其维护成本。
  - 集成到构建流程需要的一些工作量。
  - 可能和一些库结合的不是很完美。

### 2.4 类型系统的介绍

1. 静态语言和动态语言

   - 类型系统按照<span style="color:red">**类型检查的时机**</span>来分类，可以分为动态类型和静态类型

   - 动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型；以下这段代码在运行时才会报错：

     ```
     let foo = 1;
     foo.split(' ');
     // Uncaught TypeError: foo.split is not a function
     // 运行时会报错（foo.split 不是一个函数），造成线上 bug
     ```

   - 静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 TypeScript 是静态类型;这段 TypeScript 代码在编译阶段就会报错了：

     ```
     let foo = 1;
     foo.split(' ');
     // Property 'split' does not exist on type 'number'.
     // 编译时会报错（数字没有 split 方法），无法通过编译
     ```

2. 如何理解强类型和弱类型的语言

   - 类型系统按照「是否允许隐式类型转换」来分类，可以分为强类型和弱类型
   -  以下这段代码不管是在 JavaScript 中还是在 TypeScript 中都是可以正常运行的，运行时数字 `1` 会被隐式类型转换为字符串 `'1'`，加号 `+` 被识别为字符串拼接，所以打印出结果是字符串 `'11'`

```
console.log(1 + '1');
// 打印出字符串 '11'
```

TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以**它们都是弱类型**。

# 三、TS的安装和使用

### 3.1 TS的安装

​	有两种主要的方式来获取TypeScript工具：

- 通过npm（Node.js包管理器）
- 安装Visual Studio的TypeScript插件

### 3.1.2 Npm全局 安装TypeScript

```javascript
npm install -g typescript
```

以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了

检测是否安装成功命令：

```
tsc -v  // Version 版本号 证明安装成功
```

![image-20220629101423449](/Users/nuonuo/Library/Application Support/typora-user-images/image-20220629101423449.

#### 3.1.3 构建第一个TypeScript文件

 1、创建一个ts文件

 2、在文件内输入一下内容

```	typescript

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane";

document.body.innerHTML = greeter(user);
```

3、编译代码

```	
tsc greeter.ts
```

4、结果会输出一个相同js文件,内容如下

```js
/**
 * 新建一个demo ,在页面展示效果是: 展示名字和拼接
 * 1.可以在ts中写js语法
 * 2.编写ts语法
 * 3.语法运行的时候报错
 */
function getName(persion) {
    return "Hello, " + persion;
}
let user = "Jane";
document.body.innerHTML = getName(names);

```

### 3.2 Visual Studio Code 配置自动编译

#### 3.2.1 自动编译配置

 1. 首先在放 ts 的文件夹下打开终端 执行 tsc --init 命令 会生成一个 tsconfig.json 文件

    ```	js
    tsc --init   // 在文件夹下自动生成一个 tsconfig.json 文件
    ```

2. 点击 vscode 终端-->选择运行任务-->输入 tsc 按下回车-->选择 tsc:监视 xxxx 文件夹下的 tsconfig.json 文件
3. 之后再写的 ts 代码就会自动转化为 js

#### 3.2.2  tsconfig.json介绍

​       如果一个目录下存在一个tsconfig.json`文件，那么它意味着这个目录是TypeScript项目的根目录。 `tsconfig.json`文件中指定了用来编译这个项目的根文件和编译选项

- 作用
  - 文件选项配置
    - https://www.tslang.cn/docs/handbook/tsconfig-json.html
  - 编译选项配置
    - https://www.tslang.cn/docs/handbook/compiler-options.html
  - 工程引用配置
    - https://www.tslang.cn/docs/handbook/project-references.html

# 四、复习一下js中的数据类型

1. js的数据类型

  基本数据类型: Number,String,Object,Null,Undefind,Symbol,BigInt
  复杂数据类型: Object[function,array,date...]

# 五、TS的数据类型

ts中为了使编写的代码更规范，更有利于维护，增加了类型校验，在ts中主要提供了以下数据类型

 ### 5.1 数字类型(number)

​       在js中数字类型数据:Number

​       但是在ts中数字类型: number

1.  接下来我们先看一下在js中如何定义一个js数字变量	

```javascript
  //在js中定义一个变量的数据类型是通过赋值的方向来定义的,也是可以重复赋值的
  // 首先我们要进行一个运算,计算相加
  let num1 = 1
  let num2 = 2
  let sum = num1 + num2 // 3


  //非正常情况:
  let num3 = 3
  let num4 = 4
  num3 = "3"
  let sum = num3 + num4 // 此时结果是什么? 就会出现问题,那么我们现在来看ts的赋值

```

2. 使用 `number` 定义数值类型：

   ```	typescript
   /**
    * number
    */
   // 十进制
   let decLiteral: number = 6
   // 十六进制
   let hexLiteral: number = 0xf00d
   // ES6中的二进制
   let binaryLiteral: number = 0b1010
   // ES6中的八进制表示法
   let octalLiteral: number = 0o744;
   
   let notANumber: number = NaN;
   /**无穷大*/
   let infinityNumber: number = Infinity;
   
   // 当定义完为数字类型的数据的时候,在定义为str
   let num: number = 1,
       num = "2222" // Error: 不能将"string"类型赋值给"number"
   ```


### 5.2 布尔值类型(boolean)

布尔值是最基础的数据类型，在 TypeScript 中，使用 `boolean` 定义布尔值类型： 

```typescript
let isDone: boolean = false;
// 编译通过 tsc xxx
// 后面约定，未强调编译错误的代码片段，默认为编译通过
```

### 5.3 字符串类型(string)

使用 `string` 定义字符串类型：

```	typescript
/**
 * 字符串 string
 */
let myName:string = '小红'
let myAge: number = 12
// 造句
let sentence = `My name is ${myName},My age is ${myAge}`
document.body.innerHTML = sentence
```

### 5.4  数组(Array<number> || number[] )

1. js中的数组定义
      第一种: []

       ```js
       let array = []
       ```

   第二种: new Array

   ```typescript
      let array =  new Array()
      array.push(1)
   ```

2. TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。

​	 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组,

```typescript

/**number[], string[]**/
let list: number[] = [1,2,3,4]
let listString: string[] = ['1','2','3']
// 任何数据错误都会进行提示

let list: number[] = [1,2,3,'4']
// 报错: 不能将类型“string”分配给类型“number”。
```

​	  第二种,式是使用数组泛型，`Array<元素类型>`：

```typescript
/**
 * 数组
 * number[]
 * string[]
 * Array<number>
 */

let list: number[] = [1,2,3,]
list.push(6)
let listString: string[] = ['1','2','3']
list.uunshif('9')
let arrayList: Array<number> = [1,2,3]
let stringList: Array<string> = ['1','2','3']

let arrayList: Array<number> = [1,2,'3']
// 报错: 不能将类型“string”分配给类型“number”。
//所有的数组方法依旧能用
//
```

### 5.5 undefined 和null 类型

null 和 undefined 有一些共同特点，所以我们放在一起讲。说它们有共同特点，是因为在 JavaScript 中，undefined 和 null 是两个基本数据类型。在 TypeScript 中，这两者都有各自的类型即 undefined 和 null，也就是说它们既是实际的值，也是类型，来看实际例子：

```typescript
let u: undefined = undefined;
let n: null = null;
```

### 5.6 对象(object)

1. js中定义对象的方法

​		第一种 {}

  ```typescript
  let object = {}
  ```

​		第二种 new Object{}

  ```typescript
  let object = new Object()
  ```

​		第三种 使用字面量方法创建对象

  ```typescript
 let person = {name: 'zhang', age:20}
  ```

​		第四种 工厂模式创建对象

​		第五种构造函数创建对象

`Object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

2. 在ts中对象的使用

使用`object`类型，就可以更好的表示像`Object.create`这样的API。例如：

```typescript
declare function create(o:object | null) : void
create({props: 0})
create(null)
create(3222) // 类型“number”的参数不能赋给类型“object”的参数。
create("dddd") // 类型“string”的参数不能赋给类型“object”的参数。
create(undefined) // Error类型“undefined”的参数不能赋给类型“object | null”的参数
// 简单
let obj: {name: string}
obj = {name: '小红', age: 13}
```

### 

### 5.7 元组 (Tuple)

数组: 合并了相同类型的对象，长度不限制
元组（Tuple）: 合并了不同类型的对象,已知长度


```typescript
  // 定义一个具有`string`,`number`的元组
  let tom: [string, number] = ['Tom', 25];
```

当赋值或访问一个已知索引的元素时，会得到正确的类型：
```typescript
    let tom: [string, number];
    tom[0] = 'Tom';
    tom[1] = 25;
    
    tom[0].slice(1); // om
    tom[1].toFixed(2); // 3

```


### 5.8 枚举(enum)

`enum`类型是对JavaScript标准数据类型的一个补充,使用枚举类型可以为一组数值赋予友好的名字。

```typescript
/**
 * 枚举
 * enum
 * 当定义的变量越多,我们单独封装,会越好维护以后得项目,方便项目的查看
 */

enum Color {
    /**红色 */
    Red = 1,
    /**蓝色 */
    Blue = 2,
    /**绿色 */
    Green = 3
}
let c: Color = Color.Green;
console.log(c) // 3
```

### 5.9 Any(any)

​	JavaScript 的类型是灵活的，程序有时也是多变的。有时，我们在编写代码的时候，并不能清楚地知道一个值到底是什么类型，这时就需要用到 any 类型，即任意类型。我们来看例子：

```js
let value: any;
value = 123;
value = "abc";
value = false;
```

​	你可以看到，我们定义变量 value，指定它的类型为 any，接下来赋予任何类型的值都是可以的。

​	我们还可以在定义数组类型时使用 any 来指定数组中的元素类型为任意类型：

```js
const array: any[] = [1, "a", true];
```

   **但是请注意，不要滥用 any，如果任何值都指定为 any 类型，那么 TypeScript 将失去它的意义。**

   所以如果类型是未知的，更安全的做法是使用unknown类型，我们本小节后面会讲到。

### 5.13 void类型

​		void 和 any 相反，any 是表示任意类型，而 void 是表示没有任意类型，就是什么类型都不是，这在我们定义函数，函数没有返回值时会用到：

```typescript
/**
 * void类型
 */
function alertName(): void  {
    console.log('My name is void');  
}
/**
 * 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
 */
 function alertNames(): string{
    console.log('My name is void');  
    return 'My Name is string'
}
```

**void 类型的变量只能赋值为 `undefined``**，**其他类型不能赋值给 void 类型的变量**。

### 5.11 never类型

1. `never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

2. `never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

3. 简单来说就是用来抛错

   ```typescript
   // 返回never的函数必须存在无法达到的终点
   function error(message: string): never {
       throw new Error(message);
   }
   
   // 推断的返回值类型为never
   function fail() {
       return error("Something failed");
   }
   ```

### 5.12 unknown

`unknown`类型是TypeScript在3.0版本新增的类型，它表示未知的类型，这样看来它貌似和any很像，但是还是有区别的，也就是所谓的“**unknown相对于any是安全的**”。怎么理解呢？我们知道当一个值我们不能确定它的类型的时候，可以指定它是any类型；但是当指定了any类型之后，这个值基本上是“废”了，你可以随意对它进行属性方法的访问，不管有的还是没有的，可以把它当做任意类型的值来使用，这往往会产生问题，如下：

```typescript
let value: any
console.log(value.name)
console.log(value.toFixed())
console.log(value.length)
```

上面这些语句都不会报错，因为value是any类型，所以后面三个操作都有合法的情况，当value是一个对象时，访问name属性是没问题的；当value是数值类型的时候，调用它的toFixed方法没问题；当value是字符串或数组时获取它的length属性是没问题的。

而当你指定值为unknown类型的时候，如果没有通过基于控制流的类型断言来缩小范围的话，是不能对它进行任何操作的，关于类型断言，我们后面小节会讲到。总之这里你知道了，unknown类型的值不是可以随便操作的。

我们这里只是先来了解unknown和any的区别，unknown还有很多复杂的规则，但是涉及到很多后面才学到的知识，所以需要我们学习了高级类型之后才能再讲解。

### 5.13 扩展阅读

   1. 交叉类型(&)

    交叉类型就是取多个类型的并集，使用 & 符号定义，被&符链接的多个类型构成一个交叉类型，表示这个类型同时具备这几个连接起来的类型的特点，来看例子：
      ```typescript
        /**
        * 交叉类型
        */
    
        interface use {
            name: string,
            age: number
        }
        interface per {
            sex: number
        }
        type allInfo = use & per
        let persion: allInfo = {name: "xxxx",age: 1,sex:1}
      ```
    
    2. 联合类型(|)
      ```
        /**
        * 联合类型
        */
        let allType: number | string 
        allType = 1;
        allType = "eddd"
        // 不能将类型“boolean”分配给类型“string | number”。
        //allType = false
      ```
    3. 类型断言 <尖括号>
    
      有时候一个数据的值是多变的,并不是单一,这个时候我们就要告诉编译器,我知道我要什么,我自己检查了,不需要你检查.我自己定义他的类型
    
      类型断言有两种写法
    
      1. 其一是“尖括号”语法：
    
        ```	typescript
        /***
         * 类型断言
        * 尖括号写类型断言
        */
        let someValue: any;
        someValue = 123;
        someValue = "dddd";
        let someValueLength = (<string>someValue).length
        ```
    
        2. as写法
    
            ```typescript
            /**
             * 第二种 作为as进行编写
            */
            let someName: any;
            someName = 123
            someName = '123'
            let someNameValueLength = (someName as string).length
            ```




## 五、知识总结

image.png

image.png

https://naotu.baidu.com/file/ff4a0ab45aa3a3368db2e42e87afffb7
```
1、明白什么是ts
2、明白ts的安装和编译
3、能够配置Ts自动编译
4、明白ts数据类型
```

## 六、作业安排

```
1、练习随堂代码
2、预习第八单元
```

