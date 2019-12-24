let express = require("express")
let path = require("path")
let bodyParse = require("body-parser")
let cors = require("cors") // 跨域
let app = express()
app.use(bodyParse.json())
app.use(cors()) // 跨域中间件

let {
    Admin, // 用户表
} = require("./db/user")
// 配置静态资源
app.use(express.static(path.join(__dirname, './public')))

//注册
app.post("/register", (req, res) => {
    let { username,password,yepassword } = req.body
    Admin.findOne({ adminName: username }, (err, ret) => {
      if (err) {
        return console.log("查询失败!")
      }
      if (ret) {
        return res.json({ code: "204", message: "该用户已存在!" });
      }
      var user = new Admin({
        adminName: username,
        password: password,
        yepassword: yepassword,
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
      })
      if(user.adminName === '' || user.password === ''){
        return res.json({ code: "201", message: "用户名或密码不能为空!" })
      }
      let regName = /^\d{5,12}$/
      let regPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
      if(!regName.test(user.adminName)){
        return res.json({ code: "202", message: "账号应为5-12位数字" })
      }
      if(!regPass.test(user.password)){
        return res.json({ code: "203", message: "密码至少包含 数字和英文，长度6-20" })
      }
      if(user.password != user.yepassword){
        return res.json({ code: "205", message: "两次密码不一致" })
      }
      user.save(function (err, ress) {
        if (err) {
          return console.log(err)
        }
        res.json({
          code: "200",
          message1: `${ress.adminName}`,
          message2: `${ress.password}`,
          message3: `${ress.yepassword}`
        })
      })
    })
  })

//登录
app.post("/login", (req, ress) => {
  const { username, password } = req.body
  Admin.findOne({ adminName: username }, (err, ret) => {
    if (err) {
      return console.log("查询失败!")
    }
    if (ret) {
      const { adminName } = ret
      if (ret.password === password)
        return ress.json({
          code: 200,
          msg: "登录成功!"
        });
      ress.json({ code: 201, message: "密码不正确!" })
    } else if( username === '' || password === '' ){
      ress.json({
        code: 202,
        message: "用户名或密码不能为空!"
      })
    } else {
      ress.json({
        code: 203,
        message: "该用户未注册!"
      })
    }
  })
})

//监听是否启动
app.listen(3004, () => {
    console.log("3004启动成功!")
})