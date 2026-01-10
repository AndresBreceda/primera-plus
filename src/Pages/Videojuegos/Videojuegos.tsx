import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { MusicCard } from "../../MusicCard";

export default function Videojuegos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showBack />

      <main className="flex-1 pt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Videojuegos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2 mb-2 justify-items-center">
          <MusicCard   
            cover="/game-cover/angry-bird.jpg"
            album="Angry Birds"
            artist="Rovio Entertainment"/> 
          <MusicCard   
            cover="/game-cover/balatro.jpg"
            album="Balatro"
            artist="LocalThunk"/> 
          <MusicCard   
            cover="/game-cover/bloons.jpg"
            album="Bloons Tower Defense"
            artist="Ninja Kiwi"/> 
          <MusicCard   
            cover="/game-cover/catapult-king.jpg"
            album="Catapult King"
            artist="Wicked Witch"/> 
          <MusicCard   
            cover="/game-cover/cover-orange.jpg"
            album="Cover Orange 2"
            artist="FDG Entertainment"/> 
          <MusicCard   
            cover="/game-cover/crush-castle.jpg"
            album="Crush Castle"
            artist="Wildlife Studios"/> 
          <MusicCard   
            cover="/game-cover/cut-the-rope.jpg"
            album="Cut the Rope"
            artist="ZeptoLab"/> 
          <MusicCard   
            cover="/game-cover/wheres-water.jpg"
            album="Where's my Water?"
            artist="Creature Feep"/> 
 
        </div>                 
      </main>

      <Footer />
    </div>
  );
}
