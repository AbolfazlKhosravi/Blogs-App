import axios from "axios";
import Router from "next/router";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
const AuthContext = createContext();
const AuthContextDispather = createContext();
import { useReducerAsync } from "use-reducer-async";

const initialState = { user: null, loading: true, error: false };
const reducer = (state, action) => {
  switch (action.type) {
    case "PENDING":
      return { loading: true, user: null, error: false };
    case "SUCCESS":
      return { loading: false, user: action.payload, error: false };
    case "REJECTED":
      return { loading: false, user: null, error: action.error };
    default:
      return { ...state };
  }
};
const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "PENDING" });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("ورود با موفقیت انجام شد");
          dispatch({ type: "SUCCESS", payload: res.data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "REJECTED",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },
  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "PENDING" });
      axios
        .post("http://localhost:5000/api/user/signup", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(" خوش امدید ");
          dispatch({ type: "SUCCESS", payload: res.data });
          Router.push("/");
        })
        .catch((err) => {
          dispatch({
            type: "REJECTED",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message);
        });
    },
  LOAD_USER:
    ({ dispatch }) =>
    (action) => {
      dispatch({ type: "PENDING" });
      axios
        .get("http://localhost:5000/api/user/load", {
          withCredentials: true,
        })
        .then((res) => {
          dispatch({ type: "SUCCESS", payload: res.data });
        })
        .catch((err) => {
          dispatch({
            type: "REJECTED",
            error: err?.response?.data?.message,
          });
        });
    },
  SIGNOUT:
    ({ dispatch }) =>
    (action) => {
      axios
        .get("http://localhost:5000/api/user/logout", {
          withCredentials: true,
        })
        .then((res) => {
          window.location.href = "/";
        })
        .catch();
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );
  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);
  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispather.Provider value={dispatch}>
        {children}
      </AuthContextDispather.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispather);
