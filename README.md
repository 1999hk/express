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
    * `npm install <modulename>`      
* --save：安装模块到dependencies（默认）
* --save-dev：安装模块到devDependencies
* 基于nodeJS内置模块
    * [静态资源服务器](https://github.com/1999hk/nodejs/tree/master/server_static)
* 第三方模块[express](https://github.com/1999hk/nodejs/tree/master/express)的使用
    
