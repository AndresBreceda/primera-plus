import { useEffect, useState } from "react";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { MovieCard } from "../../MovieCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-MX`
  );

  if (!res.ok) {
    throw new Error("Error al cargar películas");
  }

  const data = await res.json();
  return data.results.slice(0, 13);
};

export default function Peliculas() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBack />

      <main className="flex-1 pt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Películas
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              rating={Number(movie.vote_average.toFixed(1))}
              posterUrl={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : undefined
              }
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
