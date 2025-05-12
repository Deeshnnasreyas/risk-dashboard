const NavItem = ({ icon, label, isOpen }) => (
  <button
    className={`flex items-center rounded-[8px]  h-[36px] lg:mx-auto md:mx-auto  text-[#323232] text-center 
  hover:bg-[#E87402] transition ${
    isOpen ? "ml-[20px] w-full justify-left p-4 bg-gray-800 space-x-2" : "w-[36px] justify-center"
  }`}
  >
    <span
      className={`text-lg items-center text-[#FFFFFF] ${
        isOpen && "text-white"
      }`}
    >
      {icon}
    </span>
    {isOpen && <span className="text-sm text-[#FFFFFF] ">{label}</span>}
  </button>
);

export default NavItem;
