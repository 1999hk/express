/**
 * 编写RESTful标准的数据接口
 */

// 引入第三方模块
const express = require('express')

const { PORT } = require('./config.json')   // 返回json内容

// 创建一个服务器
const app = express()

// 把当前目录作为静态资源服务器
app.use(express.static('./'))

// 数据接口（路由）
// 增加商品
app.post('/goods', (req, res, next) => {
    // 获取前端传入的参数（商品信息），并写入数据库

    res.send('商品增加成功')
})

// 删除商品（动态路由）
app.delete('/goods/:id', (req, res, next) => {
    // 获取动态路由参数：req.params
    // 获取商品id，并操作数据库删除
    res.send('商品删除成功' + JSON.stringify(req.params))

})

// 修改商品
app.patch('/goods/:id', (req, res, next) => {
    // post, patch, put等请求（参数放在请求体中）
    // 接收前端传入的参数
    console.log(req.body)

    res.send(req.body)

})

// 查询商品
app.get('/goods/:id', (req, res, next) => {
    // 根据id查找数据库获取商品信息
    // get请求获取参数（参数放在url中）：req.query
    res.send(req.query)

})

// 监听端口
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
