import PlayCircleIcon from "@mui/icons-material/PlayCircle";

interface MovieCardProps {
  title: string;
  rating: number;
  posterUrl?: string;
}

export function MovieCard({
  title,
  rating,
  posterUrl,
}: MovieCardProps) {
  const ratingColor =
    rating < 5
      ? "text-red-500"
      : rating <= 7.5
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div className="relative group flex bg-white rounded-lg overflow-hidden shadow-md w-full max-w-md cursor-pointer">
      
      {/* Overlay global */}
      <div
        className="absolute inset-0 bg-gray-300 opacity-0
                   group-hover:opacity-80
                   transition-opacity duration-300 z-10"
      />

      {/* Play global */}
      <div
        className="absolute inset-0 flex items-center justify-center
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-300 z-20"
      >
        <PlayCircleIcon sx={{ fontSize: 80 }} className="text-black" />
      </div>

      {/* Contenido */}
      <div className="relative z-0 flex w-full">
        {/* Imagen */}
        <div className="w-32 h-44 shrink-0">
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col justify-center p-4 flex-1">
          <h3 className="font-semibold text-base line-clamp-2">
            {title}
          </h3>

          {/* Rating en una sola línea */}
          <div className="flex items-center gap-1 text-sm mt-1">
            <span className="text-gray-500">Rating:</span>
            <span className={`font-bold ${ratingColor}`}>
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
