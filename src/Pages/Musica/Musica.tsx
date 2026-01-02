import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { MusicCard } from "../../MusicCard";

export default function Musica() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBack />

      <main className="flex-1 pt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Música
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center">
          <MusicCard   
            cover="/musica.png"
            album="Ghost Stories"
            artist="Coldplay"/>    
        </div>
      </main>

      <Footer />
    </div>
  );
}

{/* {movies.map(movie => (
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
                </div> */}