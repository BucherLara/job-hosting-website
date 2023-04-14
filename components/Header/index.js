import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{pathname === "/add" ? "add new job" : "job market"}</title>
        <meta
          key="title"
          content={pathname === "/add" ? "add new job" : "job market"}
        ></meta>
      </Head>

      <header>
        <h3>Job Market</h3>
        {pathname === "/" ? (
          <Link href="/add">
            <img src="assets/icons/add-icon.png" alt="add-icon" />
          </Link>
        ) : (
          <Link href="/">
            <img src="assets/icons/return-icon.png" alt="return-icon" />
          </Link>
        )}
      </header>
    </>
  );
}
