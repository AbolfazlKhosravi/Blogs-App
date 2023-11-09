import Layout from "@containers/layout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import {
  BookmarkIcon,
  DocumentDuplicateIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import PostInteraction from "@components/posts/postInteraction";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa6";
import PostList from "@components/posts/postList";
import PostComments from "@components/posts/postComments";

const Blog = ({ blog }) => {
  const [copied, setCopied] = useState(false);
  const copyLinkHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <Layout>
      <div className="flex flex-col p-3 md:px-12 lg:px-28 xl:px-60 2xl:px-72 lg:py-6 ">
        <header className="gap-y-6 flex flex-row flex-wrap items-start justify-between md:justify-between w-full border-b border-slate-400  pb-6 ">
          <div className="flex items-center justify-center ">
            <div className="flex items-center justify-center ">
              <Image
                className="cursor-pointer rounded-full object-cover w-20 h-20 hover:scale-105 transition-all duration-500"
                width={60}
                height={60}
                src={"/images/user.jpg"}
                alt={blog.author.name}
              />
            </div>
            <div className="flex flex-col items-start justify-start flex-1 mr-4">
              <div className="gap-x-3 gap-y-1 flex items-center justify-start flex-wrap">
                <p className="text-slate-700 font-bold text-lg whitespace-nowrap">
                  {blog.author.name}
                </p>{" "}
                {blog.category.map((category) => {
                  return (
                    <Link
                      key={category._id}
                      href={`/blogs/${category.englishTitle}`}
                      className="px-3 py-1 rounded-full text-blue-500 hover:text-white cursor-pointer text-sm font-bold bg-white hover:bg-blue-500  shadow-sm border border-blue-500 "
                    >
                      {" "}
                      {category.englishTitle}
                    </Link>
                  );
                })}
              </div>
              <p className="text-slate-500 font-normal text-sm my-2">
                {blog.author.biography}
              </p>
              <div className="flex items-center justify-start gap-x-5">
                <p className="text-slate-700 font-bold text-sm ">
                  {new Date(blog.updatedAt).toLocaleDateString("fa-ir")}
                </p>
                <p className="text-slate-700 font-bold text-sm ">
                  زمان خواندن {blog.readingTime.toLocaleString("fa")} دقیقه
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-start gap-x-6">
            <CopyToClipboard
              text={`${process.env.NEXT_PUBLIC_DUMAIN_URL}/posts/${blog.hashId}/${blog.url_post}`}
              onCopy={() => copyLinkHandler()}
            >
              <div className="relative">
                <LinkIcon className="cursor-pointer hover:scale-105 transition-all duration-300 w-7 h-7 text-slate-600 " />
                {copied ? (
                  <span className="px-2 translate-x-3 translate-y-1 absolute text-xs font-medium whitespace-nowrap p-1 bg-blue-500 text-white rounded-2xl">
                    کپی شد
                  </span>
                ) : (
                  ""
                )}
              </div>
            </CopyToClipboard>

            <div className="flex items-center justify-center gap-x-2 px-3 py-1 rounded-full text-slate-500 hover:text-white cursor-pointer text-sm font-bold bg-white hover:bg-blue-500  shadow-sm border border-slate-500 hover:border-blue-500 ">
              <p>ذخیره</p>
              <BookmarkIcon className="w-6 h-6 hover:text-white " />
            </div>
          </div>
        </header>
        <main className="flex flex-col items-start justify-start mt-8 border-b border-slate-400  pb-6">
          <div className="flex items-start justify-between relative md:gap-x-5 lg:gap-x-10">
            <main
              className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl  prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10
        prose-img:rounded-xl prose-a:text-blue-500 prose-code:font-bold mb-8 w-auto flex-1 
        "
            >
              <h1>{blog.title}</h1>
              <h2>عنوان اول تستی</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <img src={blog.coverImage} alt={blog.url_post} />
              <h2>عنوان تستی دوم </h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <h2>نحوه کانفیگ تیلویند</h2>
              <p>
                بدون استفاده از{" "}
                <a href="https://highlightjs.org/">highlight.js</a> میتوان به
                سادگی کدها را داخل محتوای بلاگ ها قرار داد!
              </p>
              <p>
                به عنوان مثال، برای کانفیگ تیلویند باید از فایل{" "}
                <code>tailwind.config.js</code> استفاده کرد:
              </p>
              <pre dir="ltr">{`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
`}</pre>
            </main>
            <div className="sticky top-8 hidden md:flex flex-col items-start justify-start bg-white p-2  pl-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-center  pb-2 mb-2">
                <div className="flex items-center justify-center ">
                  <Image
                    className="cursor-pointer rounded-full object-cover w-16 h-16 hover:scale-105 transition-all duration-500"
                    width={60}
                    height={60}
                    src={"/images/user.jpg"}
                    alt={blog.author.name}
                  />
                </div>
                <div className="flex flex-col items-start justify-start flex-1 mr-4">
                  <p className="text-slate-700 font-bold text-[1rem] whitespace-nowrap">
                    {blog.author.name}
                  </p>{" "}
                  <p className="text-slate-500 font-normal text-xs my-2">
                    {blog.author.biography}
                  </p>
                  <p className="text-slate-700 font-bold text-xs ">
                    زمان خواندن {blog.readingTime.toLocaleString("fa")} دقیقه
                  </p>
                </div>
              </div>
              <PostInteraction blog={blog} />
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start">
            <div className="flex items-center flex-wrap justify-start gap-4">
              {blog.tags.map((category) => {
                return (
                  <Link
                    key={category._id}
                    href={`/blogs/${category.englishTitle}`}
                    className="px-3 py-1 rounded-full text-slate-500 hover:text-white cursor-pointer text-sm font-bold bg-white hover:bg-blue-500  shadow-sm border border-slate-500 hover:border-blue-500 "
                  >
                    {" "}
                    {category.englishTitle}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center  flex-wrap justify-between w-full mt-8 gap-y-4 ">
              <PostInteraction blog={blog} className="gap-x-5" postSlug />

              <div className="flex items-center justify-start gap-x-7 flex-wrap">
                <div className="flex items-center justify-start gap-x-4 ">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DUMAIN_URL}/posts/${blog.hashId}/${blog.url_post}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedin className="w-7 h-7 text-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer" />
                  </a>
                  <a
                    href={`https://telegram.me/share/url?text=${blog.title}&url=${process.env.NEXT_PUBLIC_DUMAIN_URL}/posts/${blog.hashId}/${blog.url_post}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaTelegram className="w-7 h-7 text-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer" />
                  </a>
                  <a
                    href={`https://twitter.com/share?url=${process.env.NEXT_PUBLIC_DUMAIN_URL}/posts/${blog.hashId}/${blog.url_post}&text=${blog.title}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaTwitter className="w-7 h-7 text-blue-500 hover:scale-105 transition-all duration-300 cursor-pointer" />
                  </a>
                </div>
                <CopyToClipboard
                  text={`${process.env.NEXT_PUBLIC_DUMAIN_URL}/posts/${blog.hashId}/${blog.url_post}`}
                  onCopy={() => copyLinkHandler()}
                >
                  <div className="relative">
                    <div className="hover:scale-105 transition-all duration-300 cursor-pointer flex items-center whitespace-nowrap gap-2 text-slate-500 text-xs font-medium px-2 py-2 border rounded-2xl border-slate-300 shadow-sm ">
                      <p className="whitespace-nowrap">کپی لینک</p>
                      <DocumentDuplicateIcon className="w-6 h-6 " />
                    </div>
                    {copied ? (
                      <span className="px-2 -translate-x-5 translate-y-1 absolute text-xs font-medium whitespace-nowrap p-1 bg-blue-500 text-white rounded-2xl">
                        کپی شد
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </main>
        <section className="flex flex-col items-start justify-start pt-4 lg:pt-6 gap-y-8 border-b border-slate-400  pb-6">
          <h2 className="text-slate-700 font-extrabold text-xl lg:text-2xl">
            پست های مشابه
          </h2>
          {blog.related.length ? (
            <PostList blogsData={blog.related} />
          ) : (
            <h3 className="text-slate-500  font-bold text-lg lg:text-xl">
              پست مشابه ای برای این بلاگ پیدا نشد!
            </h3>
          )}
        </section>
        <PostComments post={blog}/>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  try {
    const { data: result } = await axios.get(
      `http://localhost:5000/api/posts/${context.query.hashId}/${context.query.postSlug}`
    );
    const { data } = result;

    return {
      props: {
        blog: data,
      },
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blog: null,
      },
    };
  }
}
