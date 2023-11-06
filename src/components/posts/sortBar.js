import Link from "next/link";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
const SortBar = () => {
  return (
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
  );
};

export default SortBar;
