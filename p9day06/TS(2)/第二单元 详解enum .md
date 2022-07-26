# 第二单元 深入学习枚举

  枚举是 TypeScript 新增加的一种数据类型，这在其他很多语言中很常见，但是 JavaScript 却没有。

  枚举使用**enum**关键字定义，TypeScript 支持数字和字符串的枚举。

 #### 2.4.1 数字枚举

​	1. 递增方式新增索引

```typescript
enum Status {
  /**
     * 数字类型
     * 1. 语法使用的是es6的语法,Uploading: Uploading
     * 2. 自动添加指定索引符合
     * 3. 我们可以像访问对象一样使用',' 和 '[]'两种方式访问里面的值
     */
    enum Status {
        Uploading,
        Success,
        Falied
    }

    console.log(Status.Uploading) // 0
    console.log(Status['Success']) // 1
    console.log(Status.Falied) // 2
}
```

以上例子并没有指定索引,是默认的编号,我们也可以自己指定

```typescript
/**
 * 2.隔行添加数字类型
 * 下面依次添加的数据类型将按照顺延的方式进行添加索引值
 * 
 * 3. 如果隔行重新新增索引值,将会一直进行递增方式,递增索引值
 */

enum InterLeave {
    Yes = 200,
    Create,
    Accept = 800,
    BadRequest
}

console.log(InterLeave['Yes']); // 200
console.log(InterLeave.Create); // 201
console.log(InterLeave.Accept); // 800
console.log(InterLeave.BadRequest);  // 801

```

**总结: 每次手动添加索引的时候,下面数据如果不是手动添加的索引,将会以递增的方式,把索引展示出来**

**这样做的好处: 减少代码中魔法数字的出现,便于后续维护代码**

3. 使用常量和计算值

    **数字枚举**在定义值的时候,可以使用计算值和常亮,但是要注意,如果某个字段使用了计算值或常量,**那么该字段后面紧接着的字段必须设置初始值**,这里就不能默认递增了

   ```typescript
   //枚举成员必须具有初始化表达式。
   enum Constant {
       a = getvalue(),
       b, // 枚举成员必须具有初始化表达式。
       c,
   }
   
   console.log(Constant['a']);
   console.log(Constant.b);
   console.log(Constant.c);
   ```



#### 2.4.2 反向映射 -- 只支持数字枚举反射

我们定义一个枚举值的时候,可以通过Enum['key']或者Enum.key的形式获取到对应的value值,Ts还支持反向映射,但是反向映射只支持数字枚举,字符串枚举是不支持的

```typescript
 /**
  * 反向枚举
  */

 enum Status {
    Success = 200,
    NotFound = 404,
    Error = 500
 }

 console.log(Status['Success']); // 200
 console.log(Status[200]); // Success
 console.log(Status[Status['Success']]); // Success
```

为什么可以反向映射啊,因为js将对象的属性名和值,分别作为对象的属性名和值进行储存

```js
{
	200: 'Success',
  400: 'NotFound',
  500: 'Error',
  Error: 500,
  NotFound: 400,
  Success: 200
}
```



### 2.4.3 字符串枚举

Ts2.4版本新增的字符串枚举,字符串枚举要求每个字段的值都必须是字符串字面量,或者是该枚举值中另一个字符串枚举成员,先来看简单的例子

```typescript
/**
  * 字符串枚举
  */

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

 console.log(Message.SuccessError,'SuccessError')
 console.log(Message.Error);
 console.log(Message['ClientError']);
```

**注意，这里的其他枚举成员指的是同一个枚举值中的枚举成员，因为字符串枚举不能使用常量或者计算值，所以也不能使用其他枚举值中的成员。**

### 2.4.4 异构枚举

异构枚举是指枚举值中既有字符串,又有数字等多种类型结合的枚举值,但是一般不建议使用.因为我们创建枚举值,一般都是类似的.如果我们定义的是状态值,一般都是数字,如果定义的是提示信息,一般都是字符串.方便我们维护和管理

```typescript
 /**
  * 异构枚举
  */
 enum Result {
    Faild = 0,
    Success = "Success"
 }
```



**但如果不是真的需要,我们一般不建议使用**

### 2.4.5 枚举成员类型和联合枚举类型

1. 枚举成员类型

```typescript
/**
  * 枚举成员类型
  */

 enum Animal{
    Dog = 1,
    Cat = 2,
 }

 /**
  * 狗
  */
 interface Dog {
    type: Animal.Dog
 }

 /**
  * 猫
  */
 interface Cat {
    type: Animal.Cat
 }

 let cat1: Cat = {
    type: Animal.Dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
  };
  let dog: Dog = {
    type: Animal.Dog
  };
```

2. #### 联合枚举类型

```typescript
/**
 * 联合数据类型
 * 多种数据类型全部联合起来
 */

/**定义一个枚举的状态 */
enum Keys {
    Off,
    On
}

/**申明一个接口类型 
 * 表明: 状态只能是开和关其中的一个
*/
interface Light {
    status: Keys
}

let Light4: Light = {
  status: Keys.Off
}
```

**总结: 上面的例子Light的status表明  状态必须是Keys其中的一个也就是 Keys.Off 或 Keys.On**

### 2.4.6 运行时的枚举

枚举在编译成 JavaScript 之后实际是一个对象。这个我们前面讲过了，既然是对象，那么就可以当成对象来使用，我们来看个例子：

```typescript
enum E {
  A,
  B
}
const getIndex = (enumObj: { A: number }): number => {
  return enumObj.A;
};
console.log(getIndex(E)); // 0
```

上面这个例子要求 getIndex 的参数为一个对象，且必须包含一个属性名为’A’的属性，其值为数值类型，只要有这个属性即可。当我们调用这个函数，把枚举值 E 作为实参传入是可以的，因为它在运行的时候是一个对象，包含’A’这个属性，因为它在运行的时候相当于下面这个对象：

```typescript
{
    0: "A",
    1: "B",
    A: 0,
    B: 1
}
```

### 2.4.7 const enum的用法



我们定义了枚举值之后，编译成 JavaScript 的代码会创建一个对应的对象，这个对象我们可以在程序运行的时候使用。但是如果我们使用枚举只是为了让程序可读性好，并不需要编译后的对象呢？这样会增加一些编译后的代码量。所以 TypeScript 在 1.4 新增 const enum*(完全嵌入的枚举)*，在之前讲的定义枚举的语句之前加上`const`关键字，这样编译后的代码不会创建这个对象，只是会从枚举里拿到相应的值进行替换，来看我们下面的定义：

```typescript
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
console.log(status45,status57);
```

编译后的代码

```js
/**
 * const enum
 */
var Animal;
(function (Animal) {
    Animal[Animal["Rabbit"] = 0] = "Rabbit";
    Animal[Animal["Pig"] = 1] = "Pig";
})(Animal || (Animal = {}));
var status45 = Animal.Pig;
var status57 = 0 /* Light90.Off */;
console.log(status45, status57);
```

我们来看下  Animal 的处理，先是定义一个变量  Animal，然后定义一个立即执行函数，在函数内给  Animal 添加对应属性，首先` Animal[“Rabbit”] = 0`是给`Animal`对象设置`Pig`属性，并且值设为 0，这个赋值表达式的返回值是等号右边的值，也就是 0，所以`Animal[Rabbit[“Rabbit”] = 0] = "Rabbit"`相当于`Animal[0] = “Rabbit”`。创建了这个对象之后，将 Animal 的 Rabbit 属性值赋值给 animal；再来看下 status 的处理，我们看到编译后的代码并没有像`Status`创建一个`Animal`对象，而是直接把`Animal.Dog`的值`0`替换到了`const animal = Animal.Dog`表达式的`Animal.Dog`位置，这就是**const enum**的用法了。



### 小节

​        本小节我们学习了两种基本的枚举：数字枚举和字符串枚举，它俩的最主要的区别就是枚举成员值的类型了，数字枚举成员的值必须都是数值类型，而字符串枚举成员的值必须都是字符串。枚举还有一个概念叫反向映射，就是当我们定义了枚举值后，不仅定义了字段到值的映射，同时编译器根据反向映射定义了值到字段的映射。我们还学习了数字枚举和字符串枚举的杂交体——异构枚举，但是很少用，原因也解释过了；枚举值和枚举成员在作为值使用的同时，还可以作为类型使用，但是有三个条件，可以回顾下；最后我们还学习了枚举值在编译后是一个对象，可以在运行时使用，如果我们在运行时用不到，可以在定义枚举时在前面加上`const`来选择不生成对象，而是直接将值替换到响应位置。

