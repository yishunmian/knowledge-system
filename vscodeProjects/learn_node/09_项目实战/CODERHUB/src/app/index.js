const Koa = require("koa");
const bodyParser = require("koa-bodyparser")
const userRouter = require("../router/users.router");

// 创建app
const app = new Koa();

// 对app使用中间件
app.use(bodyParser())
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

// 导出app
module.exports = app
