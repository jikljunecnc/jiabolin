import axios from '@/axios/axios'
export default {
    // 获取会员列表数据
    getList(){
        return axios({
            url:'/user/userList',
            method:'get'
        })
    },
    // 分页搜索方法
    search(page,size,data){
        return axios({
            url:`/user/list/search/${page}/${size}`,
            method:'post',
            data:data
        })
    },
    // 删除方法
    delete(id){
        return axios({
            url:`/supplier/delete/${id}`,
            method:'delete'
        })
    },
    // 添加会员
    addMember(obj){
        return axios({
            url:`/addUser/${obj}`,
            method:'post'
        })
    },
    editMember(obj){
        return axios({
            url:`/editUser/${obj}`,
            method:'put'
        })
    }
}

