import React from "react";
import "./HomeSection1.css";

const HomeSection1 = () => {
  return (
    <div className="section-1 flex-grow mt-[-30vh]">
      <h2 className="absolute text-6xl font-ligth text-left pl-[10vw] z-10">
        Welcome to{" "}
        <br></br>
        <span className="ml-20" style={{ fontFamily: "Ribeye Marrow" }}>Serendipity</span>
      </h2>
      {/* <p className="text-lg text-gray">
        Discover a world of books at your fingertips. Explore our vast
        collection and find your next favorite read.
      </p> */}

      <div className="flex flex-row mt-[0] text-gray">
        <div className="w-[100%] pt-[10%] mt-[15%] ">
          <p className="text-center text-3xl mx-[20%]">
            A house to millions of digital and non-digital books from around the
            world
          </p>

          <div className="mt-8 px-[20%]">

            <div className="relative my-5 rounded-md shadow-sm flex items-center mb-10">
              <input
                type="text"
                name="title"
                id="title"
                className="h-15 w-[40vw] border-b-2 rounded-2xl bg-[#5c5c5c34] border-gray-300 text-black placeholder-transparent focus:outline-none focus:border-gray-500"
                placeholder="Write Title Here"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div className="btn btn-primary">Search</div>
              </div>
            </div>

            <div className="relative mb-6">
              <label
                htmlFor="author"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all"
              >
                The Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="The Author"
                className="block w-full border-0 border-b-2 border-gray-300 bg-transparent py-1 px-0 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-dotted placeholder-transparent"
              />
            </div>

            <div className="relative mb-6">
              <label
                htmlFor="year"
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all"
              >
                Year
              </label>
              <input
                type="number"
                id="year"
                name="year"
                placeholder="Year"
                className="block w-full border-0 border-b-2 border-gray-300 bg-transparent py-1 px-0 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-dotted placeholder-transparent"
              />
            </div>
          </div>
        </div>
        <div className="section1-image w-[100%] h-[90vh]"></div>
      </div>
    </div>
  );
};

export default HomeSection1;
