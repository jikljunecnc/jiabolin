// new Array(),创建数组的长度
// .fill填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充

const getArray = (value: any, times: number = 5): any[] => {
    return new Array(times).fill(value)
}

getArray([1], 2).forEach(item =>){
    console.log(item.lenght);
}

getArray(2, 3).forEach(item => {
    console.log(item.lenght);

})


const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

getArray<number[]>([1, 2], 3).forEach(item => {
    console.log(item.lenght);
})

getArray<number>(2, 3).forEach(item => {
    console.log(item.lenght);//类型number不存在属性
})

const getLenght = <T>(param: T): number => {
    return param.lenght//error类型<T>上不存在属性性“lenght”
}


const getArray = <T, U>(param1: Text, paam2: U, times: number): [T, U] => {
    return new Array(times).fill([param1, paam2])
};
getArray(1, "a", 3).forEach(item => {
    console.log(item[0].lenght);//error 类型'number'上下存在属性“lenght”
    console.log(item[1].toFixed(2))//error 属性’toFixed在类型“string”上不存在
})

type GetArry = <T>(arg: T, times: number) => T[];
const getArry: GetArry = <T>(arg: Text, times: number): T[] => {
    return new Array(times).fill(arg)
}

interface GetArray {
    <T>(arg: T, times: number): T[];
  }
  const getArray: GetArray = <T>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg);
  };

  interface GetArray<T> {
    (arg: T, times: number): T[];
    tag: T;
  }
  const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
    // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
    // 属性“tag”的类型不兼容。
    return new Array(times).fill(arg);
  };
  getArray.tag = "a"; // 不能将类型“"a"”分配给类型“number”
  getArray("a", 1); // 不能将类型“"a"”分配给类型“number”

  interface ValueWithLength {
    length: number;
  }
  const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'


  interface ValueWithLength {
    length: number;
  }
  const getLength = <T extends ValueWithLength>(param: T): number => {
    return param.length;
  };
  getLength("abc"); // 3
  getLength([1, 2, 3]); // 3
  getLength({ length: 3 }); // 3
  getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数


  const getProps = (object, propName) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProps(obj, "c"); // undefined


  const getProp = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数
// new Array(),创建数组的长度
// .fill填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充

const getArray = (value: any, times: number = 5): any[] => {
    return new Array(times).fill(value)
}

getArray([1], 2).forEach(item =>){
    console.log(item.lenght);
}

getArray(2, 3).forEach(item => {
    console.log(item.lenght);

})


const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

getArray<number[]>([1, 2], 3).forEach(item => {
    console.log(item.lenght);
})

getArray<number>(2, 3).forEach(item => {
    console.log(item.lenght);//类型number不存在属性
})

const getLenght = <T>(param: T): number => {
    return param.lenght//error类型<T>上不存在属性性“lenght”
}


const getArray = <T, U>(param1: Text, paam2: U, times: number): [T, U] => {
    return new Array(times).fill([param1, paam2])
};
getArray(1, "a", 3).forEach(item => {
    console.log(item[0].lenght);//error 类型'number'上下存在属性“lenght”
    console.log(item[1].toFixed(2))//error 属性’toFixed在类型“string”上不存在
})

type GetArry = <T>(arg: T, times: number) => T[];
const getArry: GetArry = <T>(arg: Text, times: number): T[] => {
    return new Array(times).fill(arg)
}

interface GetArray {
    <T>(arg: T, times: number): T[];
  }
  const getArray: GetArray = <T>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg);
  };

  interface GetArray<T> {
    (arg: T, times: number): T[];
    tag: T;
  }
  const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
    // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
    // 属性“tag”的类型不兼容。
    return new Array(times).fill(arg);
  };
  getArray.tag = "a"; // 不能将类型“"a"”分配给类型“number”
  getArray("a", 1); // 不能将类型“"a"”分配给类型“number”

  interface ValueWithLength {
    length: number;
  }
  const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'


  interface ValueWithLength {
    length: number;
  }
  const getLength = <T extends ValueWithLength>(param: T): number => {
    return param.length;
  };
  getLength("abc"); // 3
  getLength([1, 2, 3]); // 3
  getLength({ length: 3 }); // 3
  getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数


  const getProps = (object, propName) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProps(obj, "c"); // undefined


  const getProp = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数
// new Array(),创建数组的长度
// .fill填充数组的方法，将数据填充到其中，分别以不同的数据类型进行填充

const getArray = (value: any, times: number = 5): any[] => {
    return new Array(times).fill(value)
}

getArray([1], 2).forEach(item =>){
    console.log(item.lenght);
}

getArray(2, 3).forEach(item => {
    console.log(item.lenght);

})


const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

getArray<number[]>([1, 2], 3).forEach(item => {
    console.log(item.lenght);
})

getArray<number>(2, 3).forEach(item => {
    console.log(item.lenght);//类型number不存在属性
})

const getLenght = <T>(param: T): number => {
    return param.lenght//error类型<T>上不存在属性性“lenght”
}


const getArray = <T, U>(param1: Text, paam2: U, times: number): [T, U] => {
    return new Array(times).fill([param1, paam2])
};
getArray(1, "a", 3).forEach(item => {
    console.log(item[0].lenght);//error 类型'number'上下存在属性“lenght”
    console.log(item[1].toFixed(2))//error 属性’toFixed在类型“string”上不存在
})

type GetArry = <T>(arg: T, times: number) => T[];
const getArry: GetArry = <T>(arg: Text, times: number): T[] => {
    return new Array(times).fill(arg)
}

interface GetArray {
    <T>(arg: T, times: number): T[];
  }
  const getArray: GetArray = <T>(arg: T, times: number): T[] => {
    return new Array(times).fill(arg);
  };

  interface GetArray<T> {
    (arg: T, times: number): T[];
    tag: T;
  }
  const getArray: GetArray<number> = <T>(arg: T, times: number): T[] => {
    // error 不能将类型“{ <T>(arg: T, times: number): T[]; tag: string; }”分配给类型“GetArray<number>”。
    // 属性“tag”的类型不兼容。
    return new Array(times).fill(arg);
  };
  getArray.tag = "a"; // 不能将类型“"a"”分配给类型“number”
  getArray("a", 1); // 不能将类型“"a"”分配给类型“number”

  interface ValueWithLength {
    length: number;
  }
  const v: ValueWithLength = {}; // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'


  interface ValueWithLength {
    length: number;
  }
  const getLength = <T extends ValueWithLength>(param: T): number => {
    return param.length;
  };
  getLength("abc"); // 3
  getLength([1, 2, 3]); // 3
  getLength({ length: 3 }); // 3
  getLength(123); // error 类型“123”的参数不能赋给类型“ValueWithLength”的参数


  const getProps = (object, propName) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProps(obj, "c"); // undefined


  const getProp = <T, K extends keyof T>(object: T, propName: K) => {
    return object[propName];
  };
  const obj = { a: "aa", b: "bb" };
  getProp(obj, "c"); // 类型“"c"”的参数不能赋给类型“"a" | "b"”的参数