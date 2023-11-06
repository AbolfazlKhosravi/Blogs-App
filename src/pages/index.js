import Layout from "@containers/layout";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  ClockIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function Home({ data }) {
  const router = useRouter();
  const { docs } = data;
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
                  isShowe ? "h-[17.6rem] xl:h-[18.9rem]" : "h-0 "
                }`}
              >
                <Link
                  className="p-4 xl:text-lg text-slate-700 hover:bg-blue-50 rounded-lg w-full"
                  href="#"
                >
                  همه پست ها
                </Link>
                <Link
                  className="p-4 xl:text-lg text-slate-700 hover:bg-blue-50 rounded-lg w-full"
                  href="#"
                >
                  جاوا اسکریپت
                </Link>
                <Link
                  className="p-4 xl:text-lg text-slate-700 hover:bg-blue-50 rounded-lg w-full"
                  href="#"
                >
                  تیلوند
                </Link>
                <Link
                  className="p-4 xl:text-lg text-slate-700 hover:bg-blue-50 rounded-lg w-full"
                  href="#"
                >
                  ریکت
                </Link>
                <Link
                  className="p-4 xl:text-lg text-slate-700 hover:bg-blue-50 rounded-lg w-full"
                  href="#"
                >
                  نکست
                </Link>
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
          <div className=" mb-6 row-span-2 col-span-12 md:row-span-1  md:col-span-8 lg:col-span-9 grid grid-rows-[minmax(300px,_1fr)_80px]">
            <div className="grid grid-cols-6 gap-8 md:gap-4 xl:gap-8 row-span-1">
              {docs.map((blog) => {
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
                            {blog.slug.split("-")[0]}
                          </span>
                        </div>
                        <div className="flex items-center w-full justify-between mt-3 flex-wrap gap-y-2">
                          <div className="flex items-center gap-x-2">
                            <div className="flex items-center  px-1 bg-slate-100 rounded-lg">
                              <ChatBubbleBottomCenterIcon className="w-5 h-5 text-slate-600" />
                              <p className="text-slate-600 mr-1">
                                {(5).toLocaleString("fa")}
                              </p>
                            </div>
                            <div className="flex items-center px-1 bg-red-100 rounded-lg">
                              <HeartIcon className="w-5 h-5  text-red-500" />
                              <p className="text-red-400 mr-1">
                                {(10).toLocaleString("fa")}
                              </p>
                            </div>
                            <div className="flex items-center p-1 bg-blue-100 rounded-full">
                              <BookmarkIcon className="w-5 h-5 text-blue-500" />
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
            <div className="row-span-1 flex items-center justify-center ">
              <div className="overflow-hidden min-w-[15rem]  rounded-full max-w-screen-lg bg-white shadow-sm border border-slate-100 flex items-center justify-between flex-wrap">
                <Link
                  onClick={(e) => {
                    if (data.hasPrevPage) {
                      scroll.scrollToTop();
                    } else {
                      e.preventDefault();
                    }
                  }}
                  className={`px-2 py-3  flex items-center justify-between text-slate-500 text-sm ${
                    data.hasPrevPage
                      ? "hover:bg-blue-500 hover:text-white "
                      : "cursor-not-allowed opacity-50"
                  } `}
                  href={
                    data.hasPrevPage
                      ? `http://localhost:3000/?page=${data.page - 1}`
                      : "/"
                  }
                >
                  {" "}
                  <ChevronRightIcon className=" w-4 h-4" />
                  <p>قبلی</p>
                </Link>
                <div className="flex items-center justify-between gap-x-3">
                  {Array(data.totalPages)
                    .fill(0)
                    .map((_, index) => {
                      return (
                        <Link
                          onClick={() => scroll.scrollToTop()}
                          className={` text-slate-500 w-9 h-9 flex items-center justify-center  rounded-full ${
                            data.page === index + 1
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
                  if (data.hasNextPage) {
                    scroll.scrollToTop();
                  } else {
                    e.preventDefault();
                  }
                }}
                  className={`px-2 py-3  flex items-center justify-between text-slate-500 text-sm ${
                    data.hasNextPage
                      ? "hover:bg-blue-500 hover:text-white "
                      : "cursor-not-allowed opacity-50"
                  } `}
                  href={
                    data.hasNextPage
                      ? `http://localhost:3000/?page=${data.page + 1}`
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
  // console.log(query.page);
  const { data } = await axios.get(
    query.page
      ? `http://localhost:5000/api/posts?page=${query.page}`
      : `http://localhost:5000/api/posts`
  );
  return {
    props: {
      data: data.data,
    },
  };
}
