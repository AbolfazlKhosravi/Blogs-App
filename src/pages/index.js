import PostList from "@components/posts/postList";
import Layout from "@containers/layout";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Home({ blogData ,postCategories }) {
  const [isShowe, setIsShow] = useState(false);
  return (
    <Layout>
      <section className="h-full w-full px-3 xl:px-6 ">
        <h1 className="font-bold  py-4 text-blue-600 text-[1.45rem] md:text-2xl lg:text-3xl lg:py-8 xl:text-[2rem]">
          مقالات
        </h1>
        <section className="grid grid-rows-[60px_minmax(300px,_1fr)] xl:grid-rows-[68px_minmax(300px,_1fr)] grid-cols-12 gap-4 xl:gap-10 w-full mt-2 ">
          <div className="  hidden md:flex md:flex-col md:row-span-2 md:col-span-4 lg:col-span-3">
            <section className="flex flex-col justify-start items-start rounded-xl overflow-hidden">
              <div
                onClick={() => setIsShow(!isShowe)}
                className=" flex w-full items-center justify-between cursor-pointer p-4 xl:p-5 bg-blue-500  text-white "
              >
                <h2 className="text-lg xl:text-xl font-medium">
                  دسته بندی مقالات
                </h2>
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
          </div>
          <div className="bg-white rounded-xl px-4 md:text-lg hidden md:flex md:items-center md:justify-start md:row-span-1  md:col-span-8 lg:col-span-9">
            <div className="text-slate-500 flex items-center justify-start">
              <AdjustmentsHorizontalIcon className="w-7 h-7" />
              <p className="text-sm lg:text-lg font-medium text-slate-400 pr-1">
                مرتب سازی :
              </p>
            </div>
            <ul className="flex items-center justify-start mr-6 gap-x-6 h-full">
              <li className="h-full flex ">
                <Link
                  className=" px-2 flex items-center text-sm lg:text-lg font-medium text-slate-500 "
                  href="#"
                >
                  {" "}
                  جدید ترین
                </Link>
              </li>
              <li className="h-full flex ">
                <Link
                  className=" px-2 flex items-center text-sm lg:text-lg font-medium text-slate-500 "
                  href="#"
                >
                  {" "}
                  محبوب ترین
                </Link>
              </li>
              <li className="h-full flex ">
                <Link
                  className=" px-2 flex items-center text-sm lg:text-lg font-medium text-slate-500 "
                  href="#"
                >
                  {" "}
                  پر بازدید ترین
                </Link>
              </li>
            </ul>
          </div>
          <div className=" mb-6 row-span-2 col-span-12 md:row-span-1  md:col-span-8 lg:col-span-9 grid grid-rows-[minmax(300px,_1fr)_145px]">
            <PostList blogsData={blogData} />
            <div className="row-span-1 flex items-center justify-center ">
              <div className="overflow-hidden min-w-[15rem]  rounded-full max-w-screen-lg bg-white shadow-sm border border-slate-100 flex items-center justify-between flex-wrap">
                <Link
                  onClick={(e) => {
                    if (blogData.hasPrevPage) {
                      scroll.scrollToTop();
                    } else {
                      e.preventDefault();
                    }
                  }}
                  className={`px-2 py-3  flex items-center justify-between text-slate-500 text-sm ${
                    blogData.hasPrevPage
                      ? "hover:bg-blue-500 hover:text-white "
                      : "cursor-not-allowed opacity-50"
                  } `}
                  href={
                    blogData.hasPrevPage
                      ? `http://localhost:3000/?page=${blogData.prevPage}`
                      : "/"
                  }
                >
                  {" "}
                  <ChevronRightIcon className=" w-4 h-4" />
                  <p>قبلی</p>
                </Link>
                <div className="flex items-center justify-between gap-x-3">
                  {Array(blogData.totalPages)
                    .fill(0)
                    .map((_, index) => {
                      return (
                        <Link
                          onClick={() => scroll.scrollToTop()}
                          className={` text-slate-500 w-9 h-9 flex items-center justify-center  rounded-full ${
                            blogData.page === index + 1
                              ? "bg-blue-500 text-white"
                              : "hover:bg-blue-300 hover:text-white"
                          } `}
                          key={index}
                          href={`http://localhost:3000/?page=${index + 1}`}
                        >
                          <p className="translate-y-[.1rem]">{index + 1}</p>
                        </Link>
                      );
                    })}
                </div>
                <Link
                  onClick={(e) => {
                    if (blogData.hasNextPage) {
                      scroll.scrollToTop();
                    } else {
                      e.preventDefault();
                    }
                  }}
                  className={`px-2 py-3  flex items-center justify-between text-slate-500 text-sm ${
                    blogData.hasNextPage
                      ? "hover:bg-blue-500 hover:text-white "
                      : "cursor-not-allowed opacity-50"
                  } `}
                  href={
                    blogData.hasNextPage
                      ? `http://localhost:3000/?page=${blogData.nextPage}`
                      : "/"
                  }
                >
                  بعدی <ChevronLeftIcon className=" w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { query } = context;
  const {data:result} = await axios.get(
    query.page
      ? `http://localhost:5000/api/posts?page=${query.page}`
      : `http://localhost:5000/api/posts`
  );
  const {data :postCategories} = await axios.get(
    " http://localhost:5000/api/post-category"
  );
  const {data}=result
  return {
    props: {
      blogData:data,
      postCategories: postCategories.data
    },
  };
}
