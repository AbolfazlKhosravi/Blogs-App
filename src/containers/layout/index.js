import { useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import { animateScroll as scroll } from 'react-scroll';
const Layout = ({ children }) => {
  useEffect(()=>{
    scroll.scrollToTop()
  },[])
  return (
    <main className=" min-h-screen flex flex-col items-center justify-start bg-slate-100">
      <Header />
      <div className="flex-1  2xl:container mx-auto  w-full ">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
