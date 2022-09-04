import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type Navigation = {
  pageName: string;
  path: string;
};

export interface Props {
  menuOpen: boolean;
  icon: React.ReactNode;
  title: string;
  navigations: Navigation[];
}

const SideNavItem: React.FC<Props> = ({
  menuOpen,
  icon,
  title,
  navigations,
}) => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-gray-800 text-white">
      <div
        onClick={() => setIsActive(!isActive)}
        className={
          isActive
            ? "flex items-center p-4 bg-white text-black text-bold cursor-pointer border-b border-gray-600"
            : "flex items-center p-4 bg-black text-white text-bold cursor-pointer border-b border-gray-600"
        }
      >
        {icon}
        {title}
      </div>
      {isActive && (
        <ul>
          {navigations.map((navigation) => (
            <li key={navigation.pageName}>
              <Link href={navigation.path}>
                <a>
                  {menuOpen && (
                    <p
                      style={{
                        background: router.route.match(navigation.path)
                          ? "#1B555A"
                          : "none",
                      }}
                      className="text-white"
                    >
                      {navigation.pageName}
                    </p>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SideNavItem;
