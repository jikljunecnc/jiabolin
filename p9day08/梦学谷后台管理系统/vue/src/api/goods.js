import axios from "../axios/axios.js"
export default{
	//获取会员列表数据
    getData(){
		return axios({
			url: `/goodsList`,
			method: 'get'
		})
	},
    add(ruleFrom){
		return axios({
			url: `/goods/add`,
			method: 'get',
			data:ruleFrom
		})
	},
	search(id){
		return axios({
			url:`/goodSerch/:${id}`,
			method: 'get',
		})
	},
	deleteById(id){
		return axios({
			url:`/goods/delete/:${id}`,
			method: 'get',
		})
	},
	updataById(updataFrom){
		return axios({
			url:`/goods/updata`,
			method: 'get',
			data:updataFrom
		})
	},
	supplieradd() {
        return axios({
            url: '/goods/supper',
            method: 'get',
        })
    },
}