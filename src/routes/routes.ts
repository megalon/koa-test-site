import Router from '@koa/router'

export default (router: Router) => {
  router.use('/users', require('./users'))
  router.use('/test', require('./test'))
}
