import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <Link href="/now">To Now Page</Link>
      </p>
    </div>
  );
};

export default Home;
