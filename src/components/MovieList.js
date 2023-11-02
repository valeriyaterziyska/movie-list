import Movie from "./Movie";


export default function MovieList({
    movies,
}) {

    return (
        <ul>
            {movies.map((movie, index) => (
                <Movie key={index} {...movie} />
            ))}
        </ul>
    );
}