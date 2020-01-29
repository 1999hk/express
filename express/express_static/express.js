// 如果不是原生模块，会自动到node_modules中去查找

const express = require('express')

// 创建一个服务器
const app = express()

// 静态资源服务器
// 把当前目录作为静态资源服务器
// 1.内置中间件
// const mw = express.static('./')
// app.use(mw)

// 2.自定义中间件
app.use('/login', function (req, res, next) {
    // req:request
    // res:response
    // next:进入下一个中间件的方法

    res.send({ username: 'min', age: '18' })

    // next()

})

app.use('/reg', function (req, res, next) {
    // req:request
    // res:response
    // next:进入下一个中间件的方法

    res.send('注册成功')
})

// 监听端口
app.listen(1909, () => {
    console.log('server is run on http://localhost:1909')
})
