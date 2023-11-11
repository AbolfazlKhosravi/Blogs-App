import { useAuth, useAuthAction } from "@context/authContext";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { user, loading } = useAuth();
  const dispatch = useAuthAction();
  return (
    <header
      className={`2xl:container mx-auto sticky top-0 opacity-100 z-50  w-full  p-4 min-[550px]:py-6 bg-slate-100 shadow-sm rounded-b-lg `}
    >
      <div
        className={`flex flex-row  justify-between items-center w-full transition-all duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-start gap-x-4 lg:gap-x-10">
          <Link
            className="text-slate-700 font-medium md:text-lg lg:text-lg"
            href="/"
          >
            خانه
          </Link>
          <Link
            className="text-slate-700 font-medium md:text-lg lg:text-lg"
            href="/blogs"
          >
            بلاگ ها
          </Link>
        </div>
        <div className="flex items-center justify-start gap-x-4 lg:gap-x-10">
          {user ? (
            <>
              <Link
                className="text-slate-700 font-medium md:text-lg lg:text-lg"
                href="#"
              >
                پروفایل :{" "}
                <span className="text-xs text-slate-600">{user.name}</span>
              </Link>
              <button
                onClick={() => {
                  dispatch({ type: "SIGNOUT" });
                }}
                className="bg-red-500 text-white font-medium rounded-lg px-2 py-1"
              >
                خروج
              </button>
            </>
          ) : (
            <>
              <Link
                className="text-slate-700 font-medium md:text-lg lg:text-lg"
                href="/login"
              >
                ورود
              </Link>
              <Link
                className="text-slate-700 font-medium md:text-lg lg:text-lg"
                href="/signUp"
              >
                ثبت نام
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
