import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = Array.from(
    { length: Math.min(10, totalPages) },
    (_, i) => i + 1
  );
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-4 px-4">
      {/* Left: Showing info */}
      <div className="text-sm text-[#231F1F] font-inter mb-2 sm:mb-0">
        Showing {(currentPage - 1) * 15 + 1} to{" "}
        {Math.min(currentPage * 15, 188)} of 188 items
      </div>

      {/* Right: Page buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1 text-sm text-gray-700 disabled:text-gray-400"
        >
          <FaChevronLeft />
        </button>
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 text-sm rounded ${
              page === currentPage
                ? "bg-[#E87402] text-white"
                : "text-gray-800 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1 text-sm text-gray-700 disabled:text-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Pagination);
