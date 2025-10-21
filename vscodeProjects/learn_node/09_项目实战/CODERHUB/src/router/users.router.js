const koaRouter = require("@koa/router");

const UserContraller = require("../controller/user.comtraller")

// 1.创建路由对象
const userRouter = new koaRouter({ prefix: "/users" });

// 2.定义路由中的映射
// 2.1用户注册接口
userRouter.post('/',UserContraller.create)

// 3.导出路由
module.exports = userRouter;
