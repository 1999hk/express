# nodejs
🎈learning notes
* 模块分类
    * require过程
        <img alt="require过程" src="https://github.com/1999hk/nodejs/blob/master/img/模块加载过程.jpg">
    * 内置模块
        > NodeJS自带，可直接使用
        * http，fs，url，path
    * 第三方模块
        > 别人写的符合commonJS规范的模块，需要安装`npm install xxx`，引入与内置模块一致
        * express
        * koa
    * 自定义模块
        > 自己编写的符合commonJS规范的的模块，引入时必须使用相对路径（`./`或者`../`）
        * module.exports（优先级更高）
        * exports
    * 文件模块
        * json文件
        ```js
        const config = require('./config.josn')     // 返回json内容
        ```
* cnpm替换npm
    * 全局安装好cnpm
    * `npm config get registry`     https://registry.npmjs.org/
    * `npm config set registry=https://registy.npm.taobao.org/`    https://registy.npm.taobao.org/
    * 替换完成后，你就直接可以使用`npm`了，从而它是使用淘宝镜像下载的
* 命令
    * `npm init`                      初始化一个项目（生成一个package.json文件）
    * `npm install`                   安装所有依赖模块
    * `npm install <modulename>`      安装模块
* --save：安装模块到dependencies（默认）
* --save-dev：安装模块到devDependencies
* [express](https://github.com/1999hk/nodejs/server_static)
    * 中间件Middleware
        * 定义：中间件就是一个封装了某些处理数据功能的函数
        * 使用中间件：`app.use([path],...middleware)`
        * 中间件分类
            * 内置中间件：express自带
            * 第三方中间件：需要安装
            * 自定义中间件：自己编写的
* 请求类型
    * get           查
    * post          增
    * patch/put     改（putch:部分修改，put:全部修改）
    * delete        删
    * options       预请求（一般出现在跨域请求中，由浏览器自动发起）
* [编写数据接口](https://github.com/1999hk/nodejs/RESTful)
    * RESTful：编写数据接口的标准
        * 根据**请求类型**来设计不同的数据接口
        * 根据**请求路径**来设计不同的数据接口
* 路由
    * 动态路由：路径带变量

