const express = require('express')

// 引入其他接口路由
const goodsRouter = require('./goods')
const regRouter = require('./reg')

// 创建一个中间件
const Router = express.Router()

// 利用中间件格式化前端传入的参数
Router.use(express.json(), express.urlencoded({ extended: false }))

// 中间件
// 不管什么请求类型，只要请求路径是/goods就会进入
Router.use('/goods', goodsRouter)
// 不管什么请求类型，只要请求路径是/reg就会进入
Router.use('/reg', regRouter)

// 导出Router（暴露）
module.exports = Router
