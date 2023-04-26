import { Client, Databases } from "appwrite";
import Link from "next/link";
import styled from "styled-components";

export default function JobDetails({ data2 }) {
  return (
    <section>
      <p>{data2.title}</p>
      <p>{data2.company}</p>
      <p>{data2.location}</p>
      <p>{data2.date}</p>
      <p>Job Description</p>
      <article>{data2.description}</article>
      <StyledLink href="https://blog.logrocket.com/" target="_blank">
        Apply now
      </StyledLink>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const client = new Client();
    client
      .setEndpoint("http://localhost/v1")
      .setProject("644001fed8bd54112f7b");

    const databases = new Databases(client);
    const promise = databases.getDocument("jobs", "job-collection", id);

    return {
      props: { data2: await promise },
    };
  } catch (error) {
    console.log(error);

    return {
      props: { data2: null },
    };
  }
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px solid black;
  padding: 0.5em;
`;
