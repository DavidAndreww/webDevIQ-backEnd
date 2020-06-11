const express = require('express')
const colors = require('colors')

const app = express()
const port = 3030;


app.get('/', (req, res) =>{
  res.send('fresh data here, get it while it\'s hot')
})

app.listen(port, ()=>{
  console.log(`App is running on port ${port}`.blue.bold)
})