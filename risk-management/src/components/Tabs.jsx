import React from "react";

const Tabs = React.memo(({ tabs, activeTab, onTabClick }) => (
  <div className="border-b border-[#E7E7E7]">
    <div className=" scrollbar-hide">
      <div className="flex gap-[20px] max-w-[382px] px-2 sm:px-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => onTabClick(tab.label)}
            className={`relative flex items-center pb-[14px] gap-[6px] whitespace-nowrap transition-colors
              ${activeTab === tab.label ? "text-[#E87402]" : "text-[#5D5C5C]"}`}
          >
            <span
              className={`font-inter font-normal text-[14px] leading-[115%] tracking-[0%] ${
                activeTab === tab.label ? "text-[#E87402]" : "text-[#5D5C5C]"
              }`}
            >
              {tab.label}
            </span>
            <span
              className={`hidden lg:flex w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center
                ${
                  activeTab === tab.label
                    ? "bg-[#E87402] text-white"
                    : "bg-gray-200 text-[#5D5C5C]"
                }`}
            >
              {tab.count}
            </span>

            {activeTab === tab.label && (
              <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#E87402] rounded-sm"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  </div>
));

export default Tabs;
