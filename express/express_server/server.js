// 引入第三方模块
const express = require('express')

// 配置文件
const { PORT } = require('./config.json')

// 引入router文件
const router = require('./router')  // 因为文件夹是index文件所以不用添加上去

// 创建一个服务器
const app = express()

// 静态资源服务器
app.use(express.static('./'))

// 放入经过处理的中间件
app.use(router)

// 监听端口
app.listen(PORT, () => {
    console.log(`server is runing on http://localhost:${PORT}`)
})
