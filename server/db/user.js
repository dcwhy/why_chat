
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
      entryDate: String
    },
    { collection: 'admin' }
  )
  let Admin = mongoose.model('admin', movieSchema)

// 将表暴露出去
module.exports = {
    Admin
  }