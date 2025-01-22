const API_KEY = 'd6ad7582'

export const getMoviesByTitle = async ({search}) => {
    if (search === '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search

        return movies?.map(movie => ({
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID,
            type: movie.Type,
            poster: movie.Poster
        }))

    } catch (e) {
        throw new Error('Error searching movies')
    }

}