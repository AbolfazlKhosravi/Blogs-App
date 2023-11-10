import Link from "next/link";

const Header = () => {
  return (
    <header className="2xl:container mx-auto  flex flex-row  justify-between items-center w-full  p-4 min-[550px]:py-6 bg-blue-500 rounded-b-lg">
      <div className="flex items-center justify-start gap-x-4 lg:gap-x-10">
        <Link className="text-white font-medium md:text-lg lg:text-lg" href="/">خانه</Link>
        <Link className="text-white font-medium md:text-lg lg:text-lg" href="/blogs">بلاگ ها</Link>
      </div>
      <div className="flex items-center justify-start gap-x-4 lg:gap-x-10">
        <Link className="text-white font-medium md:text-lg lg:text-lg" href="/signUp">ثبت نام</Link>
        <Link className="text-white font-medium md:text-lg lg:text-lg" href="/login">ورود</Link>
        <Link className="text-white font-medium md:text-lg lg:text-lg" href="#">پروفایل</Link>
      </div>
    </header>
  );
};

export default Header;
