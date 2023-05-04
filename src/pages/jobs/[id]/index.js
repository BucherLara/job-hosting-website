import { Client, Databases } from "appwrite";
import Link from "next/link";
import styled from "styled-components";

export default function JobDetails({ data2 }) {
  return (
    <StyledSection>
      <Title>{data2?.title}</Title>
      <StyledParagraph>{data2?.company}</StyledParagraph>
      <StyledParagraph>{data2?.location}</StyledParagraph>
      <StyledParagraph>{data2?.date}</StyledParagraph>
      <Describtion>Job Description</Describtion>
      <StyledArticle>{data2?.description}</StyledArticle>
      <StyledLink href="https://blog.logrocket.com/" target="_blank">
        Apply now
      </StyledLink>
    </StyledSection>
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
  padding: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  border-radius: 1em;
  border: none;
  background-color: var(--secondary-color);
  color: var(--third-color);
  font-weight: bold;
  font-size: 1rem;
`;

const StyledArticle = styled.article`
  border: 1px solid black;
  margin: 0.5em 0 1.3em 0;
  padding: 0.5em 0.8em 0.5em 0.8em;
  color: var(--primary-color);
  border-radius: 1em;
  line-height: 1.4em;
`;

const StyledSection = styled.section`
  padding: 1em;
`;

const Title = styled.p`
  font-weight: bold;
`;
const StyledParagraph = styled.p`
  margin: 0.3em 0em 0.3em 0em;
`;
const Describtion = styled.p`
  margin-bottom: 0;
  margin-top: 2.5em;
`;
