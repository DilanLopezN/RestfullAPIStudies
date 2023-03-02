import express from 'express'

const app = express()

app.use(express.json())

const db = []
app.get('/', (req, res) => {
  return res.json({ message: 'Hello Everyone' })
})

app.post('/courses', (req, res) => {
  const { id, course, educator } = req.body
  const data = {
    id,
    course,
    educator
  }
  db.push(data)
  return res.status(201).json(db)
})
app.listen(3333, () => console.log('Server is running!'))
