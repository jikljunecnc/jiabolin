<template>
  <div>
    <p class="p997">我的书架<span class="s999" @click="fh()"><</span></p>
    <p class="p996">正在看<span class="s998" @click="zk()">></span></p>
    <ul>
      <li v-for="(item, index) in tslist" :key="index" v-show="flag">
        <p class="p995" v-show="item.static==0 ? true:false">
          {{ item.name
          }}<span class="s997" @click="ykw(index)">标记为已看完</span
          ><span class="s996" @click="sc(index)">删除图书</span>
        </p>
      </li>
    </ul>
    <p class="p996">已完结<span class="s998" @click="zk1()">></span></p>
    <ul>
      <li v-for="(item, index) in tslist" :key="index" v-show="flag1">
        <p class="p995" v-show="item.static!=0 ? true:false">
          {{ item.name
          }}<span class="s997" @click="zkyb(index)">再看一遍</span
          ><span class="s996" @click="sc(index)">删除图书</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      aa: 0,
      bb: 0,
      flag: false,
      flag1: false,
    };
  },
  computed: {
    ...mapState(["tslist"]),
  },
  created() {
    console.log(this.tslist);
  },
  methods: {
      ...mapMutations(["ykw1",'sc1','zkyb1']),
    fh() {
      this.$router.go(-1);
    },
    zk() {
      if (this.aa == 0) {
        this.flag = true;
        this.aa = 1;
      } else {
        this.flag = false;
        this.aa = 0;
      }
    },
    zk1() {
      if (this.bb == 0) {
        this.flag1 = true;
        this.bb = 1;
      } else {
        this.flag1 = false;
        this.bb = 0;
      }
    },
    ykw(index){
        this.ykw1(index)
    },
    sc(index){
        this.sc1(index)
    },
    zkyb(index){
        this.zkyb1(index)
    }
  },
};
</script>
<style>
.p997 {
  background-color: red;
  font-size: 28px;
  font-weight: 700;
  line-height: 80px;
  color: white;
  margin: 0px;
  text-align: center;
  position: relative;
  /* margin-bottom: 50px;  */
  position: relative;
}
.s999 {
  font-size: 60px;
  position: absolute;
  left: 10px;
}
.p996 {
  color: white;
  background-color: red;
  font-size: 20px;
  font-weight: 700;
  position: relative;
  text-align: left;
  padding-left: 20px;
}
.s998 {
  position: absolute;
  right: 10px;
  top: 1px;
  /* height: 10px; */
}
.xz {
  transform: rotateX(90deg);
}
.p995 {
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  position: relative;
}
.s997 {
  position: absolute;
  font-size: 12px;
  color: red;
  top: 5px;
  right: 65px;
  display: inline-block;
  border-right: 2px solid #000;
  padding-right: 5px;
}
.s996 {
  position: absolute;
  font-size: 12px;
  color: #ccc;
  top: 5px;
  right: 10px;
  display: inline-block;
}
</style>