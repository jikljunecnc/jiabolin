<template>
	<div>
		<bread></bread>
		<el-row>
			<el-input v-model="searchData.name" placeholder="供应商名称"></el-input>
			<el-input v-model="searchData.person" placeholder="联系人"></el-input>
			<el-input v-model="searchData.phone" placeholder="联系电话"></el-input>
			<el-button type="primary"  @click="search">查询</el-button>
			<el-button type="primary" @click="dialogVisible = true">新增</el-button>
			<el-button @click="reset">重置</el-button>
		</el-row>
		<template>
		  <el-table
		    :data="supplierData"
		    border
		    style="width: 100%">
		    <el-table-column
		      type="index"
		      label="序号"
		      width="80">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="供应商名称"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="linkman"
		      label="联系人">
		    </el-table-column>
			<el-table-column
			  prop="mobile"
			  label="联系电话">
			</el-table-column>
			<el-table-column
			  prop="remark"
			  label="备注">
			</el-table-column>
			<el-table-column
			  label="操作">
			  <template slot-scope="scope">
				<el-button size="mini" @click="updata(scope.row.id)">编辑</el-button>
				<el-button type="danger" size="mini" @click="del(scope.row.id)">删除</el-button>
			  </template>
			</el-table-column>
		  </el-table>
		</template>
		<el-card>
			<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="pagenum"
			      :page-sizes="[10, 20, 50]"
			      :page-size="pagesize"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="total">
			    </el-pagination>
		</el-card>
		
		<el-dialog
		  title="供应商编辑"
		  :visible.sync="dialogVisible"
		  width="30%">
		  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		    <el-form-item label="供应商名称" prop="name">
		      <el-input v-model="ruleForm.name"></el-input>
		    </el-form-item>
		    <el-form-item label="联系人" prop="linkman">
		      <el-input v-model="ruleForm.linkman"></el-input>
		    </el-form-item>
		    <el-form-item label="联系电话" prop="mobile">
		      <el-input v-model="ruleForm.mobile"></el-input>
		    </el-form-item>
			<el-form-item label="备注" prop="remark">
			  <el-input v-model="ruleForm.remark"></el-input>
			</el-form-item>
		  </el-form>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="edit">取 消</el-button>
		    <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	import supplierApi from "@/api/supplier.js"
	import bread from "@/components/bread"
	export default{
		components:{bread},
		data(){
			return{
				total:null,
				pagenum:1,
				pagesize:10,
				searchData:{
					name:"",
					linkman:"",
					mobile:""
				},
				supplierData:[],
				dialogVisible:false,
				ruleForm:{
					name:"",
					linkman:"",
					mobile:"",
					remark:""
				},
				rules:{
					name:[
						{ required: true, message: '请输入供应商名称', trigger: 'blur' }
					],
					linkman:[
						{ required: true, message: '请输入联系人', trigger: 'blur' }
					]
				}
			}
		},
		methods:{
			reset(){
				this.searchData.name = ""
				this.searchData.linkman = ""
				this.searchData.mobile = ""
			},
			getData(){
				supplierApi.getData()
				.then(res=>{
					console.log(res)
					// this.supplierData = res.data.rows
					let data = res.data.rows
					this.supplierData = data.slice((this.pagenum-1)*this.pagesize,this.pagenum*this.pagesize)
					this.total = res.data.total
				})
			},
			search(){
				supplierApi.search()
				.then(res=>{
					console.log(res.data.rows)
					this.supplierData = res.data.rows.filter(item=>{
						if(item.name.includes(this.searchData.name) || item.linkman.includes(this.searchData.linkman) || item.name.mobile(this.searchData.moblie)){
							return item
						}
					})
					
				})
			},
			edit(){
				this.dialogVisible = false
				this.ruleForm.name = ""
				this.ruleForm.linkman = ""
				this.ruleForm.mobile = ""
				this.ruleForm.remark = ""
			},
			submitForm(formName) {
			   this.$refs[formName].validate((valid) => {
			     if (valid) {
			       supplierApi.add(this.ruleForm)
				   .then(res=>{
					   this.getData()
					   this.edit()
				   })
			     } else {
			       return false;
				}
				})   
			},
			updata(id){
				this.dialogVisible = true
				var obj = this.supplierData.filter(item=>{
					return item.id === id
				})
				this.ruleForm.name = obj[0].name
				this.ruleForm.linkman = obj[0].linkman
				this.ruleForm.mobile = obj[0].mobile
				this.ruleForm.remark = obj[0].remark
			},
			del(id){
				this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
					})
					.then(() => {
						supplierApi.delete(id)
						.then(res=>{
							this.getData()
							this.$message.success("删除成功")
					})
				});
			},
			handleSizeChange(val) {
			  this.pagesize = val;
			  this.getData();
			},
			handleCurrentChange(val) {
			  this.pagenum = val;
			  this.getData();
			}
		},
		created(){
			this.getData()
		}
	}
</script>

<style>
	.el-input{
		width: 150px;
		margin: 10px 20px 10px 0px;
	}
</style>