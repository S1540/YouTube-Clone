import logo from "../assets/YouTube-logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { HiMiniMicrophone } from "react-icons/hi2";
import { BsPlus } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Header() {
  return (
    <>
      <header className="max-w-full h-15 bg-neutral-900/40 backdrop-blur-md flex justify-between items-center">
        <div
          className="max-w-57 w-full flex
         items-center justify-around "
        >
          <AiOutlineBars
            size={30}
            color="white"
            className="cursor-pointer h-7 w-10 "
          />
          <img src={logo} alt="" className="h-7" />
        </div>

        <div className=" max-w-xl w-full hidden sm:flex items-center gap-5 h-full">
          <div className="w-full flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-3xl w-full bg-zinc-900 border border-zinc-700 border-r-0 text-gray-500 px-2.5 py-1.5 outline-0 "
            />
            <GoSearch
              size={37}
              color="white"
              className=" w-18 h-9.5 border border-l-0 bg-zinc-800 border-zinc-700 rounded-r-3xl p-1.5 cursor-pointer"
            />
          </div>
          <div className="w-11 h-11 rounded-full px-2.5 py-2.5 bg-zinc-800 hidden sm:block cursor-pointer hover:bg-zinc-700 ">
            <HiMiniMicrophone size={24} color="white" />
          </div>
        </div>

        <div className="max-w-74 w-full text-white flex items-center justify-evenly  rounded-3xl py-0.5 px-0.5 cursor-pointer ">
          <GoSearch
            size={24}
            color="white"
            className="sm:hidden w-18 h-9.5 px-2 py-1.5"
          />
          <HiMiniMicrophone
            size={24}
            color="white"
            className="sm:hidden w-15 h-9.5 py-2 hover:bg-zinc-700 rounded-3xl "
          />
          <div className="max-w-28 w-full text-white flex items-center justify-items-center-safe  bg-zinc-800 rounded-3xl py-0.5 px-0.5 cursor-pointer">
            <BsPlus size={35} color="white" />
            <p className="px-0.5">Create</p>
          </div>

          <div className="w-36  flex items-center justify-evenly">
            <IoIosNotificationsOutline size={26} color="white" />
            <CgProfile size={24} color="white" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
