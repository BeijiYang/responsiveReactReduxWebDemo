const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})


app.listen(3001, () => {
  console.log('Your server is running on port 3001')
})
