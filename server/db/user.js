
//操作数据库的逻辑
let mongoose = require('mongoose')
let { db_url } = require('./config')
mongoose.connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
// connect里面的{ useNewUrlParser: true, useUnifiedTopology: true }必须加，否则不会报错但是有警告
// 用户表
let movieSchema = new mongoose.Schema(
  {
    adminName: String,
    password: String,
    yepassword: String,
    avatar: String,
    friends: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'friendslist'
    }
  },
  { collection: 'admin' }
)
let Admin = mongoose.model('admin', movieSchema)

// 好友列表的表
let someoneSchema = new mongoose.Schema(
  {
    adminName: String,
    avatar: String
  },
  { collection: 'friendslist' }
)
let Friendslist = mongoose.model('friendslist', someoneSchema)

// 好友消息表
let newsSchema = new mongoose.Schema(
  {
    news: String
  },
  { collection: 'friendsnews' }
)
let Friendsnews = mongoose.model('friendsnews', newsSchema)




// 将表暴露出去
module.exports = {
  Admin,
  Friendslist,
  Friendsnews
}
