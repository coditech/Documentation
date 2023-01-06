const express = require('express')
const app = express()
const port = 3000


  
app.get('*', (req, res) => {
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
app.get('/test', (req, res) => {
    res.json({status:200, message:'ok'})
  })


app.get('/time', (req, res) => {
    const currentTime = new Date().toLocaleTimeString()
    res.json({status:200, message:currentTime})
  })
  app.get('/hello/:id', (req, res) => {
    const id = req.params.id
    res.json({status:200, message:`Hello, ${id}`})
  })
  app.get('/search', (req, res) => {
    const search = req.query.s
    if (search) {
      res.json({status:200, message:'ok', data:search})
    } else {
      res.status(500).json({status:500, error:true, message:'you have to provide a search'})
    }
  })