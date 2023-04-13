import { useRouter } from "next/router";
export default function Header() {
  const pathname = useRouter();
  return (
    <>
      <Head>
        <title>{pathname === "/add" ? "add new job" : "job market"}</title>
        <meta
          key="title"
          content={pathname === "/add" ? "add new job" : "job market"}
        ></meta>
      </Head>
      <h3>Job Market</h3>
    </>
  );
}
