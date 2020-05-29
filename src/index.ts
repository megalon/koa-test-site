import app from './server'
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed. Process terminated.')
  })
})
