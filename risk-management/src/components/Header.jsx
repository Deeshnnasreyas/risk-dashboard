import { FaBars, FaUser } from "react-icons/fa";
import { headerMenu } from "../constants";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center bg-headerbg px-4 w-full h-[48px] shadow-md sticky top-0 z-20">
      {/* Sidebar Toggle Button */}
      <FaBars
        className="text-xl text-gray-700 cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      />

      {/* Right Section */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Header Menu Icons */}
        {headerMenu.map((item, index) => (
          <button
            key={index}
            className="w-8 h-8 flex items-center justify-center border border-[#FFFFFF21] cursor-pointer rounded-full hover:bg-[#E87402] transition"
          >
            <img src={item?.icon} alt="icon" className="w-4 h-4" />
          </button>
        ))}

        <div className="relative">
          <select className="appearance-none bg-[#231F1F] text-[#FFFFFF] text-[13px] font-medium font-inter rounded-md border border-[#FFFFFF21] px-3 py-[6px] pr-6 focus:outline-none">
            <option value="">Help</option>
            <option value="option1">Option 1</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Profile user Icon */}
        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white">
          <FaUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
