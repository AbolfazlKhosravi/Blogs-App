// import "loginform.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaLock, FaPhoneSquare, FaArrowLeft, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "@components/formikInput";
import axios from "axios";
import { useRouter } from "next/router";
import { useAuth, useAuthAction } from "@context/authContext";

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .min(6, " نام ونام خانوادگی کوتاه هست ")
    .required("نام ونام خانوادگی را وارد کنید "),
  phoneNumber: Yup.string()
    .required("شماره تلفن را وارد کنید")
    .min(11, " شماره تلفن درست نیست")
    .max(11, " شماره تلفن درست نیست"),
  email: Yup.string()
    .required("ایمیل   وارد کنید")
    .email("ایمیل نام معتبر است   "),
  password: Yup.string()
    .required("پسورد خود را وارد کنید")
    .min(8, " پسورد کوتاه هست "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password", "")], "رمز عبور هم خوانی ندارد")
    .required("رمز عبور را وارد کنید"),
});

const SignUp = () => {
  const [show, setShow] = useState(false);
  const dispatch = useAuthAction();
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  const onSubmit = (values) => {
    const { name, phoneNumber, email, password } = values;
    dispatch({
      type: "SIGNUP",
      payload: { name, phoneNumber, email, password },
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <main className="min-h-screen  w-full flex items-center justify-center bg-[#F2F0F0] py-8 px-5 gap-x-8">
      <section className="h-auto w-auto hidden md:flex">
        <img
          className="w-auto h-96 object-cover "
          src="/images/signUp.svg"
          alt="signUpImg"
        />
      </section>
      <section className=" w-full md:w-96 h-full flex flex-col items-start rounded-lg relative ">
        <Link className="w-full flex items-center justify-end" href="/">
          <FaArrowLeft className="cursor-pointer  text-xl text-slate-600  mt-1 " />
        </Link>
        <section className="flex flex-col items-start justify-between w-full mt-3 md:mt-2">
          <h2 className="text-blue-500 font-extrabold text-2xl mt-2 my-2 md:my-2 ">
            {" "}
            ثبت نام{" "}
          </h2>
          <form
            className="flex flex-col items-center justify-between w-full pr-1"
            onSubmit={formik.handleSubmit}
          >
            <Input
              formik={formik}
              name="name"
              placeholder="نام و نام خانوادگی"
              icon={<FaUserAlt className="text-slate-500 text-lg" />}
            />
            <Input
              formik={formik}
              name="phoneNumber"
              placeholder="شماره موبایل"
              icon={<FaPhoneSquare className="text-slate-500 text-xl" />}
            />
            <Input
              formik={formik}
              name="email"
              type="email"
              placeholder="ایمیل"
              icon={<MdEmail className="text-xl text-slate-500" />}
            />
            <Input
              formik={formik}
              name="password"
              type={show ? "text" : "password"}
              show={show}
              setShow={setShow}
              placeholder="رمز عبور"
              icon={<FaLock className="text-slate-500 text-xl" />}
            />
            <Input
              formik={formik}
              name="confirmPassword"
              type={show ? "text" : "password"}
              show={show}
              setShow={setShow}
              placeholder="تکرار رمز عبور "
              icon={<FaLock className="text-slate-500 text-xl" />}
            />
            <button
              type="submit"
              disabled={!formik.isValid}
              className={`${
                formik.isValid ? "cursor-pointer" : "cursor-not-allowed"
              } transition-all duration-500 hover:scale-105 bg-blue-500 text-lg md:text-xl font-extrabold px-4 md:px-6 md:py-2 py-1 text-white rounded-lg mt-4`}
            >
              ثبت نام
            </button>
          </form>
          <Link
            href="/login"
            className="w-full flex items-center justify-start text-[.7rem] mt-5  text-slate-500 "
          >
            <p> ایا حساب باز کردین ؟</p>
            <span className="text-blue-500 mr-1">رفتن</span>
          </Link>
        </section>
      </section>
    </main>
  );
};

export default SignUp;
