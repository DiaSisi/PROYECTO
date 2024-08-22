import React from "react";
import "./HomeSection3.css";


import { FaRegAddressBook } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const HomeSection3 = () => {
  return (
    <div className="w-[95%] h-[auto] mx-auto">
      <div className="container">

        <div className="secondary font-bold text-left mx-10 border-b-2 border-black p-2 text-xl">
          <p style={{ fontFamily: "ARIAL" }} >SERENDIPITY FEATURED BOOKS</p>
        </div>

      </div>
      {/* <hr className="primary py-2" /> */}

      <div className="container mx-auto grid grid-cols-3 gap-5 p-3 text-gray-600">

        <div className="card-book w-[90%] h-[90%]">
          <div className="flex justify-center items-center w-[40%] h-[100%] p-1 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg ">
            <img src="https://tile.loc.gov/storage-services/service/pnp/ppmsca/86700/86708v.jpg" alt="lmds" />
            {/* <FaRegAddressBook size={100} color="black" /> */}
          </div>
          <div className="max-w-sm space-y-3 w-[60%] h-[auto]">
            <div className="flex justify-start items-center gap-2">
              <span className="text-purple-900 font-bold">4.8</span>
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStarHalfAlt color="purple" />
            </div>
            <p className="text-lg secondary text-left font-bold">
              Keeping Up With Science
            </p>
            <div className="flex flex-col items-start gap-0">
              <p className="text-md font-bold-">Erina Wang</p>
              <p className="text-md font-bold-">2023 | hardcover</p>
            </div>
            <div className="text-xl font-bold text-left secondary">
              $30.00
            </div>
            <div className="flex justify-around items-center my-2">
              <div className="btn btn-primary">Add Cart</div>
            </div>
          </div>
        </div>

        <div className="card-book w-[90%] h-[90%]">
          <div className="flex justify-center items-center w-[40%] h-[100%] p-1 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg ">
            <img src="https://tile.loc.gov/storage-services/service/pnp/ppmsca/86700/86708v.jpg" alt="lmds" />
            {/* <FaRegAddressBook size={100} color="black" /> */}
          </div>
          <div className="max-w-sm space-y-3 w-[60%] h-[auto]">
            <div className="flex justify-start items-center gap-2">
              <span className="text-purple-900 font-bold">4.8</span>
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStarHalfAlt color="purple" />
            </div>
            <p className="text-lg secondary text-left font-bold">
              Keeping Up With Science
            </p>
            <div className="flex flex-col items-start gap-0">
              <p className="text-md font-bold-">Erina Wang</p>
              <p className="text-md font-bold-">2023 | hardcover</p>
            </div>
            <div className="text-xl font-bold text-left secondary">
              $30.00
            </div>
            <div className="flex justify-around items-center my-2">
              <div className="btn btn-primary">Add Cart</div>
            </div>
          </div>
        </div>

        <div className="card-book w-[90%] h-[90%]">
          <div className="flex justify-center items-center w-[40%] h-[100%] p-1 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg ">
            <img src="https://tile.loc.gov/storage-services/service/pnp/ppmsca/86700/86708v.jpg" alt="lmds" />
            {/* <FaRegAddressBook size={100} color="black" /> */}
          </div>
          <div className="max-w-sm space-y-3 w-[60%] h-[auto]">
            <div className="flex justify-start items-center gap-2">
              <span className="text-purple-900 font-bold">4.8</span>
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStarHalfAlt color="purple" />
            </div>
            <p className="text-lg secondary text-left font-bold">
              Keeping Up With Science
            </p>
            <div className="flex flex-col items-start gap-0">
              <p className="text-md font-bold-">Erina Wang</p>
              <p className="text-md font-bold-">2023 | hardcover</p>
            </div>
            <div className="text-xl font-bold text-left secondary">
              $30.00
            </div>
            <div className="flex justify-around items-center my-2">
              <div className="btn btn-primary">Add Cart</div>
            </div>
          </div>
        </div>

        <div className="card-book w-[90%] h-[90%]">
          <div className="flex justify-center items-center w-[40%] h-[100%] p-1 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg ">
            <img src="https://tile.loc.gov/storage-services/service/pnp/ppmsca/86700/86708v.jpg" alt="lmds" />
            {/* <FaRegAddressBook size={100} color="black" /> */}
          </div>
          <div className="max-w-sm space-y-3 w-[60%] h-[auto]">
            <div className="flex justify-start items-center gap-2">
              <span className="text-purple-900 font-bold">4.8</span>
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStarHalfAlt color="purple" />
            </div>
            <p className="text-lg secondary text-left font-bold">
              Keeping Up With Science
            </p>
            <div className="flex flex-col items-start gap-0">
              <p className="text-md font-bold-">Erina Wang</p>
              <p className="text-md font-bold-">2023 | hardcover</p>
            </div>
            <div className="text-xl font-bold text-left secondary">
              $30.00
            </div>
            <div className="flex justify-around items-center my-2">
              <div className="btn btn-primary">Add Cart</div>
            </div>
          </div>
        </div>

        <div className="card-book w-[90%] h-[90%]">
          <div className="flex justify-center items-center w-[40%] h-[100%] p-1 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg ">
            <img src="https://tile.loc.gov/storage-services/service/pnp/ppmsca/86700/86708v.jpg" alt="lmds" />
            {/* <FaRegAddressBook size={100} color="black" /> */}
          </div>
          <div className="max-w-sm space-y-3 w-[60%] h-[auto]">
            <div className="flex justify-start items-center gap-2">
              <span className="text-purple-900 font-bold">4.8</span>
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStarHalfAlt color="purple" />
            </div>
            <p className="text-lg secondary text-left font-bold">
              Keeping Up With Science
            </p>
            <div className="flex flex-col items-start gap-0">
              <p className="text-md font-bold-">Erina Wang</p>
              <p className="text-md font-bold-">2023 | hardcover</p>
            </div>
            <div className="text-xl font-bold text-left secondary">
              $30.00
            </div>
            <div className="flex justify-around items-center my-2">
              <div className="btn btn-primary">Add Cart</div>
            </div>
          </div>
        </div>

        <div className="card-book w-[90%] h-[90%]">
          <div className="flex justify-center items-center w-[40%] h-[100%] p-1 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg ">
            <img src="https://tile.loc.gov/storage-services/service/pnp/ppmsca/86700/86708v.jpg" alt="lmds" />
            {/* <FaRegAddressBook size={100} color="black" /> */}
          </div>
          <div className="max-w-sm space-y-3 w-[60%] h-[auto]">
            <div className="flex justify-start items-center gap-2">
              <span className="text-purple-900 font-bold">4.8</span>
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStar color="purple" />
              <FaStarHalfAlt color="purple" />
            </div>
            <p className="text-lg secondary text-left font-bold">
              Keeping Up With Science
            </p>
            <div className="flex flex-col items-start gap-0">
              <p className="text-md font-bold-">Erina Wang</p>
              <p className="text-md font-bold-">2023 | hardcover</p>
            </div>
            <div className="text-xl font-bold text-left secondary">
              $30.00
            </div>
            <div className="flex justify-around items-center my-2">
              <div className="btn btn-primary">Add Cart</div>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default HomeSection3;
