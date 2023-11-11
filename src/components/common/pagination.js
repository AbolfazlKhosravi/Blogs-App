import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import routerPush from "@utils/routerPush";
import { useRouter } from "next/router";

const Pagination = ({blogData}) => {
    const router = useRouter();
  return (
    <div className="overflow-hidden min-w-[15rem]  rounded-full max-w-screen-lg bg-white shadow-sm border border-slate-100 flex items-center justify-between flex-wrap">
      <button
        onClick={() => {
          if (blogData.hasPrevPage) {
            router.query.page = blogData.prevPage;
            routerPush(router);
          }
        }}
        className={`px-2 py-3  flex items-center justify-between text-slate-500 text-sm ${
          blogData.hasPrevPage
            ? "hover:bg-blue-500 hover:text-white "
            : "cursor-not-allowed opacity-50"
        } `}
      >
        {" "}
        <ChevronRightIcon className=" w-4 h-4" />
        <p>قبلی</p>
      </button>
      <div className="flex items-center justify-between gap-x-3">
        {Array(blogData.totalPages)
          .fill(0)
          .map((_, index) => {
            return (
              <button
                onClick={() => {
                  router.query.page = index + 1;
                  routerPush(router);
                }}
                className={` text-slate-500 w-9 h-9 flex items-center justify-center  rounded-full ${
                  blogData.page === index + 1
                    ? "bg-blue-500 text-white"
                    : "hover:bg-blue-300 hover:text-white"
                } `}
                key={index}
              >
                <p className="translate-y-[.1rem]">{index + 1}</p>
              </button>
            );
          })}
      </div>
      <button
        onClick={(e) => {
          if (blogData.hasNextPage) {
            router.query.page = blogData.nextPage;
            routerPush(router);
          }
        }}
        className={`px-2 py-3  flex items-center justify-between text-slate-500 text-sm ${
          blogData.hasNextPage
            ? "hover:bg-blue-500 hover:text-white "
            : "cursor-not-allowed opacity-50"
        } `}
      >
        بعدی <ChevronLeftIcon className=" w-4 h-4" />
      </button>
    </div>
  );
};
export default Pagination;
