import express from 'express'
const app = express()

// const port = 3000
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('I am Hello World!')
})

app.get('/water', (req, res) => {
    res.send('Water')
  })

  app.get('/food', (req, res) => {
    res.send('Food')
  })
    
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
