/* eslint-disable react/prop-types */
function RenderMovies ({movies}) {
    return (
        <ul>
            {
                movies.map(movie => {
                    const {id,title,year,poster} = movie
                    return (
                    <li key={id}>
                        <h3>{title}</h3>
                        <p>{year}</p>
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