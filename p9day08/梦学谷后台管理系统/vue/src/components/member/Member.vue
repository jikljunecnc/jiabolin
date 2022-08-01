<template>
  <div>
    <bread></bread>
    <!-- 搜索区域 -->
    <el-form :model="searchMap" ref="searchRef" style="margin-top: 20px">
      <el-row :gutter="10">
        <!-- 会员卡号 -->
        <el-col :span="4">
          <el-form-item prop="cardNum">
            <el-input
              v-model="searchMap.cardNum"
              placeholder="会员卡号"
            ></el-input>
          </el-form-item>
        </el-col>
        <!-- 会员名字 -->
        <el-col :span="4">
          <el-form-item prop="name">
            <el-input
              v-model="searchMap.name"
              placeholder="会员名字"
            ></el-input>
          </el-form-item>
        </el-col>
        <!-- 支付类型 -->
        <el-col :span="3">
          <el-form-item prop="payType">
            <el-select
              v-model="searchMap.payType"
              placeholder="支付类型"
              style="width: 140px"
            >
              <el-option
                v-for="item in options"
                :key="item.type"
                :label="item.name"
                :value="item.type"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 出生日期 -->
        <el-col :span="4">
          <el-form-item prop="birthday">
            <el-date-picker
              v-model="searchMap.birthday"
              type="date"
              placeholder="出生日期"
              style="width: 100%"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="9">
          <el-form-item>
            <el-button type="primary" @click="getUserData">查询</el-button>
            <el-button type="primary" @click="addUser">新增</el-button>
            <el-button @click="searchReset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <!-- table数据渲染 -->
    <el-table :data="list" border>
      <el-table-column type="index" label="#"></el-table-column>
      <el-table-column prop="cardNum" label="会员卡号"></el-table-column>
      <el-table-column prop="name" label="会员姓名"></el-table-column>
      <el-table-column prop="birthday" label="会员生日"></el-table-column>
      <el-table-column prop="phone" label="手机号码"></el-table-column>
      <el-table-column prop="integral" label="可用积分"></el-table-column>
      <el-table-column prop="money" label="开卡金额"></el-table-column>
      <el-table-column prop="payType" label="支付类型">
        <template slot-scope="scope">
          <span v-if="scope.row.payType === 1">现金</span>
          <span v-else-if="scope.row.payType === 2">微信</span>
          <span v-else-if="scope.row.payType === 3">支付宝</span>
          <span v-else>银行卡</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="会员地址"></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="delUser(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页模块 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[10, 50, 100, 150]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 对话框 -->
    <el-dialog
      :title="titleText"
      :visible.sync="dialogVisible"
      width="30%"
      @close="closeVialog"
    >
      <el-form
        :rules="addOrEditRules"
        ref="addOrEditForm"
        label-width="100px"
        label-position="right"
        style="width: 400px"
        :model="addOrEdit"
      >
        <el-form-item label="会员卡号" prop="cardNum">
          <el-input v-model="addOrEdit.cardNum"></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input v-model="addOrEdit.name"></el-input>
        </el-form-item>
        <el-form-item label="会员生日" prop="birthday">
          <el-date-picker
            style="width: 200px"
            value-format="yyyy-MM-dd"
            v-model="addOrEdit.birthday"
            type="date"
            placeholder="会员生日"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="addOrEdit.phone"></el-input>
        </el-form-item>
        <el-form-item label="开卡金额" prop="money">
          <el-input v-model="addOrEdit.money"></el-input>
        </el-form-item>
        <el-form-item label="可用积分" prop="integral">
          <el-input v-model="addOrEdit.integral"></el-input>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType">
          <el-select
            v-model="addOrEdit.payType"
            placeholder="支付类型"
            style="width: 110px"
          >
			<!-- 支付下拉菜单 -->
            <el-option
              v-for="option in options"
              :key="option.type"
              :label="option.name"
              :value="option.type"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会员地址" prop="address">
          <el-input type="textarea" v-model="addOrEdit.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import bread from "@/components/bread";
import memberApi from "../../api/membre";
export default {
  components: { bread },
  data() {
    return {
      list: [],
      total: 0,
      pagenum: 1,
      pagesize: 10,
	   // 条件查询
      searchMap: {
        cardNum: "",
        name: "",
        payType: "",
        birthday: "",
      },
	  // 下拉菜单类型
      options: [
        { type: 1, name: "现金" },
        { type: 2, name: "微信" },
        { type: 3, name: "支付宝" },
        { type: 4, name: "银行卡" },
      ],
      //   对话框开关
      dialogVisible: false,
      // 提交的数据
      addOrEdit: {
        id: null,
        cardNum: "",
        name: "",
        birthday: "",
        phone: "",
        money: 0,
        integral: 0,
        payType: "",
        address: "",
      },
      flag: null,
      // 表单验证
      addOrEditRules: {
        cardNum: [{ required: true, message: "卡号不能为空", trigger: "blur" }],
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        payType: [
          { required: true, message: "支付类型不能为空", trigger: "change" },
        ],
      },
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    // 获取所有数据
    async getUserData() {
      memberApi.getList().then((res) => {
        if (res.code !== 2000) return this.$message.error("获取所有数据失败！");
        this.total = res.data.total;
        this.list = res.data.rows;
        console.log(this.list);
      });
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getUserData();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getUserData();
    },
    // 删除
    async delUser(id) {
      let config = await this.$confirm(
        "此操作将永久删除该文件, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);

      if (config !== "confirm") return this.$message.info("已取消删除！");
      memberApi.delete(id).then((res) => {
        if (res.code !== 2000) return this.$message.error("删除失败");
        this.$message.success("删除成功！");
        this.getUserData();
        // console.log(res);
      });
    },
    // 搜索重置
    searchReset() {
      this.$refs.searchRef.resetFields();
    },
    // 新增用户
    addUser() {
      this.flag = true;
      this.dialogVisible = true;
    },
    // 确定按钮
    addEdit() {
      this.dialogVisible = false;
      this.$refs.addOrEditForm.validate((valid) => {
		if (!valid) return
        if (this.flag) {  // 添加用户
			this.addOrEdit.id = null;
			this.addOrEdit.cardNum = '';
			this.addOrEdit.name = '';
			this.addOrEdit.birthday = '';
			this.addOrEdit.phone = '';
			this.addOrEdit.money = 0;
			this.addOrEdit.integral = 0;
			this.addOrEdit.payType = '';
			this.addOrEdit.address = '';

			memberApi.addMember({params:this.addEdit}).then(res=>{
				if(res.code !==2000) return this.$message.error('添加用户失败')
				this.$message.success(res.message)
			})
        } else { // 编辑用户
			memberApi.editMember({params:this.addEdit}).then(res=>{
				if(res.code !==2000) return this.$message.error('编辑用户失败')
				this.$message.success(res.message)
				console.log(res);
			})
        }
		
		this.getUserData();
      });
    },
    // 编辑按钮
    edit(row) {
      this.flag = false;
      this.addOrEdit = row;
      this.dialogVisible = true;
    },
    // 关闭对话框事件
    closeVialog() {
      this.dialogVisible = false;
      this.$refs.addOrEditForm.resetFields();
    },
  },
  computed: {
    titleText() {
      return this.flag ? "添加会员" : "会员编辑";
    },
  },
};
</script>

<style>
</style>