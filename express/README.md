# express
* [express实现一个静态资源服务器](https://github.com/1999hk/nodejs/tree/master/express/express_static)
* 中间件Middleware
    * 定义：中间件就是一个封装了某些处理数据功能的函数
    * 使用中间件：`app.use([path],...middleware)`
        * app.use加不加路径的区别
        ```js
        // 无论请求路径是什么，只要请求类型为get类型就会进入
        app.get((req,res,next)=>{
            res.send(req.query)
        })

        // 不管什么请求类型，只要请求路径是/goods就会进入
        app.use('/goods',(req,res,next)=>{
            res.send(req.query)
        })
        
        // 请求类型必须是get类型，并且请求路径为/goods才进入
        app.get('/goods',(req,res,next)=>{
            res.send(req.query)
        })

        // 不管请求类型和请求路径是什么都会进入
        app.use((req,res,next)=>{
            res.send(req.query)
        })
        ```
    * 中间件分类
        * 内置中间件：express自带
            * express.json
            ```js
            // 如果Content-type为application/json
            // 则利用中间件express.json把请求体中的数据格式化到req.body中
            // 修改商品
            app.patch('/goods/:id', express.json(), (req, res, next) => {
                // post, patch, put等请求（参数放在请求体中）
                // 接收前端传入的参数
                console.log(req.body)
                res.send(req.body)
            })
            ```
            * express.static
            ```js
            // 把当前目录作为静态资源服务器
            app.use(express.static('./'))
            ```
            * express.urlencoded
            ```js
            // 如果Content-type为application/x-www-form-urlencoded
            // 则利用中间件express.urlencode把请求体中的数据格式化到req.body中
            // 修改商品
            app.patch('/goods/:id', express.urlencoded(), (req, res, next) => {
                // post, patch, put等请求（参数放在请求体中）
                // 接收前端传入的参数
                console.log(req.body)
                res.send(req.body)
            })
            ```
            * express.Router
            ```js
            // 创建一个中间件
            const Router = express.Router()
            
            // 中间用Router代替app.use进行操作
            Router.get('/goods/:id',(req,res,next)=>{
                // 根据id查找数据库获取商品信息
                // get请求获取参数（参数放在url中）：req.query
                res.send(req.query)
            })
                            
            // 导出中间件
            module.exports = Router
            ```
            * Router.route（链式调用，简化代码）
            ```js
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
                console.log(req.body)
                res.send(req.body)
            })
            
            // 可以简化为
            Router.route('/:id')
                .post('/', (req, res, next) => {
                    // 获取前端传入的参数（商品信息），并写入数据库
                    res.send('商品增加成功')
                })
                .delete('/:id', (req, res, next) => {
                    // 获取动态路由参数：req.params
                    // 获取商品id，并操作数据库删除
                    res.send('商品删除成功' + JSON.stringify(req.params))
                })
                .patch('/:id', (req, res, next) => {
                    // post, patch, put等请求（参数放在请求体中）
                    // 接收前端传入的参数
                    console.log(req.body)
                    res.send(req.body)
                })
            ```

        * 第三方中间件：需要安装
        * 自定义中间件：自己编写的
* 请求类型
    * get           查
    * post          增
    * patch/put     改（putch:部分修改，put:全部修改）
    * delete        删
    * options       预请求（一般出现在跨域请求中，由浏览器自动发起）
* [编写数据接口](https://github.com/1999hk/nodejs/tree/master/express/RESTful)
    * RESTful：编写数据接口的标准
        * 根据**请求类型**来设计不同的数据接口
            * get、post、pathc、delete、options...
        * 根据**请求路径**来设计不同的数据接口
            * /login、/reg、...
* [模块块开发路由](https://github.com/1999hk/nodejs/tree/master/express/express_server)