# 编写数据接口
* RESTful（编写数据接口的标准）
    * 根据不同的**请求类型**来设计不同的数据接口
    * 根据不同的**请求路径**来设计不同的数据接口
* 路由
    * 动态路由：路径带变量
        * 获取动态路由参数：req.params
    * get请求参数放在url中
        * 获取参数：req.query
    * post, patch, put等请求参数放在请求体中
        * 获取参数：req.body
            * 注意：express没有把请求体中的数据格式化到req.body中，需要利用中间件实现格式化
            * express.json()
            * express.urlencoded({ extended: false })
```js

```