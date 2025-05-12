import { FaPlus, FaSearch } from "react-icons/fa";
import { useState } from "react";
import filterIcon from "../assets/filter.svg";
import save from "../assets/save.svg";

const SearchFilterBar = ({ searchQuery, setSearchQuery }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex flex-wrap gap-[8px] mb-[12px] mt-[20px] items-center">
      {/* Search Box */}
      <div className="relative w-[218px] h-[32px]">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <FaSearch className="text-[#858484] w-[12px] h-[12px]" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Find..."
          className="pl-8 pr-4 w-full h-full border border-gray-300 rounded-[8px] placeholder:text-[#858484] placeholder:font-medium placeholder:text-[12px] placeholder:leading-[115%] font-inter focus:outline-none"
        />
      </div>

      {/* Filter Button */}
      <button className="flex items-center justify-center w-[86px] h-[32px] gap-2 border border-[#858484] bg-white rounded-[8px]">
        <img src={filterIcon} alt="filter" className="w-4 h-4" />
        <span className="text-[#231F1F] font-medium text-[12px] leading-[115%] font-inter">
          Filter
        </span>
      </button>

      {/* Save Icon Button */}
      <div className="relative">
        <button
          className="flex items-center justify-center w-[52px] h-[32px] bg-gray-100 text-gray-800 border border-gray-300 rounded-[8px]"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <img src={save} alt="filter" className="w-4 h-4" />
        </button>
        {showDropdown && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-200 shadow-md rounded-md w-32">
            <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              PDF
            </div>
            <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              Word
            </div>
          </div>
        )}
      </div>
      <div className="ml-auto">
        <button className="flex items-center justify-center gap-1 sm:gap-[4px] w-[83px] h-[32px] px-3 py-2 rounded-[8px] bg-[#E87402] text-white text-xs sm:text-sm font-medium">
          <FaPlus className="w-3 h-3 sm:w-[12px] sm:h-[12px]" />
          <span className="hidden sm:inline">Create</span>
        </button>
      </div>
    </div>
  );
};

export default SearchFilterBar;
