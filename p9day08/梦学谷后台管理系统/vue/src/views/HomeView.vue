<template>
  <div>
    <el-container>
      <el-header>
		<img src="../assets/logo1.png" alt="">
        <span>梦学谷会员管理系统</span>
        <el-dropdown @command="handleCommand">
         <span class="el-dropdown-link">
          用户名: <i class="el-icon-arrow-down el-icon--right"></i>
         </span>
         <el-dropdown-menu slot="dropdown">
			      <el-dropdown-item>修改密码</el-dropdown-item>
			      <el-dropdown-item command="quit">退出系统</el-dropdown-item>
			    </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
				      :default-active="$router.path"
					  router
				      class="el-menu-vertical-demo"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b">
				      <el-menu-item index="/welcome">
				        <i class="el-icon-s-home"></i>
				        <span slot="title">首页</span>
				      </el-menu-item>
				      <el-menu-item index="/member">
				        <i class="el-icon-user-solid"></i>
				        <span slot="title">会员管理</span>
				      </el-menu-item>
				      <el-menu-item index="/supplier">
				        <i class="el-icon-sell"></i>
				        <span slot="title">供应商管理</span>
				      </el-menu-item>
				      <el-menu-item index="/goods">
				        <i class="el-icon-sold-out"></i>
				        <span slot="title">商品管理</span>
				      </el-menu-item>
					  <el-menu-item index="/staff">
					    <i class="el-icon-s-custom"></i>
					    <span slot="title">员工管理</span>
					  </el-menu-item>
				 </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  methods:{
    handleCommand(command) {
			    switch (command) {
			        case 'quit':
			            this.$router.push("/")
			            break;
			    }
			}
  }
}
</script>
<style lang="scss">
.el-container {
	    height: 100vh;
	}
	
	.el-header {
	    background-color: #373d41;
	    display: flex;
	    justify-content: space-between;
	    padding-left: 0;
	    align-items: center;
	    color: #fff;
	    font-size: 20px;
	    > div {
	        display: flex;
	        align-items: center;
	        img {
	            transform: scale(0.20);
	        }
	        span {
	            margin-left: 1000px;
	        }
	    }
	}
	
	.el-aside {
	    background-color: #333744;
	    .el-menu {
	        border-right: none;
	    }
	}
	
	.el-main {
	    background-color: #fff;
	}
	.el-dropdown>span{
		color: white;
	}
	img{
		width: 3%;
		height: 50%;
		float: left;

	}
</style>