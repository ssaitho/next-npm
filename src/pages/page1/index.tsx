import type { NextPage } from "next";
import Link from "next/link";

const Page1: NextPage = () => {
  return (
    <div>
      <p>ページ1です</p>
      <Link href="page1/chaild">
        <a className="text-blue-500">page1のchaild</a>
      </Link>
    </div>
  );
};

export default Page1;
