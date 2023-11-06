import {
  ClockIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
const PostList = ({ blogsData }) => {
  return (
    <div className="grid grid-cols-6 gap-8 md:gap-4 xl:gap-8 row-span-1">
      {blogsData.docs.map((blog) => {
        return (
          <div
            key={blog._id}
            className="col-span-6 md:col-span-3 lg:col-span-2 bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden flex flex-col "
          >
            <div className="aspect-w-16 aspect-h-9">
              <Image
                fill
                src={blog.coverImage}
                alt={blog.briefText}
                className="w-full h-full object-center object-cover cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-3  ">
              <h3 className="text-[1rem] font-bold text-slate-700">
                {blog.title}
              </h3>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full  pt-4">
                  <div className="flex items-center">
                    <span className="w-8 h-8 relative">
                      <Image
                        className="rounded-full object-cover cursor-pointer transition-all duration-300 hover:scale-105 "
                        fill
                        src="/images/user.jpg"
                        alt="abolfazl"
                      />
                    </span>
                    <p className="pr-3 text-sm text-slate-600 font-medium">
                      {" "}
                      {blog.author.name}
                    </p>
                  </div>
                  <span className="bg-blue-200 text-blue-500 font-medium px-3 rounded-lg  duration-300 transition-all hover:text-white hover:bg-blue-500 cursor-pointer">
                    {blog.category.englishTitle}
                  </span>
                </div>
                <div className="flex items-center w-full justify-between mt-3 flex-wrap gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center  px-1 bg-slate-100 rounded-lg">
                      <ChatBubbleBottomCenterIcon className="w-5 h-5 cursor-pointer text-slate-600" />
                      <p className="text-slate-600 mr-1">
                        {(blog.likesCount).toLocaleString("fa")}
                      </p>
                    </div>
                    <div className="flex items-center px-1 bg-red-100 rounded-lg">
                      <HeartIcon className={ `w-5 h-5  cursor-pointer text-red-500 ${blog.isLiked?"fill-red-500":""}`} />
                      <p className="text-red-400 mr-1">
                        {(blog.commentsCount).toLocaleString("fa")}
                      </p>
                    </div>
                    <div className="flex items-center p-1 bg-blue-100 rounded-full cursor-pointer">
                      <BookmarkIcon className={`w-5 h-5  text-blue-500 ${blog.isBookmarked?"fill-blue-500":""}`} />
                    </div>
                  </div>
                  <div className="flex items-center text-slate-400 font-bold">
                    <ClockIcon className="w-5 h-5" />
                    <p className="text-[.7rem] pr-1">
                      زمان مطالعه : {blog.readingTime}m{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PostList;
