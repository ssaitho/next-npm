import type { NextPage } from "next";
import Link from "next/link";

const Page3: NextPage = () => {
  return (
    <div>
      <p>ページ3です</p>
      <Link href="page2/chaild">
        <a className="text-blue-500">page3のchaild</a>
      </Link>
    </div>
  );
};

export default Page3;
