let express = require("express")
let path = require("path")
let bodyParse = require("body-parser")
let cors = require("cors") // 跨域
let app = express()
var appp = require('http').createServer();
let io = require('socket.io')(appp);

app.use(bodyParse.json())
app.use(cors()) // 跨域中间件

appp.listen(3005);

let user = {};
let Someusername = '';

let {
    Admin, // 用户表
    Friendslist, // 好友表
    Friendsnews
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
          id: ret._id,
          data: ret.avatar,
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

// 查询
app.post("/query", (req, res) => {
  const { username } = req.body
  Admin.findOne({ adminName: username },(err, ress) => {
    if (err) {
      return console.log(err);
    } else {
      return res.json({
        code: 200,
        data:ress
      });
    }
  })
})

// 添加好友
app.post("/friendslist", (req, res) => {
  const { username, avatar, friends } = req.body
  
  Admin.findById('5e0181e82db2da29a4a4a79c').populate('friends') //关联数据库查询
  .exec((err, data) => {
    console.log(data);
  });
  var user = new Friendslist({
    adminName: username,
    avatar,
    friends
  });
  Friendslist.findOne({adminName: user.adminName}, (err, ret) => {
    if (ret) {
      return res.json({ code: "201", message: user.adminName + "已经是您的好友!" });
    } else {
      user.save(function(err, ress) {
        if (err) {
          return console.log(err);
        }
        res.json({
          code: 200,
          message: "添加成功"
        });
      });
    }
  })
})


// 获取所有好友
app.get("/allfriends", (req, res) => {
  try {
    Friendslist.find({}, (err, ress) => {
      if (err) {
        console.log(err);
      } else {
        if (ress) {
          res.json({
            code: 200,
            data: ress
          });
        } else {
          res.json({
            code: 201,
            msg: "查询失败"
          });
        }
      }
    })
  } catch (error) {
    res.json({
      code: 211,
      msg: error
    });
  }
})

io.on('connection', function (socket) {
  socket.on('inter',function(data){
    // console.log(Someusername)
    console.log(data.username)
    if(data.username) {
      socket.on('send', (sockets) => {
        console.log(sockets)
        socket.emit('sendMessage', sockets)
        console.log('接受到信息======:',sockets)
      })
    } else {
      Someusername = data.username;
      user[Someusername] = socket;
    }
  })
})

//监听是否启动
app.listen(3004, () => {
    console.log("3004启动成功!")
})
console.log('3005启动成功!');