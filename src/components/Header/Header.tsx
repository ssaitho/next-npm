import React from "react";

export interface Props {
  toggleMenu: () => void;
}

const Header: React.FC<Props> = ({ toggleMenu }) => {
  return (
    <div className="flex bg-gray-800 text-white p-4">
      <div
        className="text-white mr-2 border px-2 py-1"
        role="button"
        onClick={() => toggleMenu()}
      >
        開閉
      </div>
      <h1>PRODUCT</h1>
    </div>
  );
};
export default Header;
