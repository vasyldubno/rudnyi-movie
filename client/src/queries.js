import { gql } from '@apollo/client'

export const QUERY_GET_MOVIES = gql`
  query ($format: String, $page: Int) {
    movies(page: $page) {
      page
      totalPages
      results {
        id
        title
        posterPath
        releaseDate(format: $format)
      }
    } 
  }
`

export const QUERY_GET_MOVIE_BY_ID = gql`
  query ($ids: [Int]) {
    moviesByIds(ids: $ids) {
      id
      title
      posterPath
      releaseDate
    }
  }
`