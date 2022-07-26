/**
 * enum的详解
 * 1.总结: 每次手动添加索引的时候,下面数据如果不是手动添加的索引,将会以递增的方式,把索引展示出来
 * 2. 数字类型,我们可以像访问对象一样使用',' 和 '[]'两种方式访问里面的值
 * 3. 字符串枚举的特点:含字符串值成员的枚举中不允许使用计算值。
 *    枚举成员必须具有初始化表达式。
 *
 */
/**
 * ---数字类型的定义
 *  /**
     * 数字类型
     * 1. 语法使用的是es6的语法,Uploading: Uploading
     * 2. 自动添加指定索引符合
     * 3. 我们可以像访问对象一样使用',' 和 '[]'两种方式访问里面的值
     */
var Status;
(function (Status) {
    Status[Status["Uploading"] = 0] = "Uploading";
    Status[Status["Success"] = 1] = "Success";
    Status[Status["Falied"] = 2] = "Falied";
})(Status || (Status = {}));
//像访问对象一样使用',' 
console.log(Status.Falied);
console.log(Status['Falied']);
console.log(Status.Success);
/**
 * 指定索引值
 * 总结: 每次手动添加索引的时候,下面数据如果不是手动添加的索引,将会以递增的方式,把索引展示出来
 */
var Anmimal;
(function (Anmimal) {
    /**猪 */
    Anmimal[Anmimal["Pig"] = 200] = "Pig";
    /**狗 */
    Anmimal[Anmimal["Dog"] = 201] = "Dog";
    /**猫 */
    Anmimal[Anmimal["Cat"] = 300] = "Cat";
    /**蛇 */
    Anmimal[Anmimal["Snake"] = 301] = "Snake";
})(Anmimal || (Anmimal = {}));
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);
//-------------计算值
var getvalue = function () {
    return 1;
};
// 3.计算值和常量
var Constant;
(function (Constant) {
    Constant[Constant["a"] = getvalue()] = "a";
    Constant[Constant["b"] = void 0] = "b";
    Constant[Constant["c"] = void 0] = "c";
})(Constant || (Constant = {}));
/**
 * 4. 反向映射
 */
var Statuss;
(function (Statuss) {
    Statuss[Statuss["Success"] = 200] = "Success";
    Statuss[Statuss["NotFound"] = 404] = "NotFound";
    Statuss[Statuss["Error"] = 500] = "Error";
})(Statuss || (Statuss = {}));
console.log(Statuss.Error);
console.log(Statuss[404]);
console.log(Statuss.NotFound);
/**
 * 5.字符串枚举
 */
/**
 * 字符串枚举
 */
var getValue = function () {
    return 0;
};
var names = '小明';
var Message;
(function (Message) {
    /**错误信息 */
    Message["Error"] = "error message";
    /**成功的错误信息
     * 枚举成员必须具有初始化表达式。
    */
    Message[Message["SuccessError"] = 200] = "SuccessError";
    // 含字符串值成员的枚举中不允许使用计算值。
    // 含字符串值成员的枚举中不允许使用计算值。
    Message[Message["ClientError"] = 0] = "ClientError";
})(Message || (Message = {}));
console.log(Message.SuccessError, 'SuccessError');
console.log(Message.Error);
console.log(Message['ClientError']);
/**
 * 6.异构枚举
 */
var Result;
(function (Result) {
    Result[Result["Faild"] = 0] = "Faild";
    Result["Success"] = "Success";
})(Result || (Result = {}));
/**
 * 7.枚举成员类型
 */
/**
 * 枚举成员类型
 */
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 1] = "Dog";
    Animal[Animal["Cat"] = 2] = "Cat";
})(Animal || (Animal = {}));
var cat1 = {
    type: Animal.Dog // error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
};
var dog = {
    type: Animal.Dog
};
/**
 * 联合类型
 */
var Keys;
(function (Keys) {
    /**关闭 */
    Keys[Keys["Off"] = 0] = "Off";
    Keys[Keys["On"] = 1] = "On";
})(Keys || (Keys = {}));
var light = {
    status: Keys.Off
};
/**
 * 运行时对象
 */
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
})(E || (E = {}));
var getIndex = function (enumObj) {
    return enumObj.C;
};
console.log(getIndex(E)); // 0
/**
 * const enum
 */
/**
* const enum
*/
(function (Animal) {
    Animal[Animal["Rabbit"] = 0] = "Rabbit";
    Animal[Animal["Pig"] = 1] = "Pig";
})(Animal || (Animal = {}));
var status45 = Animal.Pig;
var status57 = 0 /* Light90.Off */;
console.log(status45, status57);
