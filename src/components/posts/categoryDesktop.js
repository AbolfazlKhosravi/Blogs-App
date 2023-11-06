import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
const CategoryDesktop = ({postCategories}) => {
    const [isShowe, setIsShow] = useState(false);
  return (
    <section className="flex flex-col justify-start items-start rounded-xl overflow-hidden">
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
        className={`flex flex-col items-start bg-white justify-end w-full transition-all duration-300 overflow-hidden ${
          isShowe ? "h-[28.1rem] xl:h-[30.1rem]" : "h-0 "
        }`}
      >
        <Link
          className="p-4 xl:text-lg text-slate-700 hover:bg-blue-50 rounded-lg w-full"
          href="/blogs"
        >
          همه پست ها
        </Link>
        {postCategories.map((category) => {
          return (
            <Link
              key={category._id}
              className="p-4 xl:text-lg text-slate-700 hover:bg-blue-50 rounded-lg w-full"
              href={`/blogs/${category.englishTitle}`}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryDesktop;
