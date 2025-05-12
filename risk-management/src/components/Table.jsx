import React from "react";
import { tableHeader } from "../constants";
import ResponsiveTable from "./ResponsiveTable";
const Table = React.memo(({ data, onSort, sortConfig }) => {
  return (
    <>
      {/* Table for medium and larger screens */}
      <div className="hidden md:block w-full overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-[900px] w-full text-left border-collapse border-t border-b border-l rounded-tl-[8px] rounded-bl-[8px]">
            <thead className="bg-[#F8F8F8] text-[#5D5C5C] text-[12px] leading-[130%] font-inter font-semibold">
              <tr>
                {tableHeader.map(({ label, key, className }) => (
                  <th
                    key={key}
                    className={`h-[44px] px-4 py-2 border-r border-b cursor-pointer select-none text-left ${className}`}
                    onClick={() => onSort(key)}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span>{label}</span>
                      <div className="flex flex-col text-[10px] leading-[10px]">
                        <span
                          className={
                            sortConfig.key === key &&
                            sortConfig.direction === "asc"
                              ? "text-black"
                              : "text-gray-400"
                          }
                        >
                          ▲
                        </span>
                        <span
                          className={
                            sortConfig.key === key &&
                            sortConfig.direction === "desc"
                              ? "text-black"
                              : "text-gray-400"
                          }
                        >
                          ▼
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-[#ffffff] text-sm font-inter text-[#231F1F]">
              {data?.length > 0 ? (
                data.map((item, index) => {
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
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="w-[110px] h-[40px] px-4 py-2 border-r border-b">
                        <div className="flex items-center gap-[6px]">
                          <span className="font-inter font-normal text-[14px] leading-[130%] tracking-[0%]">
                            {item.recordNo}
                          </span>
                        </div>
                      </td>
                      <td className="w-[311px] h-[40px] px-4 py-2 border-r border-b">
                        <div className="flex items-center gap-[6px] ">
                          <span className="font-inter font-normal text-[14px] leading-[130%] tracking-[0%]">
                            {item.description}
                          </span>{" "}
                        </div>
                      </td>
                      <td
                        className={
                          "w-[170px] h-[40px] px-4 py-2 border-r border-b"
                        }
                      >
                        <div className="flex items-center gap-[6px]">
                          <span
                            className={`inline-block px-2 py-[2px] rounded-[16px] text-white text-[12px] font-medium leading-[130%] text-center ${statusColor}`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </td>
                      <td className="w-[156px] h-[40px] gap-[6px] px-4 py-2 border-r border-b">
                        <span className="flex items-center gap-2">
                          <span
                            className={`w-[8px] h-[8px] rounded-full ${
                              item.type === "Threat"
                                ? "bg-[#D55008]/20"
                                : "bg-[#058F4F]"
                            }`}
                          ></span>
                          <span className="text-sm font-inter text-[#231F1F]">
                            {item.type}
                          </span>
                        </span>
                      </td>
                      <td
                        className={
                          "w-[170px] h-[40px] px-4 py-2 border-r border-b"
                        }
                      >
                        <div className="flex items-center gap-[6px]">
                          {item.phase}
                        </div>
                      </td>
                      <td
                        className={
                          "w-[170px] h-[40px] px-4 py-2 border-r border-b"
                        }
                      >
                        <div className="flex items-center gap-[6px]">
                          {item.department}
                        </div>
                      </td>
                      <td
                        className={
                          "w-[170px] h-[40px] px-4 py-2 border-r border-b"
                        }
                      >
                        <div className="flex items-center gap-[6px]">
                          {item.impact}
                        </div>
                      </td>
                      <td
                        className={
                          "w-[170px] h-[40px] px-4 py-2 border-r border-b"
                        }
                      >
                        <div className="flex items-center gap-[6px]">
                          {item.likelihood}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={8} className="text-center p-4 text-gray-500">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Card layout for small devices */}
      <ResponsiveTable TableData={data} />
    </>
  );
});

export default Table;
