const axios = require('axios')
const { API_KEY } = require('../../config')

const getDetails = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
}

module.exports = {
  getDetails
}