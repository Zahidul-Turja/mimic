import { FaStar } from "react-icons/fa";

function Reviews({ reviews, rating }) {
  return (
    <div className="my-4 w-full rounded-md bg-primary-900 px-12 py-12">
      <h1>Reviews</h1>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 text-base text-yellow-400">
          <FaStar className="text-xs" />
          <span>{rating}</span>
        </span>
        {/* <h3 className="text-sm font-extralight text-gray-300">
          Rated by {reviews.length} users
        </h3> */}
      </div>
      <div className="my-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="my-4 rounded-md bg-primary-950 px-8 py-4 text-left"
          >
            <div className="flex items-center justify-between">
              <p className="font-bold">{review.reviewerName}</p>
              <p className="text-sm font-light">{review.date.split("T")[0]}</p>
            </div>
            <p className="text-sm font-extralight">
              {review.reviewerEmail.split("@")[0]}
            </p>
            <div className="flex items-center gap-2">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              {Array.from({ length: 5 - review.rating }, (_, i) => (
                <FaStar key={i} className="text-yellow-100" />
              ))}

              <h2 className="text-lg font-bold">{review.rating}</h2>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
