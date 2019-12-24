import Axios from 'axios';
// 注册接口
export const Register = obj => Axios.post('http://localhost:3004/register', obj);
// 登录
export const Login = obj => Axios.post('http://localhost:3004/login', obj);