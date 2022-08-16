import { useState } from "react";

const SideNavItem: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="bg-gray-800 text-white">
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex justify-between items-center p-4 bg-black text-white text-bold cursor-pointer border-b border-gray-600"
      >
        <div>section01</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="p-3">hogehoge</div>}
    </div>
  );
};
export default SideNavItem;
