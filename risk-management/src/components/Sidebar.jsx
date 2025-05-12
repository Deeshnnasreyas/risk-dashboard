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
      <nav className="flex flex-col gap-[8px] p-4 text-[#231F1F] w-[52px] items-center justify-center">
        {sidebarMenu.map((item, index) => (
          <NavItem
            key={index}
            icon={<img src={item?.icon} alt="Dashboard" className="" />}
            label={item?.label}
            isOpen={isSidebarOpen}
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
