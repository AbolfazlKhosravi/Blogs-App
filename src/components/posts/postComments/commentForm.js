import http from "@services/httpService";
import routerPush from "@utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";

const CommentForm = ({ postId, responseTo, setOnreply }) => {
  const [commentValue, setCommentValue] = useState("");
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      content: commentValue,
      postId,
      responseTo,
    };
    http
      .post("/post-comment/save-comment", data)
      .then(({ data }) => {
        setCommentValue("");
        toast.success(data.message);
        if (setOnreply) setOnreply((open) => !open);
        routerPush(router);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        console.log(err?.response?.data?.message);
      });
  };

  return (
    <>
      <form onSubmit={submitHandler} className="p-1">
        <textarea
          className="focus:ring-primary p-4 rounded my-4 w-full border-none ring-1 ring-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:ring-1 min-h-[10rem]"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          placeholder="نظرت رو برام بنویس ..."
        />
        <button
          type="submit"
          className="mt-4 mx-auto py-2 w-full sm:w-56 bg-blue-500 rounded-2xl text-white px-2 md:text-lg"
        >
          ارسال نظر
        </button>
      </form>
    </>
  );
};

export default CommentForm;
