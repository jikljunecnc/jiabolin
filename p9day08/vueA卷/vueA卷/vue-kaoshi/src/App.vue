<template>
  <div>
    <header>
      <input
        type="text"
        placeholder="商品名称"
        v-model="value"
        @keyup.enter="sc()"
      />
    </header>
    <section>
      <table>
        <thead>
          <tr>
            <th @click="px()">
              编号<cha class="cha" :class="aa == 0 ? '' : 'as'"></cha>
            </th>
            <th>名称</th>
            <th @click="px1()">
              价格<cha class="cha1" :class="bb == 0 ? '' : 'as'"></cha>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td class="sasas111" :class="index == 9 ? 'sasas' : ''">
              {{ item.id }}
            </td>
            <td :class="index == 9 ? 'sasas' : ''">{{ item.goods_name }}</td>
            <td :class="index == 9 ? 'sasas' : ''">{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <footer>
      <div class="db">
        <p>
          每页<input
            type="text"
            class="ipt"
            v-model="value1"
            @keyup.enter="ts()"
          />条，共10条
        </p>
        <ul>
          <span v-for="(item, index) in arr" :key="index" @click="ye(item)">{{
            item
          }}</span>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
import data1 from "./assets/data.json";
import cha from "./components/cha.vue";
export default {
  components: {
    data1,
    cha,
  },
  data() {
    return {
      list: data1.data,
      value: "",
      aa: 0,
      bb: 0,
      value1: "",
      query: {
        pagenum: 1,
        pagesize: 1,
      },
      arr: [],
    };
  },
  created() {
    console.log(this.list);
  },
  methods: {
    sc() {
      console.log(this.value);
      var list1 = this.list;
      var list2 = list1.filter((item) => {
        return item.goods_name.includes(this.value);
      });

      console.log(list2);
      this.list = list2;
      if (this.value == "") {
        this.list = data1.data;
      }
    },
    ye(num) {
      this.list = data1.data;
      var a1 = num * this.value1 - this.value1;
      var a2 = num * this.value1;
      var arr = this.list.slice(a1, a2);
      this.list = arr;
    },
    px1() {
      if (this.bb == 0) {
        this.list = this.list.sort(function (a, b) {
          return b.price - a.price;
        });
        this.bb = 1;
      } else {
        this.list = this.list.sort(function (a, b) {
          return a.price - b.price;
        });
        this.bb = 0;
      }
    },
    ts() {
      this.list = data1.data;
      this.arr = [];
      var total = this.list.length;
      var a1 = 1 * this.value1 - this.value1;
      var a2 = 1 * this.value1;
      var qq = this.list.slice(a1, a2);
      console.log(qq);
      var pagenum = Math.ceil(total / this.value1);
      console.log(pagenum);
      for (var i = 1; i <= pagenum; i++) {
        this.arr.push(i);
      }
      this.list = qq;
    },
    px() {
      if (this.aa == 0) {
        this.list = this.list.sort(function (a, b) {
          return b.id - a.id;
        });
        this.aa = 1;
      } else {
        this.list = this.list.sort(function (a, b) {
          return a.id - b.id;
        });
        this.aa = 0;
      }
    },
  },
};
</script>
<style>
table {
  width: 100%;
  border: 1px solid #000;
  margin-top: 10px;
  /* border-bottom: 1px solid #fff; */
}
th {
  width: 33%;
  position: relative;
  line-height: 30px;
  background-color: #ccc;
  border-bottom: 1px solid #000;
}
td {
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  /* border-right: 1px solid #000; */
}
.sasas {
  border-bottom: 1px solid #fff;
}
.sasas111 {
  border-left: 1px solid #fff;
}
.cha {
  position: absolute;
  top: 0;
  left: 60%;
}
.cha1 {
  position: absolute;
  top: 0;
  left: 60%;
}
.as {
  transform: rotateX(180deg);
}
.ipt {
  width: 20px;
}
.db {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
p {
  width: 40%;
}
ul {
  width: 40%;
  text-align: right;
  margin-right: 300px;
}
span {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #000;
}
</style>