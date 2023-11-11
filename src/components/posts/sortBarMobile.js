import Link from "next/link";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import routerPush from "@utils/routerPush";

const sortOptions = [
  { label: "جدید ترین", id: "newest" },
  { label: "محبوب ترین", id: "popular" },
  { label: "طولانی  ترین", id: "most" },
];
const SortBarMobile = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };
  useEffect(() => {
    setSort(router.query.sort || "newest");
  }, [router]);
  return (
    <div className="row-span-1 col-span-12 flex items-center justify-start overflow-auto md:hidden  whitespace-nowrap pb-4">
      <div className="text-slate-500 flex items-center justify-start">
        <AdjustmentsHorizontalIcon className="w-7 h-7" />
        <p className="text-sm lg:text-lg font-medium text-slate-400 pr-1">
          مرتب سازی :
        </p>
      </div>
      <ul className="flex items-center justify-start mr-6 gap-x-6 h-full">
        {sortOptions.map(({ id, label }) => {
          return (
            <li
              onClick={() => sortHandler(id)}
              key={id}
              className={`relative cursor-pointer  h-12  px-2 flex items-center text-sm lg:text-lg font-medium  ${
                sort === id ? "text-blue-500" : "text-slate-500"
              }`}
            >
              {label}
              <span
                className={`absolute  ${
                  sort === id ? "h-1 w-10" : "h-0 w-0"
                }  duration-300 transition-all  rounded-2xl bg-blue-500 inline-block bottom-0`}
              ></span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortBarMobile;
