// 如果不是原生模块，会自动到node_modules中去查找

const express = require('express')

// 创建一个服务器
const app = express()

// 静态资源服务器
// 把当前目录作为静态资源服务器
app.use(express.static('./'))

// 监听端口
app.listen(1909, () => {
    console.log('server is run on http://localhost:1909')
})
