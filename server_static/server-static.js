/**
 * 静态资源服务器
 * nodeJS 的 commonJS (同步)
 */

// 用于创建服务器
const http = require('http')

// 用于读取文件
const fs = require('fs')

// 用于url地址格式化
const url = require('url')

// 用于格式化文件地址
const path = require('path')

// 自定义模块
const mime = require('./mime')

// 创建一个服务器
const app = http.createServer((request, response) => {

    // 静态资源服务器：根据不同的请求，返回不同的内容
    let { pathname } = url.parse(request.url, true)

    // 获取真实路径 把相对路径装换为决路径
    // 把/img/minge.js -> C:\Users\hk\Desktop\nodejs\static_server\img
    // __dirname: 当前文件所在目录
    let realPath = path.join(__dirname, pathname)

    // 利用path.extname来获取文件的后缀名
    let extname = path.extname(pathname).slice(1)

    // 要显示index.html
    // 1.通过fs模块读取index.html内容
    // 2.通过res.write把内容响应到客户端
    // fs.readFile('../index.html', (error, content) => {})
    fs.readFile(realPath, (error, content) => {
        // error错误信息：默认为unll

        // 告诉浏览器 内容类型是什么 (Content-type)
        response.writeHead(200, { 'content-type': mime[extname] + ';charset=utf8' })

        // 响应内容（可以是多次）
        response.write(content)

        // 结束响应
        response.end()

    })

})

// 监听端口
app.listen(1909, () => {
    console.log('server is runing on port 1909')
})
