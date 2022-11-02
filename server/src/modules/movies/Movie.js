const { format } = require('date-fns')
const { BASE_URL } = require('../../config')

class Movie {
  constructor(movie) {
    this.movie = movie
    this.id = movie.id
    this.title = movie.title
    this.runtime = movie.runtime
    this.posterPath = `${BASE_URL}${movie.poster_path}`
    this.genres = movie.genres.map(genre => genre.name)
  }

  releaseDate(params) {
        return params.format 
            ? format(new Date(this.movie.release_date), params.format)
            : this.movie.release_date
  }
}

module.exports = {
  Movie
}