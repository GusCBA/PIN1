const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
#const router1 = new Router();
const sum = require('./sum');
const less = require('./less');

router.get('/add/:a/:b', (ctx, next) => {
  const result = sum(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
  return ctx.body = { result };
});
// router1.get('/less/:a/:b', (ctx, next) => {
//   const result1 = less(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
//   return ctx.body = { result1 };
// });
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
