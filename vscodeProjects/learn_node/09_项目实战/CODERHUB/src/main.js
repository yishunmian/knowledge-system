// 导入app
const app = require("./app/index")
const { SERVER_PORT } = require("./config/server");


// 将app启动起来
app.listen(SERVER_PORT, () => {
  console.log("codehub服务器启动成功～");
});
