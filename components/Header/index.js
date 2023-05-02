import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>
          {pathname === "/add"
            ? "add new job"
            : pathname === "/jobs/[id]"
            ? "job details"
            : "job market"}
        </title>
        <meta
          key="title"
          content={
            pathname === "/add"
              ? "add new job"
              : pathname === "/jobs"
              ? "job details"
              : "job market"
          }
        ></meta>
      </Head>

      <StyledHeader>
        <StyledHeadline>
          <img src="/assets/icons/logo-icon.png" alt="job-market-icon" />
          Job Market
        </StyledHeadline>
        {pathname === "/" ? (
          <Link href="/add">
            <img src="/assets/icons/add-icon.png" alt="add-icon" />
          </Link>
        ) : pathname === "/add" ? (
          <Link href="/">
            <img src="/assets/icons/return-icon.png" alt="return-icon" />
          </Link>
        ) : (
          <Link href="/">
            <img src="/assets/icons/return-icon.png" alt="return-icon" />
          </Link>
        )}
      </StyledHeader>
    </>
  );
}

const StyledHeadline = styled.h3`
  color: var(--secondary-color);
  margin: 0;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 1em;
`;

// const StyledLink = styled(Link)`
//   position: absolute;
//   right: 25%;
//   top: 10%;
// `;
