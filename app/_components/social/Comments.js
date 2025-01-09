function Comments({ comments }) {
  return (
    <div>
      {comments?.map((comment) => (
        <h1 key={comment.id}>{comment.body}</h1>
      ))}
    </div>
  );
}

export default Comments;
