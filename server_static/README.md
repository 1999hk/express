# 手动创建静态资源服务器
* 了解前端（客户端）与后端（服务器）
    * requet        请求（客户端——>服务器）
    * response      响应（服务器——>客户端）
* 模块分类
    * 内置模块
        > NodeJS自带，可直接使用
        * http，fs，url，path
    * 第三方模块
        > 别人写的符合commonJS规范的模块，需要安装`npm install xxx`
        * express
        * koa
    * 自定义模块
        > 自己编写的符合commonJS规范的的模块，引入时必须使用相对路径（`./`或者`../`）
        * module.exports（优先级更高）
        * exports