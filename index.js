const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
//const router1 = new Router();
const sum = require('./sum');
const less = require('./less');

router.get('/add/:a/:b', (ctx, next) => {
  const result_ADD = sum(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
  return ctx.body = { result_ADD };
});
router.get('/less/:a/:b', (ctx, next) => {
   const result_LESS = less(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
   return ctx.body = { result_LESS };
});
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
