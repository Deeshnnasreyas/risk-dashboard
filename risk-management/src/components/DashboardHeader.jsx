import { riskPriority } from "../constants";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4">
      {/* Title and Risk List */}
      <div className="flex flex-wrap items-center gap-8">
        {/* title */}
        <h1 className="font-inter font-semibold text-[20px] leading-[130%] tracking-[0%]">
          Enterprise Risk Management
        </h1>

        {/* Risk Priority Items */}
        <div className="flex flex-wrap gap-[34px] items-center bg-transparent lg:bg-[#F8F8F8] p-0 lg:p-4 rounded-[24px] max-w-[581px]">
          {riskPriority.map((item, index) => (
            <div key={index} className="flex items-center gap-x-[3px]">
              <img
                src={item?.icon}
                alt=""
                className="w-5 h-5 border border-[#E87402]"
              />
              <span className="font-inter text-[#231F1F] font-semibold text-[20px] leading-[130%] tracking-[0%]">
                {item?.count}
              </span>
              <h4 className="font-inter font-normal text-[#231F1F] text-[14px] leading-[115%] tracking-[0%]">
                {item?.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1"></div>
    </div>
  );
};

export default DashboardHeader;
