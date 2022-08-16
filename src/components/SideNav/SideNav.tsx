import { useState } from "react";
import SideNavItem from "./SideNavItem";

const SideNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div
      className="w-64 h-screen bg-black"
      style={{ width: menuOpen ? "200px" : "60px" }}
    >
      <div className="bg-gray-800 text-white">
        <div className="p-4 bg-black text-white text-bold border-b border-gray-600">
          <div onClick={() => setMenuOpen(!menuOpen)}>開閉</div>
        </div>
      </div>
      <SideNavItem />
      <SideNavItem />
      <SideNavItem />
    </div>
  );
};
export default SideNav;
