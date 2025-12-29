import './App.css'
import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { Peliculas } from './Pages/Peliculas';
import { Videojuegos } from './Pages/Videojuegos';
import { Series } from './Pages/Series';
import { Musica } from './Pages/Musica';
import { Acerca } from './Acerca';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peliculas" element={<Peliculas />} />
      <Route path="/videojuegos" element={<Videojuegos />} />
      <Route path="/series" element={<Series />} />
      <Route path="/musica" element={<Musica />} />
      <Route path="/acerca" element={<Acerca />} />

      
      <Route path="*" element={<Home />} />

    </Routes>
  );
}


export default App
