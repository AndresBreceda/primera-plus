interface MovieCardProps {
  title: string;
  releaseDate: string;
  rating: number;
  posterUrl?: string;
}

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export function MovieCard({
  title,
  releaseDate,
  rating,
  posterUrl,
}: MovieCardProps) {

  const ratingColor =
    rating < 5
      ? "bg-red-500"
      : rating <= 7.5
      ? "bg-yellow-400"
      : "bg-green-500";

  return (
    <div
      className="relative cursor-pointer group flex gap-6 p-4 border-4 border-black 
                 rounded-xl max-w-md bg-white h-55
                 transition-all duration-300"
    >

      {/* Overlay hover */}
      <div
        className="absolute inset-0 bg-gray-300 opacity-0 
                   group-hover:opacity-80 
                   transition-opacity duration-300 
                   rounded-xl z-10"
      />

      {/* Play button */}
      <div
        className="absolute inset-0 flex items-center justify-center 
                   opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 z-20"
      >
        <PlayCircleIcon
          sx={{ fontSize: 80 }}
          className="text-black"
        />
      </div>

      {/* Contenido */}
      <div className="relative z-0 flex gap-6 w-full">
        {/* Poster */}
        <div className="w-32 h-44 border-4 border-black rounded-md overflow-hidden shrink-0">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200" />
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between flex-1 h-full">
          <div>
            <h2 className="text-lg font-bold line-clamp-2">
              {title}
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              Fecha de estreno
            </p>
            <p className="text-sm font-medium">
              {releaseDate}
            </p>
          </div>

          {/* Rating */}
          <div
            className={`self-end text-white rounded-xl px-6 py-4 text-center ${ratingColor}`}
          >
            <p className="text-sm font-semibold">Nota</p>
            <p className="text-2xl font-bold">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MovieCard