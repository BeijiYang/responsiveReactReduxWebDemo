const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/companies', (req, res) => {
  const { body: { pageIndex } } = req

  const getData = length => Array.from({ length }, () => ({
    id: Math.random(),
    name: 'NameCompany',
    email: 'email@emai.com',
    phone: '0123456789',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: `https://picsum.photos/300?random=${Math.floor(Math.random() * 10)}`,
  }))

  const companies = getData(10)
  res.send({
    companies,
    totalPageNum: 10
  })
})

app.listen(3001, () => {
  console.log('Your server is running on port 3001')
})
