import Layout from "@containers/layout";
import axios from "axios";

const Blog = ({blog}) => {
  return (
    <Layout>
        {blog.title}
      <div>this is bloge</div>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps(context) {
  console.log(context.query);
  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts/${context.query.blogSlug}`
  );
  const { data } = result;
  return {
    props: {
      blog: data,
    },
  };
}
