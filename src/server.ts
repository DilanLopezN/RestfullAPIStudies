import express from 'express'

const app = express()

app.get('/', async (req, res) => {
  return res.json({ message: 'Hello everyone' })
})
app.listen(3333, () => {
  console.log('Server Running')
})
