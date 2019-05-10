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

  const companies = [{
    id: 0,
    name: 'NameCompany',
    email: 'email@emai.com',
    phone: '0123456789',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: 'asdfasdf',
  }]
  res.send({
    companies,
    totalPageNum: 10
  })
})

app.listen(3001, () => {
  console.log('Your server is running on port 3001')
})
