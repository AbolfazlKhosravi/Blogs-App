import {
    HeartIcon,
    ChatBubbleBottomCenterIcon,
    BookmarkIcon,
  } from "@heroicons/react/24/outline";

const PostInteraction = ({blog ,className ,postSlug}) => {
   const sizeIcone= `${postSlug?"w-7 h-7 ":"w-5 h-5 "}`
  return (
    <div className={`flex items-center gap-x-2 ${className}`}>
      <div className="flex items-center  px-1 bg-slate-100 rounded-lg">
        <ChatBubbleBottomCenterIcon className={` text-slate-600 ${sizeIcone}`} />
        <p className="text-slate-600 mr-1">
          {blog.commentsCount.toLocaleString("fa")}
        </p>
      </div>
      <div className="flex items-center px-1 bg-red-100 rounded-lg hover:bg-red-500 text-red-500  hover:text-white">
        <HeartIcon
          className={` ${sizeIcone} cursor-pointer  ${
            blog.isLiked ? "fill-red-500" : "hover:fill-red-500"
          }`}
        />
        <p className=" mr-1">
          {blog.likesCount.toLocaleString("fa")}
        </p>
      </div>
      <div className="flex items-center p-1 bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 rounded-full cursor-pointer">
        <BookmarkIcon
          className={` ${sizeIcone}  ${
            blog.isBookmarked ? "fill-blue-500" : "hover:fill-blue-500"
          }`}
        />
      </div>
    </div>
  );
};
export default PostInteraction;
