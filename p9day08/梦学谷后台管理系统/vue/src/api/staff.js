import axios from '../axios/axios'

export default {
    search(searchInfo) {
        return axios({
            url: `/staff/list/search`,
            method: 'get',
            data: searchInfo
        })
    },

    add(assembly) {
        return axios({
            url: '/staff',
            method: 'get',
            data: assembly
        })
    },

    getById(id) {
        return axios({
            url: `/staff/:id`,
            method: 'get'
        })
    },
    // 更新操作
    update(assembly) {
        return axios({
            url: `/staff/:id`,
            method: 'get',
            data: assembly
        })
    },

    deleteById(id) {
        return axios({
            url: `/staff/:id`,
            method: 'get'
        })
    }
}