import { Footer } from "../Footer";
import { Header } from "../Header";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">

          {/* PELICULAS */}
         <div 
          onClick={() => navigate("/Peliculas")} 
          className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black group"
          >

          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/peliculas.png')" }}
          />

          {/* SHUTTER - lado izquierdo */}
          <div
            className="
              absolute inset-y-0 left-0 w-1/2
              bg-blue-700/70
              origin-left
              group-hover:scale-x-0
              transition-transform duration-500 ease-in-out
            "
          />

          {/* SHUTTER - lado derecho */}
          <div
            className="
              absolute inset-y-0 right-0 w-1/2
              bg-blue-700/70
              origin-right
              group-hover:scale-x-0
              transition-transform duration-700 ease-in-out
            "
          />

          {/* Texto */}
          <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold pointer-events-none group-hover:opacity-0 duration-700">
            Películas
          </div>

        </div>




          {/* SERIES */}
          <div 
            onClick={() => navigate("/Series")} 
            className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/series.png')" }}
            />
            <div className="absolute inset-y-0 left-0 w-1/2 bg-red-600/70 origin-left group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-red-600/70 origin-right group-hover:scale-x-0 transition-transform duration-700 ease-in-out" />
            <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold pointer-events-none group-hover:opacity-0 duration-700">
              Series
            </div>
          </div>

          {/* MUSICA */}
          <div onClick={() => navigate("/Musica")}  className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/musica.png')" }}
            />
            <div className="absolute inset-y-0 left-0 w-1/2 bg-green-600/70 origin-left group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-green-600/70 origin-right group-hover:scale-x-0 transition-transform duration-700 ease-in-out" />
            <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold pointer-events-none group-hover:opacity-0 duration-700">
              Música
            </div>
          </div>

          {/* VIDEOJUEGOS */}
        <div onClick={() => navigate("/Videojuegos")}  className="cursor-pointer relative h-40 rounded-2xl overflow-hidden border-2 border-black group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/videojuegos.png')" }}
            />
            <div className="absolute inset-y-0 left-0 w-1/2 bg-purple-600/70 origin-left group-hover:scale-x-0 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-purple-600/70 origin-right group-hover:scale-x-0 transition-transform duration-700 ease-in-out" />
            <div className="text-3xl relative z-10 h-full flex items-center justify-center text-white font-semibold pointer-events-none group-hover:opacity-0 duration-700">
              Videojuegos
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

