
const express = require('express')
const app = express()
const port = 7000

const data = [
   {
      name: 'Mohammad',
      age: 23,
      email: "md@gmail.com",
      name: 'Mohammad',
      age: 23,
      email: "md@gmail.com",

   }
]

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/data', (req, res) => {
   res.send(data)
})




app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})