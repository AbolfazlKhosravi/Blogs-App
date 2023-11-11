import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
const CategoryDesktop = ({ postCategories, route }) => {
  const [isShowe, setIsShow] = useState(true);
  return (
    <section className="flex flex-col justify-start items-start rounded-xl overflow-hidden sticky top-24 shadow-sm border border-slate-100 mb-4">
      <div
        onClick={() => setIsShow(!isShowe)}
        className=" flex w-full items-center justify-between cursor-pointer p-4 xl:p-5 bg-blue-500  text-white "
      >
        <h2 className="text-lg xl:text-xl font-medium">دسته بندی مقالات</h2>
        <ChevronDownIcon
          className={`w-6 h-6 transition-all duration-300 ${
            isShowe ? "rotate-180" : "rotate-0"
          } `}
        />
      </div>
      <div
        className={` flex flex-col items-start bg-white justify-start w-full transition-all  duration-300 overflow-auto ${
          isShowe ? "h-[38.1rem] xl:h-[34.1rem]" : "h-0 "
        }`}
      >
        <div className="flex items-center justify-start px-2 py-1 xl:text-lg   rounded-lg w-full ">
          <span
            className={`${
              !route ? "w-8 h-8" : "w-0 h-0"
            } transition-all duration-300 bg-blue-500 rounded-full inline-block ml-2`}
          ></span>
          <Link
            onClick={() => {
              scroll.scrollToTop();
            }}
            className={`flex-1 py-4 `}
            href="/blogs"
          >
            همه پست ها
          </Link>
        </div>
        {postCategories.map((category) => {
          return (
            <div
              key={category._id}
              className="flex items-center justify-start px-2 py-1 xl:text-lg   rounded-lg w-full "
            >
              <span
                className={`${
                  route === category.englishTitle ? "w-8 h-8" : "w-0 h-0"
                } transition-all duration-300 bg-blue-500 rounded-full inline-block ml-2`}
              ></span>
              <Link
                onClick={() => {
                  scroll.scrollToTop();
                }}
                className={`flex-1 py-4 `}
                href={`/blogs/${category.englishTitle}`}
              >
                {category.title}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryDesktop;
