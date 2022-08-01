<!-- <template>
  <div class="q">


    <h1>学习v3简单语法</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>{{ age2 }}</h2>
    <button @click="persionInfo">我是v3中获取信息</button>
    <button @click="persionInfo">个人信息</button>
  </div>
</template>

<script lang="ts" >
export default {

  setup() {
    let name = "贾博林";
    let age = 20;
    let age2 = 30;
    const persionInfo = () => {
      alert(`我是${name},我${age},${age2}岁`);
    };
    // 返回值
    return {
      name,
      age,
      age2,
      persionInfo,
    };
  },
};
</script>

<style lang="scss">
.q {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: green;
}

button {
  cursor: pointer;
}
</style> -->






<!-- <template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count.value }}</h3>
  <button @click="updataCount">更新数据</button>
</template>

<script lang="ts" >
import { ref } from '@vue/reactivity';
export default {
  // vue2的写法
  // data() {
  //   return {
  //     count: 0,//属性
  //   }
  // },
  // methods: {
  //   updataCount() {//方法
  //     this.count++
  //   }
  // },

  // vue3的实现方法
  setup(){
    // console.log("第一次");
    
    // let count=0 //变量
    const count =ref(0)
    console.log(count);
    
    function updataCount(){
      console.log('=====');
      count.value++
      // count++
      
    }
    return{
      // 属性
      count,
      updataCount
    }
  }

}
</script>

<style lang="scss" scoped>
</style> -->





<!-- <template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr>
  <button @click="updateUser">更新数据 </button>
</template>

<script lang="ts" >
export default {
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息
  setup() {
    const obj:any = {
      nama: "小明",
      age: 20,
      wife: {
        name: "小甜甜",
        age: 18,
        cars: ["奔驰", "宝马", "奥迪"]
      },
    }
    const user = reactive(obj);
    console.log(user);
    // 方法
    const updateUser = () => {
      user.name += '==',
        user.age += 2,
        user.wife.name = "++",
        user.wife.cars[0] = "玛莎拉蒂"
    }
    return {
      user,
      updateUser,
    }
  }
}
</script>

<style lang="scss" scoped>
</style> -->






<!-- 

<template>
 <h1>学习vue3语法</h1>
 <h2>姓名：{{name}}</h2>
 <h2>年龄：{{age}}</h2>
 <h3>性别：{{sex}}</h3>
 <h3>习惯：{{hobbo}}</h3>
 <h3>职业：{{iob.type}}</h3>
 <h3>月薪：{{iob.salary}}</h3>
 <h3>崇拜的人物：{{a.b.c.d.eeee}}</h3>
 <h4>我是一个东西：{{a1.b1.c1.ccc}}</h4>
 <button @click="persionInfo">我是vue3中获取</button>

 <button  @click="getvu2info">我是vue3获取v2的方法</button> 
 <br/>
 <button  @click="changeIngo">我来修改性别</button>
  
</template>
<script lang="ts">
import {h} from 'vue'
import {ref,reactive} from 'vue'
export default {
   data() {
     return {
       sex:"男",
       name:"小明",
       age:10
     }
   },
  created() {
    console.log("lalala");
 
  },
  methods: {
    getSetupInfo(){
       console.log(this.sex);
       console.log(this.name);
       console.log(this.age);
    }
  },
  setup() {
    console.log("我是www");
    
    let name=ref("小的");
    let age=ref(18);
    let sex=ref("男")
    let hobbo=ref(["吸烟","喝酒","带货"])

   let a1=ref({
     b1:{
       c1:{
         "ccc":"亚瑟"
       }
     }
   })

  //职业年薪
  let iob:{
    type:string,
    salary:string
  }=reactive({
    type:"全栈工程师",
    salary:"30"
  })

  let a=reactive({
    b:{
      c:{
        d:{
          "eeee":"雷锋"
        }
      }
    }
  })
    const persionInfo=()=>{
      alert(`我是${name},我${age}岁`)
    };
    const getvu2info=()=>{
      console.log(this,"aaaaa");
      console.log(sex);
      console.log(getSetupInfo);
      console.log(name);
      console.log(age);
      
    }
    //修改数据
    const changeIngo=()=>{
      console.log("我是修改性别的函数");
      console.log(sex,"sexsexsex");
      console.log(name,"name");
      console.log(age,"age");
      sex.value="女"
     console.log(sex);
      console.log(hobbo);
      hobbo.value[0]="学习";
     iob.value.type="ui-工程师";
      console.log(iob,"aaaaa");
      iob.salary="120",
       iob.type="全栈架构师",
      a.b.c.d.eeee="李白"
      
    }
    return {
      name,age,persionInfo,getvu2info,sex,changeIngo,hobbo,a,iob,a1
    };
     return ()=>h("h1","我是一个内容")
}
}
</script> -->



<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
<!-- <template>
  <div class="q">


    <h1>学习v3简单语法</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>{{ age2 }}</h2>
    <button @click="persionInfo">我是v3中获取信息</button>
    <button @click="persionInfo">个人信息</button>
  </div>
</template>

<script lang="ts" >
export default {

  setup() {
    let name = "贾博林";
    let age = 20;
    let age2 = 30;
    const persionInfo = () => {
      alert(`我是${name},我${age},${age2}岁`);
    };
    // 返回值
    return {
      name,
      age,
      age2,
      persionInfo,
    };
  },
};
</script>

<style lang="scss">
.q {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: green;
}

button {
  cursor: pointer;
}
</style> -->






<!-- <template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count.value }}</h3>
  <button @click="updataCount">更新数据</button>
</template>

<script lang="ts" >
import { ref } from '@vue/reactivity';
export default {
  // vue2的写法
  // data() {
  //   return {
  //     count: 0,//属性
  //   }
  // },
  // methods: {
  //   updataCount() {//方法
  //     this.count++
  //   }
  // },

  // vue3的实现方法
  setup(){
    // console.log("第一次");
    
    // let count=0 //变量
    const count =ref(0)
    console.log(count);
    
    function updataCount(){
      console.log('=====');
      count.value++
      // count++
      
    }
    return{
      // 属性
      count,
      updataCount
    }
  }

}
</script>

<style lang="scss" scoped>
</style> -->





<!-- <template>
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>性别：{{ user.gender }}</h3>
  <h3>媳妇：{{ user.wife }}</h3>
  <hr>
  <button @click="updateUser">更新数据 </button>
</template>

<script lang="ts" >
export default {
  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息
  setup() {
    const obj:any = {
      nama: "小明",
      age: 20,
      wife: {
        name: "小甜甜",
        age: 18,
        cars: ["奔驰", "宝马", "奥迪"]
      },
    }
    const user = reactive(obj);
    console.log(user);
    // 方法
    const updateUser = () => {
      user.name += '==',
        user.age += 2,
        user.wife.name = "++",
        user.wife.cars[0] = "玛莎拉蒂"
    }
    return {
      user,
      updateUser,
    }
  }
}
</script>

<style lang="scss" scoped>
</style> -->






<!-- 

<template>
 <h1>学习vue3语法</h1>
 <h2>姓名：{{name}}</h2>
 <h2>年龄：{{age}}</h2>
 <h3>性别：{{sex}}</h3>
 <h3>习惯：{{hobbo}}</h3>
 <h3>职业：{{iob.type}}</h3>
 <h3>月薪：{{iob.salary}}</h3>
 <h3>崇拜的人物：{{a.b.c.d.eeee}}</h3>
 <h4>我是一个东西：{{a1.b1.c1.ccc}}</h4>
 <button @click="persionInfo">我是vue3中获取</button>

 <button  @click="getvu2info">我是vue3获取v2的方法</button> 
 <br/>
 <button  @click="changeIngo">我来修改性别</button>
  
</template>
<script lang="ts">
import {h} from 'vue'
import {ref,reactive} from 'vue'
export default {
   data() {
     return {
       sex:"男",
       name:"小明",
       age:10
     }
   },
  created() {
    console.log("lalala");
 
  },
  methods: {
    getSetupInfo(){
       console.log(this.sex);
       console.log(this.name);
       console.log(this.age);
    }
  },
  setup() {
    console.log("我是www");
    
    let name=ref("小的");
    let age=ref(18);
    let sex=ref("男")
    let hobbo=ref(["吸烟","喝酒","带货"])

   let a1=ref({
     b1:{
       c1:{
         "ccc":"亚瑟"
       }
     }
   })

  //职业年薪
  let iob:{
    type:string,
    salary:string
  }=reactive({
    type:"全栈工程师",
    salary:"30"
  })

  let a=reactive({
    b:{
      c:{
        d:{
          "eeee":"雷锋"
        }
      }
    }
  })
    const persionInfo=()=>{
      alert(`我是${name},我${age}岁`)
    };
    const getvu2info=()=>{
      console.log(this,"aaaaa");
      console.log(sex);
      console.log(getSetupInfo);
      console.log(name);
      console.log(age);
      
    }
    //修改数据
    const changeIngo=()=>{
      console.log("我是修改性别的函数");
      console.log(sex,"sexsexsex");
      console.log(name,"name");
      console.log(age,"age");
      sex.value="女"
     console.log(sex);
      console.log(hobbo);
      hobbo.value[0]="学习";
     iob.value.type="ui-工程师";
      console.log(iob,"aaaaa");
      iob.salary="120",
       iob.type="全栈架构师",
      a.b.c.d.eeee="李白"
      
    }
    return {
      name,age,persionInfo,getvu2info,sex,changeIngo,hobbo,a,iob,a1
    };
     return ()=>h("h1","我是一个内容")
}
}
</script> -->



<!-- <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style> -->
