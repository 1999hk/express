const express = require('express')

const Router = express.Router()

// 数据接口（路由）
// 增加商品
Router.post('/', (req, res, next) => {
    // 获取前端传入的参数（商品信息），并写入数据库
    res.send('商品增加成功')
})

// 删除商品（动态路由）
Router.delete('/:id', (req, res, next) => {
    // 获取动态路由参数：req.params
    // 获取商品id，并操作数据库删除
    res.send('商品删除成功' + JSON.stringify(req.params))

})

// 修改商品
Router.patch('/:id', (req, res, next) => {
    // post, patch, put等请求（参数放在请求体中）
    // 接收前端传入的参数
    res.send(req.body)
})

// 查询商品
Router.get('/:id', (req, res, next) => {
    // 根据id查找数据库获取商品信息
    // get请求获取参数（参数放在url中）：req.query
    res.send(req.query)

})

// 同上来的一致
// Router.route('/:id')
//     .post((req, res, next) => {
//         res.send(req.body)
//     })
//     .delete((req, res, next) => {
//         res.send(req.params)
//     })
//     .get((req, res, next) => {
//         res.send(req.query)
//     })

module.exports = Router
