<template>
	<div>
		<el-card>
			<div class="left">
				{{title}}
			</div>
		</el-card>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:""
			}
		},
		created() {
			this.title = this.$route.meta.title
		}
	}
</script>

<style>
	.left{
		border-left: solid 3px #13CE66;
		padding-left: 5px;
	}
</style>