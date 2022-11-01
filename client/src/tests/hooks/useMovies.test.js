import { renderHook, act } from '@testing-library/react-hooks'
import { useMovies } from '../../hooks/useMovies'
import { MAX_LENGTH_MOVIES } from '../../config'

describe('useMovies', () => {
  const basicMovie = {
    id: 1,
    title: 'My movie'
  }

  it('should selected movie', () => {
    const { result } = renderHook(() => useMovies())

    act(() => {
      result.current.selectMovie(basicMovie)
    })    

    expect(result.current.selectedMovies.length).toBe(1)
  })

  it('should delete movie', () => {
    const { result } = renderHook(() => useMovies())

    act(() => {
      result.current.selectMovie(basicMovie)
    })
    
    expect(result.current.selectedMovies.length).toBe(1)

    act(() => {
      result.current.deleteMovie(basicMovie)
    })

    expect(result.current.selectedMovies.length).toBe(0)
  })

  it('#3. should selected movie only once', () => {
    const { result } = renderHook(() => useMovies())

    act(() => {
      result.current.selectMovie(basicMovie)
    })

    act(() => {
      result.current.selectMovie(basicMovie)
    })

    expect(result.current.selectedMovies.length).toBe(1)
    expect(result.current.selectedMovies[0].title).toBe(basicMovie.title)
  })

  it('#4. should not add more then alloew movies', () => {
    const { result } = renderHook(() => useMovies())

    for(let i = 0; i < MAX_LENGTH_MOVIES; i++) {
      act(() => {
        result.current.selectMovie({
          ...basicMovie,
          id: i + 1
        })
      })
    }

    expect(result.current.selectedMovies.length).toBe(MAX_LENGTH_MOVIES)
  })
}) 