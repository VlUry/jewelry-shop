"use client";

import Link from "next/link";
import { useState, type FC } from "react";
import Bag from "./Bag";
import Logo from "./Logo";

const Header: FC = () => {
  const [openBag, setOpenBag] = useState(false);

  const getButtonClasses = () => {
    return openBag ? "bg-neutral-900/50 rounded-b-none" : "";
  };

  return (
    <>
      <header className="fixed top-3 z-50 w-full">
        <nav className="z-5 mx-auto flex h-12 w-[95%] items-center justify-between rounded-full bg-neutral-900/25 p-3 px-10 text-xl text-stone-400 backdrop-blur md:w-[70%]">
          <button className="flex h-12 w-16 items-center justify-center rounded-xl p-2 transition  md:hidden">
            =
          </button>
          <Logo />
          <button className="flex h-12 items-center rounded-xl p-2 transition  md:hidden">
            BAG
          </button>
          <ul className="hidden gap-7 md:flex">
            <Link
              href="/collections"
              className="flex h-12 items-center rounded-xl p-2 transition  hover:bg-stone-600"
            >
              COLLECTIONS
            </Link>
            <Link
              href="/shop"
              className="flex h-12 items-center rounded-xl p-2 transition  hover:bg-stone-600"
            >
              SHOP
            </Link>
            <button
              onClick={() => setOpenBag((prev) => !prev)}
              className={`flex h-12 items-center rounded-xl p-2 transition hover:bg-stone-600 ${getButtonClasses()}`}
            >
              BAG
            </button>
          </ul>
        </nav>
        {openBag && <Bag />}
      </header>
    </>
  );
};

export default Header;
