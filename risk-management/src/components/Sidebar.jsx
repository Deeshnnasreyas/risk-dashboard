import NavItem from "./NavItem";
import Dot from "../../public/icon/Dot";
import { sidebarMenu } from "../constants";
const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`fixed lg:relative top-0 left-0 h-full z-40 transform ${
        isSidebarOpen ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
      } transition-transform duration-300 ease-in-out ${
        isSidebarOpen
          ? "w-64 bg-headerbg text-[]"
          : "lg:w-[52px] bg-siderbarbg text-[#FFFFFF]"
      }`}
    >
      <div className="h-[48px] bg-[#231F1F] w-[52px] flex justify-between lg:justify-center items-center">
        <button
          className="cursor-pointer "
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <Dot isSidebarOpen={isSidebarOpen} />
        </button>
      </div>
      <nav
        className={`flex flex-col gap-[8px] p-4 text-[#231F1F] h-[90vh] items-center justify-center ${
          isSidebarOpen ? "w-full" : " w-[52px]"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Top Nav Items */}
          <div className="flex flex-col gap-2">
            {sidebarMenu.slice(0, -1).map((item, index) => (
              <NavItem
                key={index}
                icon={<img src={item.icon} alt={item.label} />}
                label={item.label}
                isOpen={isSidebarOpen}
              />
            ))}
          </div>

          {/* Last Nav Item at Bottom */}
          <div className="mt-auto">
            <NavItem
              icon={
                <img
                  src={sidebarMenu[sidebarMenu.length - 1].icon}
                  alt={sidebarMenu[sidebarMenu.length - 1].label}
                />
              }
              label={sidebarMenu[sidebarMenu.length - 1].label}
              isOpen={isSidebarOpen}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
