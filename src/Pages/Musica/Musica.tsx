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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 mb-2 justify-items-center">
          <MusicCard   
            cover="/music-cover/coldplay-album-cover.jpg"
            album="Ghost Stories"
            artist="Coldplay"/>    

          <MusicCard   
            cover="/music-cover/album-jao-cover.png"
            album="Pirata"
            artist="Jao"/> 

          <MusicCard   
            cover="/music-cover/album-dua-cover.png"
            album="Future Nostalgia"
            artist="Dua Lipa"/> 

          <MusicCard   
            cover="/music-cover/album-post-cover.jpg"
            album="beerbongs & bentleys"
            artist="Post Malone"/> 

          <MusicCard   
            cover="/music-cover/album-maroon-cover.jpg"
            album="Overexposed"
            artist="Maroon 5"/>   

          <MusicCard   
            cover="/music-cover/album-natalia-cover.jpg"
            album="Hasta la Raíz"
            artist="Natalia Lafourcade"/>      

          <MusicCard   
            cover="/music-cover/album-republic-cover.jpg"
            album="waking up"
            artist="One Republic"/>    
        </div>
      </main>

      <Footer />
    </div>
  );
}
