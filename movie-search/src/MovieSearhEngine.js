import React, { useState } from "react";
import MovieSearchHook from "./Hooks/MovieSearchHook";

export default function MovieSearchEngine() {
    return (
        <>
            <h1>The Movie Search Engine</h1>
            <SearchBar />
        </>
    );
}

function SearchBar() {
    const [query, setQuery] = useState("");
    const movieData = MovieSearchHook(query);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search for movies..."
                onChange={handleChange}
                value={query}
            />
            <ul>
                {movieData.map((movie) => (
                    <h6 key={movie.imdbID}>{movie.Title}</h6>
                ))}
            </ul>
        </>
    );
}
