import "@styles/globals.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useStore } from "react-redux";
import { wrapper } from "src/redux/store";
import { asyncLoadUser } from "src/redux/user/userAction";

function MyApp({ Component, pageProps }) {
  const store = useStore();
  useEffect(() => {
    asyncLoadUser(store);
  }, [store]);
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default wrapper.withRedux(MyApp);
