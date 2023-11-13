import http from "@services/httpService";
import { PENDING_USER, REJECTED_USER, SUCCESS_USER } from "./userType";
import toast from "react-hot-toast";
import Router from "next/router";

function fetchUser() {
  return {
    type: PENDING_USER,
  };
}
function successUser(user) {
  return {
    type: SUCCESS_USER,
    payload: user,
  };
}
function rejectedUser(error) {
  return {
    type: REJECTED_USER,
    error,
  };
}

export const asyncSignInUser = (action) => (dispatch) => {
  dispatch(fetchUser());
  http
    .post("/user/signin", action.payload)
    .then((res) => {
      toast.success("ورود با موفقیت انجام شد");
      dispatch(successUser(res.data));
      Router.push("/");
    })
    .catch((err) => {
      const errorHandler =
        err.response && err?.response?.data?.message
          ? err?.response?.data?.message
          : err.message;
      dispatch(rejectedUser(errorHandler));
      toast.error(errorHandler);
    });
};
export const asyncSignUpUser = (action) => (dispatch) => {
  dispatch(fetchUser());
  http
    .post("/user/signup", action.payload)
    .then((res) => {
      toast.success(" خوش امدید");
      dispatch(successUser(res.data));
      Router.push("/");
    })
    .catch((err) => {
      const errorHandler =
        err.response && err?.response?.data?.message
          ? err?.response?.data?.message
          : err.message;
      dispatch(rejectedUser(errorHandler));
      toast.error(errorHandler);
    });
};
export const asyncLogoutUser = () => (dispatch) => {
  dispatch({ type: "LogoutUser" });
  http
    .get("/user/logout")
    .then(() => {
      toast.success("از حساب کاربری خارج شدین");
      window.location.href = "/";
    })
    .catch();
};
export const asyncLoadUser = (store) => {
  http
    .get("/user/load")
    .then((res) => {
      store.dispatch(successUser(res.data));
    })
    .catch((err) => {});
};
