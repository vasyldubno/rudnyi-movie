const axios = require('axios')
const { format } = require('date-fns')
// const { Movies } = require('./entities/Movies')
const { API_KEY } = require('../../config')
const { BASE_URL } = require('../../config')

const getPopular = async (page) => {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
  return new Movies(result.data)
}

class Movies {
  constructor(movies) {
    this.page = movies.page
    this.totalResults = movies.total_pages
    this.totalPages = movies.total_results
    this.results = movies.results.map(movie => new Movie(movie))
  }
}
class Movie {
  constructor(movie) {
    this.movie = movie
    this.id = movie.id
    this.title = movie.title
    this.posterPath = `${BASE_URL}${movie.poster_path}`
  }

  releaseDate(params) {
    return params.format 
      ? format(new Date(this.movie.release_date), params.format)
      : this.movie.release_date
  }
}

module.exports = {
  getPopular
}