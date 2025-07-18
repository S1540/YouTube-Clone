import logo from "../assets/YouTube-logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { HiMiniMicrophone } from "react-icons/hi2";

function Header() {
  return (
    <>
      <header className="max-w-full h-16 bg-neutral-950/95 backdrop-blur-md flex justify-around items-center">
        <div
          className="max-w-2xs w-full flex
         items-center justify-evenly  h-full"
        >
          <AiOutlineBars size={30} color="white" />
          <img src={logo} alt="" className="h-8" />
        </div>

        <div className=" max-w-xl w-full flex items-center gap-5 h-full">
          <div className="w-full flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="rounded-l-3xl w-full bg-zinc-900 border border-zinc-700 border-r-0 text-gray-500 p-1.5 outline-0"
            />
            <GoSearch
              size={37}
              color="white"
              className=" w-18 h-9.5 border border-l-0 bg-zinc-800 border-zinc-700 rounded-r-3xl p-1.5"
            />
          </div>
          <div className="w-11 h-11 rounded-full px-2.5 py-2.5 bg-zinc-800 ">
            <HiMiniMicrophone size={24} color="white" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
