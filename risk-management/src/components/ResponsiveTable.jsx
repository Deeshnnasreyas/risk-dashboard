import React from "react";
const ResponsiveTable = React.memo(({ TableData }) => {
  return (
    <>
      {/* Card layout for small devices */}
      <div className="block md:hidden space-y-4">
        {TableData?.length > 0 ? (
          TableData.map((item, index) => {
            let statusColor = "";
            switch (item.status) {
              case "New":
                statusColor = "bg-[#7A54D1]";
                break;
              case "Under Mitigation":
                statusColor = "bg-[#137DB7]";
                break;
              case "Closed":
                statusColor = "bg-[#648696]";
                break;
              default:
                statusColor = "bg-[#B56842]";
            }

            return (
              <div
                key={index}
                className="bg-white p-4 rounded shadow-sm border border-gray-200"
              >
                <div className="mb-2 text-sm font-semibold">
                  Record No:{" "}
                  <span className="font-normal">{item.recordNo}</span>
                </div>
                <div className="mb-2 text-sm font-semibold">
                  Description:{" "}
                  <span className="font-normal">{item.description}</span>
                </div>
                <div className="mb-2 text-sm font-semibold">
                  Status:{" "}
                  <span
                    className={`inline-block px-2 py-[2px] rounded-[16px] text-white text-[12px] font-medium ${statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="mb-2 text-sm font-semibold">
                  Type:{" "}
                  <span className="flex items-center gap-2 font-normal">
                    <span
                      className={`w-[8px] h-[8px] rounded-full ${
                        item.type === "Threat"
                          ? "bg-[#D55008]/20"
                          : "bg-[#058F4F]"
                      }`}
                    ></span>
                    {item.type}
                  </span>
                </div>
                <div className="mb-1 text-sm font-semibold">
                  Phase: <span className="font-normal">{item.phase}</span>
                </div>
                <div className="mb-1 text-sm font-semibold">
                  Department:{" "}
                  <span className="font-normal">{item.department}</span>
                </div>
                <div className="mb-1 text-sm font-semibold">
                  Impact: <span className="font-normal">{item.impact}</span>
                </div>
                <div className="mb-1 text-sm font-semibold">
                  Likelihood:{" "}
                  <span className="font-normal">{item.likelihood}</span>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No TableData available.</p>
        )}
      </div>
    </>
  );
});

export default ResponsiveTable;
