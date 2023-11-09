import { useState } from "react";

const CommentForm = ({ postId, responseTo, setOnreply }) => {
  const [commentValue, setCommentValue] = useState("");

  return (
    <form className="p-1">
      <textarea
        className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:ring-1 min-h-[10rem]"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="نظرت رو برام بنویس ..."
      />
      <button
        className="mt-4 mx-auto py-2 w-full sm:w-56 bg-blue-500 rounded-2xl text-white px-2 md:text-lg"
        // onClick={submitHandler}
      >
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
