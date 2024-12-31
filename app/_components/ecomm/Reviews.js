function Reviews({ reviews }) {
  return (
    <div className="my-4 w-full rounded-md bg-primary-900 px-12 py-12">
      <h1>Reviews</h1>
      {reviews.map((review, index) => (
        <div key={index}>
          <h2>{review.rating}</h2>
          <p>{review.comment}</p>
          <p>{review.date}</p>
          <p>{review.reviewerName}</p>
          <p>{review.reviewerEmail}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
