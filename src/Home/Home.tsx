import { Footer } from "../Footer";
import { Header } from "../Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBack />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">

          {/* PELICULAS */}
          <div className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black group">

          {/* Imagen */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/peliculas.png')" }}
          />

          {/* Overlay color */}
          <div className="absolute inset-0 bg-blue-700/60" />



          {/* Texto */}
          <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold">
            Películas
          </div>

        </div>



          {/* SERIES */}
          <div className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/series.png')" }}
            />
            <div className="absolute inset-0 bg-red-600/60" />
            <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold">
              Series
            </div>
          </div>

          {/* MUSICA */}
          <div className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/musica.png')" }}
            />
            <div className="absolute inset-0 bg-green-600/60" />
            <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold">
              Música
            </div>
          </div>

          {/* VIDEOJUEGOS */}
          <div className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/videojuegos.png')" }}
            />
            <div className="absolute inset-0 bg-purple-600/60" />
            <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold">
              Videojuegos
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

