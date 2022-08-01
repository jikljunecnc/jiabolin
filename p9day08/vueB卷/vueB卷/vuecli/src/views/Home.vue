<template>
  <div class="app">
    <p class="p1" :class="aa">
      用户登录<span class="s1" @click="qh()">切换主题</span>
    </p>
    手机号：<input type="text" v-model="sj" @keyup="sjyz" /><br />
    <p class="p2" v-show="flag">请输入正确的手机号</p>
    密码：<input type="text" v-model="mm" @keyup="mmyz" />
    <p class="p2" v-show="flag1">请输入正确的密码</p><br>
    <button :disabled="flag2" @click="dl">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reg: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
      reg1: /^[a-z|A-Z][0-9]{5}/,
      mm: "",
      sj: "",
      flag: false,
      flag1: false,
      aa:"p1",
      bb:2,
      flag2:true
    };
  },
  methods: {
    qh() {
      // console.log(111);
      if(this.bb==1){
        this.aa = 'p1'
        this.cc = 'btn'
        this.bb = 2
      }else if(this.bb==2){
        this.aa = 'p12'
        this.cc = 'p12'
        this.bb = 3
      }else{
         this.aa = 'p13'
         this.cc = 'p13'
         this.bb=1
      }
    },
    sjyz() {
      console.log(this.reg.test(this.sj));
      if (this.reg.test(this.sj)) {
        this.flag = false;
      } else {
        this.flag = true;
      }
      if(this.sj.length>=11&&this.flag==false&&this.mm.length>=6&&this.flag1==false){
        this.flag2=false
      }else{
        this.flag2=true
      }
    },
    mmyz() {
      if (this.reg1.test(this.mm)) {
        this.flag1 = false;
      } else {
        this.flag1 = true;
      }
      if(this.sj.length>=11&&this.flag==false&&this.mm.length>=6&&this.flag1==false){
        this.flag2=false
      }else{
        this.flag2=true
      }
    },
    dl(){
      if(this.sj.length>=11&&this.flag==false&&this.mm.length>=6&&this.flag1==false){
        // this.flag2=false
        this.$router.push('/about')
      }else{
        this.flag2 = true
      }
    }
  },
};
</script>

<style>
.p1 {
  background-color: orange;
  font-size: 28px;
  font-weight: 700;
  line-height: 80px;
  color: white;
  margin: 0px;
  text-align: center;
  position: relative;
  margin-bottom: 50px;
}
.p12 {
  background-color: blue;
}
.p13 {
  background-color: red;
}
.s1 {
  font-size: 14px;
  position: absolute;
  right: 5px;
  z-index: 999;
}
.p2 {
  margin: 0px;
  color: red;
}
.app{
  text-align: center;
}
</style>