const { getDetails } = require('../modules/movies/getDetails')
const { getPopular } = require('../modules/movies/getPopular')
const { Movie } = require('../modules/movies/Movie')

async function movies(parent, args) { 
  return await getPopular(args.page)
}

async function moviesByIds(parent, { ids }) {
  const requests = ids.map(id => getDetails(id))
  const data = await Promise.all(requests)
  const movies = data.map(movie => new Movie(movie.data))

  return movies
}

module.exports = {
  movies,
  moviesByIds
}