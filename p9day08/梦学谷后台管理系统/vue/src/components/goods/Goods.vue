<template>
  <div>
    <bread></bread>
    <el-card>
      <el-row :gutter="20">
        <el-form ref="searchForm" :inline="true" :model="searchMap" style="margin-top: 20px">
          <el-form-item prop="input1">
            <el-input placeholder="请输入内容" v-model="searchMap.input1"></el-input>
          </el-form-item>
          <el-form-item prop="input2">
            <el-input placeholder="请输入内容" v-model="searchMap.input2"></el-input>
          </el-form-item>
          <el-form-item prop="input3">
            <el-input
              @click.native="dialogSupplierVisible = true"
              placeholder="请输入内容"
              v-model="searchMap.input3"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="fetchData">查询</el-button>
            <el-button type="primary" @click="dialogVisible = true">新增</el-button>
            <el-button type="info" @click="$refs['searchForm'].resetFields()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <!-- 页面数据 -->
      <template>
        <el-table :data="getForm" border script>
          <el-table-column prop="id" label="id"></el-table-column>
          <el-table-column prop="sname" label="供应商"></el-table-column>
          <el-table-column prop="purchasePrice" label="零售价"></el-table-column>
          <el-table-column prop="retailPrice" label="进货价"></el-table-column>
          <el-table-column prop="spec" label="规格"></el-table-column>
          <el-table-column prop="storageNum" label="库存数量"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="update(scope.row.id)">修改</el-button>
              <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 增加框 -->
      <el-dialog title="增加商品" :visible.sync="dialogVisible" width="30%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="商品名称" prop="sname">
            <el-input v-model="ruleForm.sname"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品规格" prop="spec">
            <el-input v-model="ruleForm.spec"></el-input>
          </el-form-item>
          <el-input
            @click.native="dialogSupplierVisible = true"
            placeholder="请输入内容"
            v-model="input3"
          ></el-input>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addFrom('ruleForm')">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 修改框 -->
      <el-dialog title="编辑商品" :visible.sync="dialogVisibles" width="30%">
        <el-form :model="updateForm" :rules="updaterules" ref="updateFormRef" label-width="100px">
          <el-form-item label="商品名称" prop="sname">
            <el-input v-model="updateForm.sname"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="updateForm.name"></el-input>
          </el-form-item>
          <el-form-item label="商品规格" prop="spec">
            <el-input v-model="updateForm.spec"></el-input>
          </el-form-item>
          <el-form-item label="零售价" prop="purchasePrice">
            <el-input v-model="updateForm.purchasePrice"></el-input>
          </el-form-item>
          <el-form-item label="进货价" prop="retailPrice">
            <el-input v-model="updateForm.retailPrice"></el-input>
          </el-form-item>
          <el-form-item label="货存数量" prop="storageNum">
            <el-input v-model="updateForm.storageNum"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibles = false">取 消</el-button>
          <el-button type="primary" @click="updata">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[20, 40, 60, 80]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="todal"
      ></el-pagination>

      <el-dialog title="查找订货商" :visible.sync="dialogSupplierVisible" width="50%">
        <el-input v-model="input1"></el-input>
        <el-button type="primary" @click="fetchData">查询</el-button>
        <template>
          <el-table :data="getForm" border script>
            <el-table-column prop="id" label="序号"></el-table-column>
            <el-table-column prop="remark" label="地址"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
          </el-table>
        </template>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[20, 40, 60, 80]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="todal"
        ></el-pagination>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogSupplierVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogSupplierVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import Goods from "../../api/goods";
import bread from "@/components/bread";
export default {
  components: { bread },
  data() {
    return {
      getForm: [],
      supperData: [],
      dialogVisible: false,
      dialogSupplierVisible: false,
      ruleForm: {
        sname: "",
        name: "",
        spec: ""
      },
      rules: {
        sname: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        spec: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      },
      updaterules: {
        sname: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        spec: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        purchasePrice: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        retailPrice: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        storageNum: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ]
      },
      searchMap: {
        input1: "",
        input2: "",
        input3: ""
      },
      input1: "",
      input2: "",
      input3: "",
      updateForm: {
        sname: "",
        name: "",
        spec: "",
        purchasePrice: "",
        retailPrice: "",
        storageNum: ""
      },
      dialogVisibles: false,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      todal: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //   获取全部数据
    getList() {
      Goods.getData().then(res => {
        this.getForm = res.data.row;
        console.log(this.getForm);
        this.todal = this.getForm.length;
      });
    },
    // 增加
    addFrom(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (!valid) {
          return false;
        } else {
          Goods.add(this.ruleForm).then(res => {
            console.log(res);
            if (res.flag) {
              this.getList();
              this.dialogVisible = false;
              this.$refs[ruleForm].resetFields();
              this.$message({
                message: res.message,
                type: "success"
              });
            } else {
              this.$message({
                message: res.message,
                type: "warning"
              });
            }
          });
        }
      });
    },
    // 查找
    fetchData() {
      Goods.search().then(res => {
        console.log(res);
        if (res.flag) {
          this.getList();
          (this.input1 = ""),
            (this.input2 = ""),
            (this.input3 = ""),
            this.$message({
              message: res.message,
              type: "success"
            });
        } else {
          return this.$message({
            message: res.message,
            type: "失败"
          });
        }
      });
    },
    // 删除
    del(id) {
      console.log(id);
      this.$confirm("确认删除这条记录吗?", "提示", {
        confirmButtonText: "确认",
        cancleButtonText: "取消"
      })
        .then(() => {
          Goods.deleteById(id).then(res => {
            this.getList();
            this.$message({
              message: res.message,
              type: "success"
            });
          });
        })
        .catch(() => {
          //取消删除
        });
    },
    // 表单回填
    update(id) {
      this.dialogVisibles = true;
      let obj = this.getForm.filter(item => {
        return item.id == id;
      });
      // console.log(obj[0]);
      this.updateForm = obj[0];
    },
    // 修改成功
    updata() {
      this.$refs.updateFormRef.validate(valid => {
        //   console.log(updateFormRef);
        if (valid) {
          Goods.updataById(this.updateForm).then(res => {
            //   console.log(res);
            if (res.flag) {
              this.getList();
              this.dialogVisibles = false;
              this.$message({
                message: res.message,
                type: "success"
              });
            } else {
              this.$message({
                message: res.message,
                type: "warning"
              });
            }
          });
        }
      });
    },
    handleSizeChange(val) {
      this.getList();
    },
    handleCurrentChange(val) {
      this.getList();
    }
  }
};
</script>
<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-pagination {
  white-space: nowrap;
}
</style>