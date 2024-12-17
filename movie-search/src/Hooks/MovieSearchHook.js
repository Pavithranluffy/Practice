import { useState, useEffect } from "react";

export default function MovieSearchHook(query) {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        if (!query) {
            setMovieData([]);
            return;
        }

        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=e7c1f8b6`);
                const data = await response.json();
                console.log("The  Json Format is "+ JSON.stringify(data));
                
                if (data.Search) {
                    console.log("The data search format is"+JSON.stringify(data.Search));
                    
                    setMovieData(data.Search);
                } else {
                    setMovieData([]);
                }
            } catch (error) {
                console.error("Error fetching movie data:", error);
                setMovieData([]);
            }
        };

        fetchMovies();
    }, [query]);

    return movieData;
}
