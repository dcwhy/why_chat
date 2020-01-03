import Axios from 'axios';
// 注册接口
export const Register = obj => Axios.post('http://localhost:3004/register', obj);
// 登录
export const Login = obj => Axios.post('http://localhost:3004/login', obj);
// 搜索用户
export const Query = obj => Axios.post('http://localhost:3004/query', obj);
// 添加好友
export const Friendslist = obj => Axios.post('http://localhost:3004/friendslist', obj);
// 获取所有好友
export const Allfriends = () => Axios.get('http://localhost:3004/allfriends');