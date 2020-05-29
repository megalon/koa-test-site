import koa from 'koa'
import Router from '@koa/router'
import Logger from 'koa-logger'
import Bodyparser from 'koa-bodyparser'
import Helmet from 'koa-helmet'
import routes from './routes/routes'

const app = new koa()
const router = new Router()

app.use(Logger())
routes(router)
app.use(router.routes())
app.use(Bodyparser())
app.use(Helmet())

app.use(async (ctx) => {
  ctx.body = ctx.request.body
})

app.on('error', (err, ctx) => {
  console.error('Server error:', err, ctx)
})

export default app
