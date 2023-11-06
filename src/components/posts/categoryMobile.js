import Link from "next/link";

const CategoryMobile = ({postCategories}) => {
    return ( 
        <div className="row-span-1 col-span-12 flex items-center justify-between overflow-auto md:hidden gap-x-3 whitespace-nowrap pb-4">
            <Link
              className="px-3 py-2 rounded-3xl border border-slate-100 bg-white shadow-sm text-slate-600 text-sm font-medium"
              href="/blogs"
            >
              همه پست ها
            </Link>
            {postCategories.map((category) => {
              return (
                <Link
                  key={category._id}
                  className="px-3 py-2 rounded-3xl border border-slate-100 bg-white shadow-sm text-slate-600 text-sm font-medium"
                  href={`/blogs/${category.englishTitle}`}
                >
                  {category.title}
                </Link>
              );
            })}
          </div>
     );
}
 
export default CategoryMobile;