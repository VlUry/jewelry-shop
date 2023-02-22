import { type NextPage } from "next";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
// import { api } from "../utils/api";
import { motion } from "framer-motion";
import MoonImg from "../../public/MoonImg.png";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen justify-center px-3">
        <div className="flex w-full flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-200%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-10"
          >
            <Logo />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: "-10%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-3xl text-amber-100 md:text-6xl"
            >
              Aell - Handmade jewelry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: "-20%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="text-lg md:text-2xl"
            >
              456
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen justify-center">
        <div className="relative flex w-full items-center justify-center gap-3 md:justify-center md:gap-5">
          <div
            className="flex h-full w-full items-center justify-center bg-cover bg-right md:w-3/5 lg:bg-contain lg:bg-center lg:bg-no-repeat"
            style={{ backgroundImage: `url(${MoonImg.src})` }}
          >
            <div className="h-96 w-56 rounded-xl bg-black/50 backdrop-blur md:h-[30rem] md:w-80"></div>
          </div>
          <div className="hidden h-full w-2/5 items-center justify-center md:flex">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: "10%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 1 }}
                className="text-4xl text-amber-100"
              >
                Privet kak dela
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: "-20%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true, amount: 1 }}
                className="text-left text-xl"
              >
                456
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
