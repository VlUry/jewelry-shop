import Head from "next/head";
import { type FC, type ReactNode } from "react";
import Header from "./Header";

const Layout: FC<{
  children: ReactNode;
  title?: string;
  metaContent?: string;
}> = ({
  children,
  title = "Aell",
  metaContent = '"Aell - handmade jewelry"',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-neutral-800 text-stone-400">
        <Header />
        <main>{children}</main>
        <footer className="w-full">Footer</footer>
      </div>
    </>
  );
};

export default Layout;
