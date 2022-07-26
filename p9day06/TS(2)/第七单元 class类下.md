# 第十三单元 class类(下)

## 一、昨日知识点回顾

```
1.类的定义
2. 类的继承
3. 类的修饰符
4.静态属性和静态方法
2.多态
```

------

## **二、本单元知识点概述**

### （Ⅰ）指定教材

​	无

### （Ⅱ）知识点概述

![]()

### （Ⅲ）教学时长

​	共4课时，180分钟

------

## **三、本单元教学目标**

### （Ⅰ）重点知识目标

```
1.抽象类
2.类类型接口
3.接口的继承
```

### （Ⅱ）能力目标

```
1.掌握抽象类的概念
2.掌握类类型接口
3.掌握接口的继承
```

------

## **四、本单元知识详讲**

### 13.1 抽象类

#### 13.1.1 抽象类的定义

 提供其他类继承的基类，不能直接被实例化

#### 13.1.2 抽象类和抽象方法

1. 定义抽象类的语法

   ```tsx
   abstract class 类名 {}
   ```

2. 抽象类不能直接被实例化

   ```tsx
   abstract class Animal {
       name: string
       constructor(name:string){
           this.name = name
       }
       getName():string{
           return this.name
       }
   }
   
   let a = new Animal('小明') //报错  无法创建抽象类的实例。ts(2511)
   ```

   抽象类不能直接被实例化，只是提供其他类继承的一个基类

   ```ts
   abstract class Animal {
       name: string
       constructor(name:string){
           this.name = name
       }
       getName():string{
           return this.name
       }
   }
   // 狗类继承 动物类
   class Dog extends Animal {
       constructor(name:string){
           super(name)
       }
   }
   ```

3. 抽象方法

   抽象方法的语法：

   ```ts
   abstract 方法名():{}
   ```

   - 抽象方法不能脱离抽象类使用ts

     ```ts
     class Animal {
         name: string
         constructor(name:string){
             this.name = name
         }
         abstract eat():string // 报错：抽象方法只能出现在抽象类中。
     }
     ```

     也就是说，抽象方法只能出现在抽象类中

     ```
     abstract class Animal {
         name: string
         constructor(name:string){
             this.name = name
         }
         abstract eat():string
     }
     ```

   - 抽象方法不能有具体体现

     ```
     abstract class Animal {
         name: string
         constructor(name:string){
             this.name = name
         }
         abstract eat():string{ // 报错：方法“eat”不能具有实现，因为它标记为抽象
             return ''
         }
     }
     ```

     也就是说抽象方法不能有具体体现，只能在派生类中实现

   - 定义标准

     ```
     abstract class Animal {
         name: string
         constructor(name:string){
             this.name = name
         }
         abstract eat():string
     }
     
     // let a = new Animal('小明')
     
     
     class Dog extends Animal {
         constructor(name:string){
             super(name)
         }
         // 派生类中具体实现抽象方法
         eat(): string {
             return this.name
         }
     }
     ```

     使用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现且必须在派生类中实现
     抽象方法只能放在抽象类里面；也就是说**抽象类和抽象方法是定义标准的**

### 13.2 类类型接口

#### 13.2.1 接口约束类

类类型接口，和抽象类很类似，是用来约束类的；也就是类中必须有哪些属性和方法

1. 定义一个接口,约束必须有name属性和eat方法

   ```
   interface IAnimal {
       name: string
       eat():string
   }
   ```

   使用接口约束类,

   语法:

   ```
   class 类型 implements 接口名 {}
   ```

   使用上述接口约束类

   - [ ] 错误写法：不写方法

     ```
     class Animal implements IAnimal { 
         name: string;
         constructor(name:string){
             this.name = name
         }
     }
     // 报错：类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "eat"，但类型 "IAnimal" 中需要该属性
     ```

     因为接口要求有eat方法

   - [ ] 错误写法：不写属性

     ```
     class Animal implements IAnimal {
         eat(): string {
             return ''
         }
     }
     // 报错： 类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "name"，但类型 "IAnimal" 中需要该属性。
     ```

     因为接口要求有 name属性

   - [ ] 正确的写法

     ```
     class Animal implements IAnimal {
         name: string;
         constructor(name:string){
             this.name = name
         }
         eat(): string {
             return ''
         }
     }
     ```

     也就是说，使用接口约束类；约束了类必须具有哪些属性和方法

### 13.3 接口的继承

#### 13.3.1 接口继承的实现

接口也可以实现继承

1. 声明一个接口，要求有一个name属性

   ```
   interface Ianimal {
       name: string
   }
   ```

2. 声明一个接口继承上述接口

   接口继承语法：接口一继承接口二

   ```
   interface 接口一 extends 接口二 {}
   ```

   ```
   interface IPeople extends Ianimal {
       work():void
   }
   ```

   实现接口约束类

   ```
   class Coder implements IPeople {
       name: string
       constructor(name){
           this.name = name
       }
       work(): void {
           
       }
   }
   ```

   我们可以发现，使用IPeople约束类的时候，类必须同时具有name属性和work方法



## 五、本单元知识总结

```
1. 明白抽象类的概念
2. 明白类类型接口的实现
3. 明白接口继承的实现
```

------

## **六、作业安排**

### （Ⅰ）课后作业

```
1.练习随堂代码
```


### （ Ⅱ ）预习作业

```
1.	预习第十四单元 
```

###### 预习附录：

```

```