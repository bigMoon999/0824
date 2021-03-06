import axios from 'axios'
import qs from 'qs'


const baseUrl = '/api'

// 相应拦截
axios.interceptors.response.use(res => {
    console.log('=============请求的路径:' + res.config.url + '=============');
    console.log(res);
    return res
})


// 菜单模块的请求
// 菜单添加
export const reqMenuAdd = (data) => {
    return axios({
        url: baseUrl + '/api/menuadd',
        method: 'post',
        data: data
    })
}
// 菜单列表
export const reqMenuList = (data) => {
    return axios({
        url: baseUrl + '/api/menulist',
        method: 'get',
        params: data
    })
}
// 获取一条数据
// 菜单列表
export const reqMenuListOne = (data) => {
    return axios({
        url: baseUrl + '/api/menuinfo',
        method: 'get',
        params: data
    })
}
// 菜单修改
export const reqMenuEdit = (data) => {
    return axios({
        url: baseUrl + '/api/menuedit',
        method: 'post',
        data: data
    })
}
// 菜单删除
export const reqMenuDel = (data) => {
    return axios({
        url: baseUrl + '/api/menudelete',
        method: 'post',
        data: data
    })
}
////////////////////////////////////////////
// 角色管理模块
// 角色添加
export const reqRoleAdd = (data) => {
    return axios({
        url: baseUrl + '/api/roleadd',
        method: 'post',
        data: data
    })
}
// 角色列表
export const reqRoleList = () => {
    return axios({
        url: baseUrl + '/api/rolelist',
        method: 'get'
    })
}
// 角色获取（一条）
export const reqRoleinfo = (id) => {
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:id
    })
}
// 角色编辑
export const reqRoleEdit = (id) => {
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:id
    })
}
// 角色删除
export const reqRoleDel = (id) => {
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:id
    })
}
/////////////////////////////////////////////////////////
// 管理员模块
// 管理员添加
export const reqUserAdd = (data) => {
    return axios({
        url: baseUrl + '/api/useradd',
        method: 'post',
        data: data
    })
}
// 管理员列表
export const reqUserList = (params) => {
    return axios({
        url: baseUrl + '/api/userlist',
        method: 'get',
        params:params
    })
}
// 管理员获取（一条）
export const reqUserinfo = (id) => {
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:id
    })
}
// 管理员编辑
export const reqUserEdit = (id) => {
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:id
    })
}
// 管理员删除
export const reqUserDel = (id) => {
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:id
    })
}
// 管理员总数
export const reqUserCount=()=>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',
       
    })
}