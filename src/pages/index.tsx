import { type NextPage } from "next";
import Layout from "../components/Layout";
// import { api } from "../utils/api";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen justify-center">
        <div className="flex w-[90vw] flex-col items-center justify-center"></div>
      </div>
    </Layout>
  );
};

export default Home;
