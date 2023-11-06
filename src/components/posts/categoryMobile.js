import Link from "next/link";
import { useRouter } from "next/navigation";
import { animateScroll as scroll } from "react-scroll";

const CategoryMobile = ({ postCategories, route }) => {
  return (
    <div className="row-span-1 col-span-12 flex items-center justify-between overflow-auto md:hidden gap-x-3 whitespace-nowrap pb-4">
      <Link
        onClick={() => {
          scroll.scrollToTop();
        }}
        className={`px-3 py-2 rounded-3xl border border-slate-100  shadow-sm text-slate-600 text-sm font-medium ${
          route ? "bg-white" : "bg-blue-500 text-white"
        }`}
        href="/blogs"
      >
        همه پست ها
      </Link>
      {postCategories.map((category) => {
        return (
          <Link
            onClick={() => {
              scroll.scrollToTop();
            }}
            key={category._id}
            className={`px-3 py-2 rounded-3xl border border-slate-100  shadow-sm text-slate-600 text-sm font-medium ${
              route === category.englishTitle
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
            href={`/blogs/${category.englishTitle}`}
          >
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryMobile;
