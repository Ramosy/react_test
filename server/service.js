/**
 * Created by ramosy on 2016/7/8.
 */
const app = require('./index.js');
const config = require("./config.json");
// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});
app.listen(4001);

console.info("正在监听 http://"+config.ip+":"+config.port);