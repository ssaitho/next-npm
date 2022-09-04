import React from "react";
import SideNavItem from "./SideNavItem";
import { HomeIcon } from "../Icons/HomeIcon";

export interface Props {
  menuOpen: boolean;
}

const section01 = [
  {
    pageName: "ページ1",
    path: "/page1",
  },
  {
    pageName: "ページ2",
    path: "/page2",
  },
];

const section02 = [
  {
    pageName: "ページ3",
    path: "/page3",
  },
  {
    pageName: "ページ4",
    path: "/page4",
  },
];

const SideNav: React.FC<Props> = ({ menuOpen }) => {
  return (
    <aside
      className="w-64 h-screen bg-black"
      style={{ width: menuOpen ? "200px" : "60px" }}
    >
      <nav>
        <ul>
          <li>
            <SideNavItem
              menuOpen={menuOpen}
              icon={<HomeIcon className="mr-2 fill-current w-4" />}
              title="section01"
              navigations={section01}
            />
          </li>
          <li>
            <SideNavItem
              menuOpen={menuOpen}
              icon={<HomeIcon className="mr-2 fill-current w-4" />}
              title="section02"
              navigations={section02}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default SideNav;
