<template>
    <div class="all">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h2 class="title">梦学谷会员管理系统</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            }
        };
    },
    mounted() {  
    },
    methods: {
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    this.$router.push("/HomeView")
                } else {
                    return false
                }
            })
        }
    },
};
</script>

<style scoped>
.all{
		width: 100%;
		height: 100%;
		background-image: url(../assets/login.jpg);
	}
	.demo-ruleForm{
		width: 350px;
		background-color: white;
		padding: 28px;
		border-radius: 20px;
		position: absolute;
		top: 160px;
		left: 465px;
	}
	.title{
		text-align: center;
	}
</style>