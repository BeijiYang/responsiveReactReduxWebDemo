const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const TOTAL_PAGE_NUM = 10
const getIntSmallerThan = num => Math.floor(Math.random() * num)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('hello')
})

app.post('/companies', (req, res) => {
  const { body: { pageIndex, CARDS_PER_PAGE } } = req

  const getData = length => Array.from({ length }, () => ({
    id: Math.random(),
    name: `Company No.${getIntSmallerThan(1000)}`,
    email: 'email@email.com',
    phone: '0123456789',
    intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: `https://picsum.photos/300?random=${getIntSmallerThan(10)}`,
  }))

  const companies = getData(CARDS_PER_PAGE)
  res.send({
    companies,
    totalPageNum: TOTAL_PAGE_NUM
  })
})

app.listen(3001, () => {
  console.log('Your server is running on port 3001')
})
