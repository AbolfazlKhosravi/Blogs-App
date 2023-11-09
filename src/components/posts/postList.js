import { ClockIcon } from "@heroicons/react/24/outline";

import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import PostInteraction from "./postInteraction";
const PostList = ({ blogsData }) => {
  const [showGoToTheBlog, setShowGoToTheBlog] = useState(null);
  return (
    <div className=" grid grid-cols-6 gap-8 md:gap-4 xl:gap-8 row-span-1">
      {blogsData.map((blog) => {
        return (
          <div
            key={blog._id}
            className="relative col-span-6 md:col-span-3 lg:col-span-2 bg-white border border-slate-100 shadow-sm rounded-xl overflow-hidden flex flex-col "
          >
            <div
              onMouseEnter={() => {
                setShowGoToTheBlog(blog._id);
              }}
              onMouseLeave={() => {
                setShowGoToTheBlog(null);
              }}
              className="aspect-w-16 aspect-h-9"
            >
              <Image
                fill
                src={blog.coverImage}
                alt={blog.briefText}
                className={`w-full h-full object-center object-cover cursor-pointer transition-all duration-300 hover:scale-105  overflow-hidden ${
                  showGoToTheBlog === blog._id ? "scale-105" : ""
                }`}
              />
            </div>
            <div className="flex flex-col justify-between flex-1 p-3  ">
              <h3
                onMouseEnter={() => {
                  setShowGoToTheBlog(blog._id);
                }}
                onMouseLeave={() => {
                  setShowGoToTheBlog(null);
                }}
                className="text-[1rem] font-bold text-slate-700"
              >
                {blog.title}
              </h3>
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full  pt-4 flex-wrap gap-3 ">
                  <div className="flex items-center ">
                    <span className="w-9 h-9 relative">
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
                  <div className="flex items-center justify-between flex-wrap gap-2 ">
                    {blog.category.map((category) => {
                      return (
                        <Link
                          key={category._id}
                          onClick={() => {
                            scroll.scrollToTop();
                          }}
                          className="duration-300 transition-all hover:scale-105"
                          href={`/blogs/${category.englishTitle}`}
                        >
                          <span className="bg-blue-500 text-white font-medium px-3 py-[.1rem] rounded-lg   cursor-pointer">
                            {category.englishTitle}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center w-full justify-between mt-3 flex-wrap gap-y-2">
                  <PostInteraction blog={blog} />
                  <div className="flex items-center text-slate-400 font-bold">
                    <ClockIcon className="w-5 h-5" />
                    <p className="text-[.7rem] pr-1">
                      زمان مطالعه : {blog.readingTime}m{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href={`/posts/${blog.hashId}/${blog.url_post}`}
              onMouseEnter={() => {
                setShowGoToTheBlog(blog._id);
              }}
              onMouseLeave={() => {
                setShowGoToTheBlog(null);
              }}
              className={`absolute  w-full ${
                showGoToTheBlog === blog._id
                  ? "translate-y-0 h-full"
                  : "translate-y-[30rem] h-full"
              } transition-all duration-500 overflow-hidden  flex items-center justify-center`}
            >
              <div className="absolute w-full h-full bg-slate-950 opacity-50 flex "></div>
              <span className="z-50 py-2 px-3 bg-blue-600 rounded-2xl text-white font-medium  opacity-100">
                رفتن به پست
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default PostList;
