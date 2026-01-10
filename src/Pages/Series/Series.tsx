import { useEffect, useState } from "react";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { MovieCard } from "../../MovieCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface Series {
  id: number;
  name: string;
  vote_average: number;
  poster_path: string;
}

const getPopularSeries = async (): Promise<Series[]> => {
  const res = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-MX`
  );

  if (!res.ok) {
    throw new Error("Error al cargar películas");
  }

const data = await res.json();
  console.log(data);
  return data.results.slice(0, 13);
};

export default function Series() {
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(() => {
    getPopularSeries().then(setSeries);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header showBack />

      <main className="flex-1 pt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Películas
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          {series.map(series => (
            <MovieCard
              key={series.id}
              title={series.name}
              rating={Number(series.vote_average.toFixed(1))}
              posterUrl={
                series.poster_path
                  ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
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

