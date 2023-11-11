import Layout from "@containers/layout";
import { useAuth } from "@context/authContext";
import Link from "next/link";

const HomePage = () => {
  const user=useAuth()
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-slate-600 font-bold text-2xl py-4">Home Page</h1>
        <Link className="text-blue-500 text-lg font-medium" href="/blogs">رفتن به بلاگ ها </Link>
      </main>
    </Layout>
  );
};

export default HomePage;
