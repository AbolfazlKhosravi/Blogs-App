import CategoryDesktop from "@components/posts/categoryDesktop";
import CategoryMobile from "@components/posts/categoryMobile";
import PostList from "@components/posts/postList";
import SortBar from "@components/posts/sortBar";
import Layout from "@containers/layout";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";
import queryString from "query-string";

export default function Home({ blogData, postCategories }) {
  const router = useRouter();
  return (
    <Layout>
      <section className="h-full w-full px-3 xl:px-6 ">
        <h1 className="font-bold  py-4 text-blue-600 text-[1.45rem] md:text-2xl lg:text-3xl lg:py-8 xl:text-[2rem]">
          مقالات
        </h1>
        <section className="grid grid-rows-[60px_minmax(300px,_1fr)] xl:grid-rows-[68px_minmax(300px,_1fr)] grid-cols-12 gap-4 xl:gap-10 w-full mt-2 ">
          {/* category desktop */}
          <div className="  hidden md:flex md:flex-col md:row-span-2 md:col-span-4 lg:col-span-3">
            <CategoryDesktop
              route={router.query.categorySlug}
              postCategories={postCategories}
            />
          </div>
          <SortBar />
          <CategoryMobile
            route={router.query.categorySlug}
            postCategories={postCategories}
          />
          {/* blogs section*/}
          <div className=" mb-6 row-span-1 col-span-12 md:row-span-1  md:col-span-8 lg:col-span-9 grid grid-rows-[minmax(300px,_1fr)_145px]">
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
                      ? `http://localhost:3000/blogs?page=${blogData.prevPage}`
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
                          href={`http://localhost:3000/blogs?page=${index + 1}`}
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
                      ? `http://localhost:3000/blogs?page=${blogData.nextPage}`
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
  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );
  const { data: postCategories } = await axios.get(
    " http://localhost:5000/api/post-category"
  );
  const { data } = result;
  return {
    props: {
      blogData: data,
      postCategories: postCategories.data,
    },
  };
}
