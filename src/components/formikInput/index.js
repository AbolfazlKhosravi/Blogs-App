import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input = ({ formik, name, type, placeholder = "", icon ,show,setShow}) => {
  return (
    <div className="my-3 w-full relative ">
      {formik.errors[name] && formik.touched[name] && (
        <span className="absolute top-0 left-3 -translate-y-1/2 text-red-500 text-sm">
          {formik.errors[name]}
        </span>
      )}
      <input
        type={type || "text"}
        className="text-slate-600 rounded-xl px-3 border-b focus:border-blue-500 border-slate-300 outline-none pr-12  dark:text-slate-400 bg-[#F2F0F0] dark:bg-slate-900 shadow-sm py-4 w-full"
        placeholder={placeholder}
        name={name}
        {...formik.getFieldProps(name)}
      />
      <span className="absolute top-1/2 right-3 -translate-y-1/2">{icon}</span>
      { name==="password" || name==="confirmPassword" ? show ? (
        <FiEye
          onClick={() => setShow(false)}
          className="text-slate-500 absolute top-1/2 left-3 -translate-y-1/2  text-[1rem] cursor-pointer"
        />
      ) : (
        <FiEyeOff
          onClick={() => setShow(true)}
          className="text-slate-500 absolute top-1/2 left-3 -translate-y-1/2  text-[1rem] cursor-pointer"
        />
      ):""}
    </div>
  );
};

export default Input;
