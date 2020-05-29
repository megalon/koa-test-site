import koa from 'koa'
import Router from '@koa/router'
import routes from './routes/routes'
import Logger from 'koa-logger'

const app = new koa()
const router = new Router()

app.use(Logger())
routes(router)
app.use(router.routes())

app.use(async (ctx) => {
  ctx.body = 'Hello Koa'
})

app.on('error', (err, ctx) => {
  console.error('Server error:', err, ctx)
})

export default app
