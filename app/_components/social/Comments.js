import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";

function Comments({ comments }) {
  return (
    <div className="mb-8 rounded-lg border border-primary-200 bg-black/30 px-4 py-2 text-left">
      <h2 className="border-b border-primary-200/30 pb-2 text-base font-bold">
        Comments
      </h2>
      {comments?.map((comment) => (
        <div key={comment.id} className="ml-8 py-2">
          <div className="flex flex-col gap-0">
            <Link
              href={`/social/user/${comment.user.id}`}
              className="text-sm font-bold"
            >
              {comment.user.fullName}
            </Link>
            <Link
              href={`/social/user/${comment.user.id}`}
              className="text-xs font-light"
            >
              @{comment.user.username}
            </Link>
          </div>

          <p className="flex items-center gap-1 font-light">
            <MdOutlineNavigateNext />
            {comment.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
