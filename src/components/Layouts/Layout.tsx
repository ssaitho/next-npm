import { FC, memo, useState } from "react";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";

type Props = {
  children: React.ReactNode;
};

// eslint-disable-next-line react/display-name
const AppFrame: FC<Props> = memo((props) => {
  const { children } = props;
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <div className="flex">
        <SideNav menuOpen={menuOpen} />
        <main className="w-full p-8">{children}</main>
      </div>
    </>
  );
});

export default AppFrame;
