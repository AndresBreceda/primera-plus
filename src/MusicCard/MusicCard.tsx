import PlayCircleIcon from "@mui/icons-material/PlayCircle";

interface MusicCardProps {
  album: string;
  artist: string;
  cover?: string;
}

export default function MusicCard({ cover, album, artist }: MusicCardProps) {
  return (
    <div className="w-48 bg-white rounded-lg overflow-hidden shadow-md">
      
      {/* Imagen + Hover */}
      <div className="relative group">
        {/* Imagen */}
        <img
          src={cover}
          alt={`${album} cover`}
          className="w-full h-48 object-cover"
        />

        {/* Overlay gris */}
        <div
          className="absolute inset-0 bg-gray-300 opacity-0 
                     group-hover:opacity-80 
                     transition-opacity duration-300"
        />

        {/* Botón Play */}
        <div
          className="absolute inset-0 flex items-center justify-center 
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300"
        >
          <PlayCircleIcon
            sx={{ fontSize: 80 }}
            className="text-black"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="p-3 text-center">
        <h3 className="font-semibold text-sm">{album}</h3>
        <p className="text-xs text-gray-500">{artist}</p>
      </div>
    </div>
  );
}
