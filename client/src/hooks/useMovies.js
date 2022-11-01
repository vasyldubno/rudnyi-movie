import { useCallback, useState } from "react"
import { MAX_LENGTH_MOVIES } from '../config'

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([])

  const selectMovie = useCallback((movie) => {
    const isNewMovie = !selectedMovies.find(({id}) => id === movie.id)
    const length = selectedMovies.length

    if(isNewMovie && length < MAX_LENGTH_MOVIES) {
      setSelectedMovies([movie, ...selectedMovies])
    }
  }, [selectedMovies])

  const deleteMovie = useCallback((movie) => {
    setSelectedMovies((selectedMovies.filter(({id}) => id !== movie.id)))
  }, [selectedMovies])

  return {
    selectedMovies,
    selectMovie,
    deleteMovie
  }
}
