import type { NextPage } from "next";
import Link from "next/link";

const Page2: NextPage = () => {
  return (
    <div>
      <p>ページ2です</p>
      <Link href="page2/chaild">
        <a className="text-blue-500">page2のchaild</a>
      </Link>
    </div>
  );
};

export default Page2;
