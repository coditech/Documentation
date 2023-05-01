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
  const movies = [
    {id:1, title: 'Jaws', year: 1975, rating: 8 },
    {id:2, title: 'Avatar', year: 2009, rating: 7.8 },
    {id:3, title: 'Brazil', year: 1985, rating: 8 },
    {id:4, title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]
app.get('/movies/add', (req, res) => {
    res.json({status:200, data:movies})
    
  })
  
  app.get('/movies/get', (req, res) => {
    

  })
  
  app.get('/movies/edit', (req, res) => {
    

  })
  
  app.get('/movies/delete', (req, res) => {
    

  })
  app.get('/movies/read/by-date', (req, res) => {
    const sortedMovies = movies.sort((a, b) => a.year - b.year)
    res.json({status:200, data:sortedMovies})
  })
  
  app.get('/movies/read/by-rating', (req, res) => {
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating)
    res.json({status:200, data:sortedMovies})
  })
  
  app.get('/movies/read/by-title', (req, res) => {
    const sortedMovies = movies.sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })
    res.json({status:200, data:sortedMovies})
  })
  app.get('/movies/read/id/:id', (req, res) => {
    const movieId = parseInt(req.params.id)
    const movie = movies.find(movie => movie.id === movieId)
    if (movie) {
      res.json({status:200, data:movie})
    } else {
      res.status(404).json({status:404, error:true, message:`the movie ${movieId} does not exist`})
    }
  })


  app.get('/movies/add', (req, res) => {
    const title = req.query.title
    const year = parseInt(req.query.year)
    let rating = parseFloat(req.query.rating)
    if (!title || !year || year < 1000 || year > 9999 || isNaN(year)) {
      res.status(403).json({status:403, error:true, message:'you cannot create a movie without providing a title and a valid year'})
    } else {
      if (!rating) {
        rating = 4
      }
      const newMovie = {id:movies.length + 1, title, year, rating}
      movies.push(newMovie)
      res.json({status:200, data:movies})
    }
  })
  app.get('/movies/delete/:id', (req, res) => {
    const movieId = parseInt(req.params.id)
    const index = movies.findIndex(movie => movie.id === movieId)
    if (index !== -1) {
      movies.splice(index, 1)
      res.json({status:200, data:movies})
    } else {
      res.status(404).json({status:404, error:true, message:`the movie ${movieId} does not exist`})
    }
  })
  app.get('/movies/add', (req, res) => {
    const title = req.query.title     
    const year = parseInt(req.query.year)
    let rating = parseFloat(req.query.rating)
    if (!title || !year || year < 1000 || year > 9999 || isNaN(year)) {
      res.status(403).json({status:403, error:true, message:'you cannot create a movie without providing a title and a valid year'})
    } else {
      if (!rating) {
        rating = 4
      }
      const newMovie = {id:movies.length + 1, title, year, rating}
      movies.push(newMovie)
      res.json({status:200, data:movies})
    }
  })
  