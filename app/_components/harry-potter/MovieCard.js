import Image from "next/image";
import Link from "next/link";

function MovieCard({ movie }) {
  const attributes = movie.attributes;

  return (
    <Link
      href={`/harry-potter-world/movies/${movie.id}`}
      className="relative h-96 w-64"
    >
      <div className="relative h-full w-auto">
        <Image
          src={attributes.poster}
          alt={attributes.title}
          fill
          className="object-cover"
        />
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2>{attributes.title}</h2>
        <p>{attributes.release_date}</p>
        <p>{attributes.director}</p>
        <p>{attributes.producers}</p>
        <p>{attributes.actors}</p>
        <p>{attributes.budget}</p>
        <p>{attributes.box_office}</p>
        <p>{attributes.trailer}</p>
      </div> */}
    </Link>
  );
}

export default MovieCard;
