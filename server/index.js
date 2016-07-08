/**
 * Created by ramosy on 2016/7/8.
 */
/**
 * Created by DEV on 2016/6/17.
 */
;
"use strict";
const Koa = require('koa');
const app = new Koa();
const path = require("path");
const os = require("os");
const fs = require("fs");
const koa_static = require('koa-static');
const send = require('koa-send');
//自定义中间件
app.use(async (ctx, next) => {
    if ('/' == ctx.path) return   send(ctx, '/index.html', { root: 'client' });
});
//静态文件
app.use(koa_static(path.join(process.cwd(), "bower_components")));
app.use(koa_static(path.join(process.cwd(), "node_modules")));
app.use(koa_static(path.join(process.cwd(), "client")));


module.exports = app;
