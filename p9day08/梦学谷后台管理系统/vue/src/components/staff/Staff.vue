<template>
  <div>
    <!-- 头部面包屑 -->
    <bread style="margin-bottom: 35px"></bread>
    <!-- 表单区域 -->
    <el-form ref="searchForm" :inline="true" :model="searchInfo">
      <el-form-item prop="userName">
        <el-input
          v-model="searchInfo.userName"
          placeholder="帐号"
          style="width: 200px"
        ></el-input>
      </el-form-item>
      <el-form-item prop="name">
        <el-input
          v-model="searchInfo.name"
          placeholder="姓名"
          style="width: 200px"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dataList">查询</el-button>
        <el-button type="primary" @click="getAdd">新增</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格区域 -->
    <el-table :data="list" height="380" border style="width: 100%">
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column prop="userName" label="帐号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="90"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="mobile" label="电话"></el-table-column>
      <el-table-column prop="salary" label="薪酬"></el-table-column>
      <el-table-column prop="entryDate" label="入职时间"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="dataEdit(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="dataDelete(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="pageSize"
      @current-change="pageNum"
      :current-page="this.pageNum"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="this.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <!--添加 /  编辑-->
    <el-dialog
      :title="titleName + '员工'"
      :visible.sync="dialogFormVisible"
      width="50%"
      @close="getDel"
    >
      <el-form
        :rules="rules"
        ref="assemblyForm"
        label-width="100px"
        label-position="right"
        style="width: 400px"
        :model="assembly"
      >
        <el-form-item label="帐号" prop="userName">
          <el-input v-model="assembly.userName"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="assembly.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="assembly.age"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="assembly.mobile"></el-input>
        </el-form-item>
        <el-form-item label="薪酬" prop="salary">
          <el-input v-model="assembly.salary"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" prop="entryDate">
          <el-date-picker
            style="width: 200px"
            v-model="assembly.entryDate"
            placeholder="选择入职时间"
            type="date"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dataAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import bread from "@/components/bread";
import staffApi from "@/api/staff.js";
export default {
  components: { bread },
  data() {
    return {
      // 列表数据
      list: [],
      searchInfo: {
        userName: "",
        name: "",
      },
      pageSize: 10,
      pageNum: 1,
      total: 0,
      assembly: {
        id: null,
        userName: "",
        name: "",
        age: null,
        mobile: "",
        salary: "",
        entryDate: null,
      },
      rules: {
        userName: [{ required: true, message: "帐号不能为空", trigger: "blur" }],
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
      },
      // 条件查询的绑定字段值
      dialogFormVisible: false,
      //对话框状态,新增的时候为1，编辑的时候为2
      titleText: 0,
    };
  },
  created() {
    this.dataList();
  },
  methods: {
    //获取员工数据
    dataList() {
      staffApi.search(this.pageNum, this.pageSize, this.searchInfo).then((res) => {
        console.log(res);
        this.list = res.data.rows;
        this.total = res.data.total;
      });
    },
    // 点击新增按钮弹出弹出框
    getAdd() {
      console.log(11);
      this.titleText = 1;
      this.dialogFormVisible = true;
    },
    // 关闭弹出框清空弹出款的内容
    getDel() {
      this.$refs.assemblyForm.resetFields();
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    dataAdd() {
      this.dialogFormVisible = false;
      if (this.titleText === 2) {
        this.$refs.assemblyForm.validate((valid) => {
          if (!valid) return;
          staffApi.queryStaff(this.assembly).then((res) => {
            if (res.data.code !== 2000) {
              this.$message.error("编辑失败");
            }
            this.$message.success("编辑成功");
            this.dataList();
          });
        });
      } else if (this.titleName === 1) {
        this.$refs.assemblyForm.validate((valid) => {
          if (!valid) return;
          staffApi.queryStaff(this.assembly).then((res) => {
            if (res.data.code !== 2000) {
              this.$message.error("新增失败");
            }
            this.$message.success("新增成功");
            this.titleName = 0;
            this.dataList();
          });
        });
      }
    },
    //打开编辑窗口
    dataEdit(id) {
      console.log(id);
      this.titleText = 2;
      this.dialogFormVisible = true;
      staffApi.getById(id).then((res) => {
		  console.log(res)
        if (res.code !== 2000) {
          this.$message.error("查询员工数据失败！");
        }
        //将编辑前的数据填充到编辑员工数据的表单
        this.assembly = res.data.rows[id];
      });
    },
    // 删除操作
    dataDelete(id) {
      console.log("删除", id);
      this.$confirm("确认删除这条记录吗?", "提示", {
        confirmButtonText: "确认",
        cancleButtonText: "取消",
      })
        .then(() => {
          staffApi.deleteById(id).then((response) => {
            const resp = response.data;
            //提示更新失败
            this.$message({
              type: "success",
              message: "删除成功",
            });
            if (resp.flag) {
              // 删除成功,刷新数据
              this.dataList();
            }
          });
        })
        .catch(() => {
          // 取消删除
        });
    },
  },
  // 当每页显示条数改变后，进行调用该方法,size是当前改变后条数
  handleSizeChange(size) {
    this.pageSize = size;
    console.log(size);
    this.dataList();
  },
  // 切换页码
  handleCurrentChange(page) {
    this.pageNum = page;
    console.log(page);
    this.dataList();
  },
  computed: {
    // 添加与编辑弹出框切换
    titleName() {
      if (this.titleText === 1) {
        return "新增";
      } else if (this.titleText === 2) {
        return "编辑";
      }
    },
  },
};
</script>

<style></style>