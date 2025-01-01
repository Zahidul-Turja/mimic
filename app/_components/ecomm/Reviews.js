import { FaStar } from "react-icons/fa";

function Reviews({ reviews, rating }) {
  const filledStars = Math.floor(rating);
  const restPercentage = (rating - filledStars) * 100;
  let unfilledStars = 5 - filledStars;

  if (restPercentage !== 0) {
    unfilledStars -= 1;
  }

  return (
    <div className="mx-auto my-4 w-full rounded-md bg-primary-900 px-12 py-12">
      <h1 className="my-4 text-2xl font-semibold tracking-wide">Reviews</h1>
      <div className="flex items-center gap-2">
        <span className="my-4 flex items-center gap-1 text-2xl">
          {Array.from({ length: filledStars }, (_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
          <div className="relative h-6 w-6">
            <FaStar className="absolute left-0 top-0 text-gray-300" />
            <div
              className="absolute left-0 top-0 overflow-hidden"
              style={{ width: `${restPercentage}%` }}
            >
              <FaStar className="text-yellow-400" />
            </div>
          </div>
          {Array.from({ length: unfilledStars }, (_, i) => (
            <FaStar key={i} className="text-yellow-100" />
          ))}
          <span className="mx-4 text-gray-300">
            {rating} <span className="text-xl text-gray-500">/ 5</span>
          </span>
        </span>
        {/* <h3 className="text-sm font-extralight text-gray-300">
          Rated by {reviews.length} users
        </h3> */}
      </div>
      <div className="mx-auto my-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="my-8 rounded-md bg-primary-950 px-8 py-4 text-left"
          >
            <div className="-mb-1 flex items-center justify-between">
              <p className="font-bold">{review.reviewerName}</p>
              <p className="text-sm font-light">{review.date.split("T")[0]}</p>
            </div>
            <p className="text-sm font-extralight">
              {review.reviewerEmail.split("@")[0]}
            </p>
            <div className="mb-2 flex items-center gap-2">
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              {Array.from({ length: 5 - review.rating }, (_, i) => (
                <FaStar key={i} className="text-yellow-100" />
              ))}

              {/* <h2 className="text-lg font-normal text-yellow-400">
                {review.rating}
              </h2> */}
            </div>
            <p className="my-4 text-lg">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
