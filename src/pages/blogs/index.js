import CategoryDesktop from "@components/posts/categoryDesktop";
import CategoryMobile from "@components/posts/categoryMobile";
import PostList from "@components/posts/postList";
import SortBar from "@components/posts/sortBar";
import Layout from "@containers/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { animateScroll as scroll } from "react-scroll";
import queryString from "query-string";
import http from "@services/httpService";
import SortBarMobile from "@components/posts/sortBarMobile";
import routerPush from "@utils/routerPush";
import Pagination from "@common/pagination";

export default function Home({ blogData, postCategories }) {
  const router = useRouter();
  return (
    <Layout>
      <section className="h-full w-full px-3 xl:px-6 ">
        <h1 className="font-bold flex items-center gap-4  py-4 text-blue-600 text-[1.45rem] md:text-2xl lg:text-3xl lg:py-8 xl:text-[2rem]">
          <p>مقالات</p>  {">"} <span className="text-blue-400 text-[1.15rem] md:text-xl lg:text-2xl  xl:text-[1.7rem]">همه</span>
        </h1>
        <section className="grid grid-rows-[60px_60px_minmax(300px,_1fr)] md:grid-rows-[60px_minmax(300px,_1fr)]  xl:grid-rows-[68px_minmax(300px,_1fr)] grid-cols-12 gap-4 xl:gap-10 w-full mt-2 ">
          {/* category desktop */}
          <div className="  hidden md:flex md:flex-col md:row-span-2 md:col-span-4 lg:col-span-3">
            <CategoryDesktop
              route={router.query.categorySlug}
              postCategories={postCategories}
            />
          </div>
          <SortBar />
          <SortBarMobile />
          <CategoryMobile
            route={router.query.categorySlug}
            postCategories={postCategories}
          />
          {/* blogs section*/}
          {blogData.docs.length ? (
            <div className=" mb-6 row-span-1 col-span-12 md:row-span-1  md:col-span-8 lg:col-span-9 grid grid-rows-[minmax(300px,_1fr)_145px]">
              <PostList blogsData={blogData.docs} />
              <div className="row-span-1 flex items-center justify-center ">
                <Pagination blogData={blogData} />
              </div>
            </div>
          ) : (
            <h2>پستی پیدا نشد</h2>
          )}
        </section>
      </section>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { query, req } = context;
  const { data: result } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );
  const { data: postCategories } = await http.get("/post-category");
  const { data } = result;
  return {
    props: {
      blogData: data,
      postCategories: postCategories.data,
    },
  };
}
