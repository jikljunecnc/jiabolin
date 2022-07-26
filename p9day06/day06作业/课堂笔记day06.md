泛型：概念

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性**, 使用标识符号**<T>**

我们在定义函数之前，使用`<>`符号定义了一个泛型变量 T，这个 T 在这次函数定义中就代表某一种类型，它可以是基础类型，也可以是联合类型等高级类型。

定义了泛型变量之后，你在函数中任何需要指定类型的地方使用 T 都代表这一种类型。比如当我们传入 value 的类型为数值类型，那么返回的数组类型`T[]`就表示`number[]`。现在我们再来调用一下这个 getArray 函数：



### 2.9.2. 泛型变量

当我们使用泛型的时候，你必须在处理类型涉及到泛型的数据的时候，把这个数据当做任意类型来处理。这就意味着不是所有类型都能做的操作不能做，不是所有类型都能调用的方法不能调用。

当我们获取一个类型为泛型的变量 param 的 length 属性值时，如果 param 的类型为数组 Array 或字符串 string 类型是没问题的，它们有 length 属性。但是如果此时传入的 param 是数值 number 类型，那这里就会有问题了。



### 2.9.3. 泛型函数类型

我们可以定义一个泛型函数类型，还记得我们之前学习函数一节时，给一个函数定义函数类型，现在我们可以使用泛型定义函数类型：

，所以不仅函数的类型中可以使用 T，在属性 tag 的定义中也可以使用。但在使用接口的时候，要在接口名后面明确传入一个类型，也就是这里的`GetArray<number>`，那么后面的 arg 和 tag 的类型都得是 number 类型。



### 2.9.4 泛型约束

当我们使用了泛型时，就意味着这个这个类型是任意类型。但在大多数情况下，我们的逻辑是对特定类型处理的。还记得我们前面讲泛型变量时举的那个例子——当访问一个泛型类型的参数的 length 属性时，会报错"类型“T”上不存在属性“length”"，是因为并不是所有类型都有 length 属性。