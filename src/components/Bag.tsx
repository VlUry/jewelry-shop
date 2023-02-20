import { type FC } from "react";

const Bag: FC = () => {
  return (
    <>
      <div className="absolute right-[15%] top-12 z-50 mr-10 h-96 w-96 rounded-b-xl bg-neutral-900/75 p-2 backdrop-blur">
        <div className="scrollbar-hide h-[90%] w-full">
          <div className="mb-1 flex h-16 w-full rounded-xl font-medium transition hover:bg-gray-100/50">
            <div className="h-16 w-16 rounded-xl bg-gray-100"></div>
            <div className="ml-3">
              <p>Necklace</p>
              <div className="flex">
                <p className="text-md text-gray-400">$599</p>
                <div className="text-md ml-2 flex w-20 ">
                  <button className="w-1/3 rounded-l-xl bg-gray-300 transition hover:bg-emerald-200 hover:text-emerald-600">
                    +
                  </button>
                  <p className="w-1/3 bg-gray-100 px-2 text-center">1</p>
                  <button className="w-1/3 rounded-r-xl bg-gray-300 transition hover:bg-fuchsia-200 hover:text-fuchsia-600">
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-2 w-full overflow-hidden rounded-xl bg-gray-300 text-center font-semibold text-gray-700 transition ">
          ORDER
          <span className="font-medium text-gray-500"> - $599</span>
        </button>
      </div>
    </>
  );
};

export default Bag;
