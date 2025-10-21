const UserService = require("../service/user.service")

class UserContraller {
  create (ctx,next) {
  // 1.获取用户传递过来的信息
  const user = ctx.request.body
  console.log(user)

  // 2.将user信息存储到数据库中
  UserService.create(user)

  //3.查看存储的结果，告知前端创建成功
  ctx.body = '创建用户成功'
  }
}

module.exports = new UserContraller()