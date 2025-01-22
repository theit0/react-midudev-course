/* eslint-disable react/prop-types */
function RenderMovies ({movies}) {
    return (
        <ul className="movies">
            {
                movies.map(movie => {
                    const {id,title,year,poster} = movie
                    return (
                        <li className="movie" key={id}>
                            <div>
                                <h3>{title}</h3>
                                <p>{year}</p>
                            </div>
                            <img src={poster} alt={title} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

function RenderNoResults () {
    return (
        <p>No se encontraron peliculas para esta búsqueda...</p> 
    )
}

export function Movies ({movies}) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies 
            ?   <RenderMovies movies={movies}/> 
            :   <RenderNoResults/>
    )
}