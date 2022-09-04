import type { NextPage } from "next";
import Link from "next/link";

const Page4: NextPage = () => {
  return (
    <div>
      <p>ページ4です</p>
      <Link href="page4/chaild">
        <a className="text-blue-500">page4のchaild</a>
      </Link>
    </div>
  );
};

export default Page4;
