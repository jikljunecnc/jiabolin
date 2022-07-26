

# 第十二单元 class类(上)

## 一、昨日知识点回顾

```
1.函数参数
2.函数重载
```



------

## **三、本单元教学目标**

### （Ⅰ）重点知识目标

```
1.类
2.多态
```

### （Ⅱ）能力目标

```
1.掌握类的定义
2.掌握类的继承
3.掌握类的修饰符
4.掌握静态属性和静态方法
5.了解多态的定义和实现
```

------

## **四、本单元知识详讲**

### 12.1 类

传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

#### 12.1.1 类的定义



1. ES6中类的定义

   ```
   // 声明人的类
   class People {
   						// 类的属性
               constructor(name, age) { // 构造器，实例化方法的时候触发
                   this.name = name
                   this.age = age
               }
               // 类的方法
               sport(){
                   return this.name + '会运动'
               }
    }
   ```

   对类进行实例化

   ``` 
   let p = new People('小明',18)
   ```

   调用类的方法

   ```
   console.log(p.sport()); //小明会运动
   ```

   获取类的属性

   ```
   console.log(p.age); // 18
   ```

   

2. TS中类的定义

   ```
   class People {
       name: string
       age: number
       constructor(name:string,age){
           this.name = name
           this.age = age
       }
       sport():string{
           return `${this.name}会运动`
       }
   }
   ```

   **注意在声明类的时候，需要对类的属性的数据类型进行约束**

   对类进行实例化

   ```
   let p = new People('小明',18)
   // 注意声明类的时候约束name属性为string类型，age属性为数字类型；实例化的时候要严格按照类型传参
   ```

   调用类的方法

   ```
   console.log(p.sport()); //小明会运动
   ```

   获取类的属性

   ```
   console.log(p.age); // 18
   ```



#### 12.1.2 类的继承

1. ES5中的继承

   在ES5中继承可以通过原型链来实现继承

   声明一个动物的构造函数

   ```
   function Animal(name){
        this.name = name
        this.run = ()=>{
           console.log(this.name + '会跑步');
        }
   }
   // 构造函数原型链上添加方法
   Animal.prototype.song = function(){
        console.log(`${this.name}会唱歌`);
   }
   ```

   - 原型链继承

     ```
     function Dog(name){
     
     }
     Dog.prototype = Animal.prototype
     
     let d = new Dog('哈哈')
     d.song() // undefined会唱歌
     ```

   - 原型链加冒充对象的继承方式

     ```
     function Dog(name){
        Animal.call(this,name)
     }
     
     let d = new Dog('哈士奇')
     
     console.log(d.name); // 哈士奇
     console.log(d.run()); // 哈士奇会跑步
     console.log(d.song()); // 报错： d.song is not a function
     // 不能继承原型链上的方法
     ```

   - 组合继承

     ```
      function Dog(name){
         Animal.call(this,name)
      }
     Dog.prototype = Animal.prototype
     
     let d = new Dog('哈士奇')
     
     console.log(d.name);// 哈士奇
     d.run()// 哈士奇会跑步
     d.song()// 哈士奇会唱歌
     
     // 由于调用了两次父类，所以产生了两份实例
     ```

2. ES6中的继承

   声明一个动物的类

   ```
   class Animal {
      constructor(name){
         this.name = name
      }
      run(){
         console.log(`${this.name}会跑步`);
      }
   }
   ```

   声明 狗 类 继承动物类

   ```
   class Dog extends Animal {
       constructor(name){
                   super(name)
       }
   }
   
   
   let d = new Dog('哈士奇')
   console.log(d.name); // 哈士奇
   d.run(); // 哈士奇会跑步
   ```

3. TS中类的继承

   和ES6中的继承一样，只是添加了属性的数据类型

   ```
   class Animal {
       name: string
       constructor(name){
           this.name = name
       }
       getName():string{
           return this.name
       }
   }
   
   class Dog extends Animal {
       constructor(name){
           super(name)
       }
   }
   
   let d = new Dog('哈士奇')
   console.log(d.name); // 哈士奇
   console.log(d.getName());// 哈士奇
   ```

#### 12.1.3 类的修饰符

定义属性的时候提供了三种修饰符 
public          公有，类里面、子类、类外面都可以访问 
protected   保护类型 类里面、子类可以访问  类外面不可以访问
private		私有类型 类里面可以访问，其他不行

### 如果不加修饰符，默认是public

1. 使用 public 修饰符，公有，类里面、子类、类外面都可以访问

   ```
   class Animal {
       name: string
       constructor(name){
           this.name = name
       }
       getName():string{
           // 父类内部获取name属性
           return this.name
       }
   }
   // 实例化父类
   let a = new Animal('动物')
   // 父类外获取name属性
   console.log(a.name);
   
   // 声明 狗类 继承 动物类
   class Dog extends Animal {
       constructor(name){
           super(name)
       }
       run():string{
           // 子类内部获取name属性
           return this.name + '会运动'
       }
   }
   
   // 实例化子类
   let d = new Dog('哈士奇')
   // 子类 类外
   console.log(d.name);
   console.log(d.getName());
   ```

2. 使用 protected 修饰符，类里面、子类可以访问  类外面不可以访问

   ```
   class Animal {
       protected name: string
       constructor(name){
           this.name = name
       }
       getName():string{
           // 父类内部获取name属性
           return this.name
       }
   }
   // 实例化父类
   let a = new Animal('动物')
   // 父类外获取name属性
   console.log(a.name); // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
   
   // 声明 狗类 继承 动物类
   class Dog extends Animal {
       constructor(name){
           super(name)
       }
       run():string{
           // 子类内部获取name属性
           return this.name + '会运动'
       }
   }
   
   // 实例化子类
   let d = new Dog('哈士奇')
   // 子类 类外
   console.log(d.name);  // 编译报错 属性“name”受保护，只能在类“Animal”及其子类中访问。
   console.log(d.getName());
   ```

   

3. 使用 private 修饰符，类里面可以访问，其他不行

   ```
   class Animal {
       private name: string
       constructor(name){
           this.name = name
       }
       getName():string{
           // 父类内部获取name属性
           return this.name
       }
   }
   // 实例化父类
   let a = new Animal('动物')
   // 父类外获取name属性
   console.log(a.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
   
   // 声明 狗类 继承 动物类
   class Dog extends Animal {
       constructor(name){
           super(name)
       }
       run():string{
           // 子类内部获取name属性
           return this.name + '会运动' // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
       }
   }
   
   // 实例化子类
   let d = new Dog('哈士奇')
   // 子类 类外
   console.log(d.name); // 编译报错: 属性“name”为私有属性，只能在类“Animal”中访问
   console.log(d.getName());
   
   ```

#### 12.1.4 静态属性和静态方法

1. 静态属性

   使用static修饰静态属性

   ```
   class Animal {
       name:string
       static prop: string = '1'
       constructor(name:string){
           this.name = name
       }
       getName():string{
           return this.name
       }
   }
   
   console.log(Animal.prop); // 1
   
   let a = new Animal('小狗')
   
   console.log(a.prop); // 属性“prop”在类型“Animal”上不存在
   ```

   静态属性不能在实例上获取

2. 静态方法

   ```
   class Animal {
       name:string
       static prop: string = '1'
       constructor(name:string){
           this.name = name
       }
       getName():string{
           return this.name
       }
       static sayHello():string{
           return 'hello'
       }
   }
   // Animal.prop = 'haha'
   
   console.log(Animal.prop); // 1
   
   console.log(Animal.sayHello()); // hello
   
   let a = new Animal('小狗')
   
   console.log(a.prop); // 属性“prop”在类型“Animal”上不存在
   console.log(a.sayHello()); // 性“sayHello”在类型“Animal”上不存在
   ```

   静态方法不能在实例上获取

### 12.2 多态

#### 12.2.1 多态的定义

父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现

#### 12.2.2 多态的实现

1. 首先声明一个父类，父类中声明一个方法，不去实现

   ```
   class Animal {
       name:string
       constructor(name:string){
           this.name = name
       }
       // 父类定义了一个方法，不去实现
       eat(){}
   }
   ```

2. 声明一个类继承父类，并且实现 eat 方法

   ```
   class Dog extends Animal{
       constructor(name:string){
           super(name)
       }
       eat():void{
           console.log(`${this.name}吃骨头`);
           
       }
   }
   ```

3. 再声明一个类继承父类，并且实现 eat 方法

   ```
   class Cat extends Animal{
       constructor(name:string){
           super(name)
       }
       eat():void{
           console.log(`${this.name}吃鱼`);
           
       }
   }
   ```

   我们可以看到，父类 Animal 内声明了 eat 方法；但是没有去实现，而是有继承他的子类 Dog 和 Cat 去实现，每个子类有不同的表现，这就是多态的实现



## 五、本单元知识总结

```
1. 明白类的定义
2. 明白类的继承
3. 明白类的修饰符
4. 掌握静态属性和静态方法
5. 了解多态
```

------

## **六、作业安排**

### （Ⅰ）课后作业

```
1.练习随堂代码
```
