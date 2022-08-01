import axios from "../axios/axios.js"

export default {
	getData(){
		return axios({
			url: `/supplier`,
			method: 'get'
		})
	},
	search() {
	    return axios({
	        url: `/supplier/search`,
	        method: 'post'
	    })
	},
	add(ruleForm){
		return axios({
			url: `/supplier/add`,
			method: 'put',
			data:ruleForm
		})
	},
	updata(id) {
        return axios({
            url: `/supplier/updata/:${id}`,
            method: 'put',
            data: id
        })
    },
	delete(id) {
        return axios({
            url: `/supplier/delete/:${id}`,
            method: 'delete',
			data: id
        })
    }
}