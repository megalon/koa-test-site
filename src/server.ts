import koa from 'koa'
import Router from '@koa/router'
import routes from './routes/routes'
//import Logger from 'koa-logger'

const app = new koa()
const router = new Router()

routes(router)
app.use(router.routes())

app.use(async (ctx, next) => {
  // Go to next middleware
  await next()

  // Log response time
  const responseTime = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${responseTime}`)
})

app.use(async (ctx, next) => {
  // Start timer then go to next middleware
  const start = Date.now()
  await next()

  // When next middleware is finished, set response time
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx) => {
  ctx.body = 'Hello Koa'
})

app.on('error', (err, ctx) => {
  console.error('Server error:', err, ctx)
})

export default app
