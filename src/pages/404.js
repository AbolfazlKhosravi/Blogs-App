import Layout from "@containers/layout";

const notFound = () => {
  return (
    <Layout>
      <h1 className="text-slate-700 font-extrabold text-xl lg:text-2xl w-full h-full text-center pt-6">
        پستی برای شما یافت نشد
      </h1>
    </Layout>
  );
};

export default notFound;
