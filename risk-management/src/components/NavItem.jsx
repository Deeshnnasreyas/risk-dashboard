const NavItem = ({ icon, label, isOpen }) => (
  <button
    className="flex items-center rounded-[8px] w-[36px] h-[36px] text-[#323232] text-center 
  hover:bg-[#E87402] transition"
  >
    <span className="text-lg items-center">{icon}</span>
    {isOpen && <span className="text-sm text-[#FFFFFF]">{label}</span>}
  </button>
);

export default NavItem;
