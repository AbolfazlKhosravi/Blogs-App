import Layout from "@containers/layout";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
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
          <div className="bg-red-500 row-span-2 col-span-12 md:row-span-1  md:col-span-8 lg:col-span-9">
            blogs
          </div>
        </section>
      </section>
    </Layout>
  );
}
