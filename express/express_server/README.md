# 模块化开发路由
* 主文件`server.js`
```js
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
```
* 端口配置文件`config.josn`
```js
{
    "PORT": 1909
}
```
* 路由文件夹的`index.js`
```js
const express = require('express')

// 引入其他接口路由
const goodsRouter = require('./goods')
const regRouter = require('./res')

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
```
* 商品路由文件`goods.js`
```js
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

module.exports = Router
```
* 登录路由文件`reg.js`
```js
const express = require('express')

const Router = express.Router()

Router.post('/', (req, res, next) => {
    res.send(req.body)
})

module.exports = Router
```
