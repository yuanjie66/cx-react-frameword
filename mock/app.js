// 启动 koa server 来提供 mock
// 或者直接用 mockjs 拦截 ajax
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

// 设置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

const data = require('./data');

let home = new Router();
home.get('/', async ctx => {
  ctx.body = 'Hello World!';
});

let router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/api', data.routes(), data.allowedMethods());



app.use(router.routes()).use(router.allowedMethods());

const port = 3322;

app.listen(port);
console.log('Mock Server is running at http://localhost:' + port);
