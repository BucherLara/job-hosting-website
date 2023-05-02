import styled from "styled-components";
import Link from "next/link";

export default function Card({ data }) {
  return (
    <Container>
      <StyledP>Job-Feed</StyledP>
      {data.documents.map((job) => (
        <StyledSection key={job.$id}>
          <StyledLink href={`/jobs/${job.$id}`}>
            <Title>{job.title}</Title>
            <p>{job.company}</p>
            <StyledLocation>{job.location}</StyledLocation>
            <Date>{job.date}</Date>
          </StyledLink>
        </StyledSection>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  font-weight: bold;
  color: var(--secondary-color);
`;

const StyledSection = styled.section`
  border: 1px solid black;
  text-align: center;
  margin: 2em;
  padding: 0.5em;
  border-radius: 30px;
  width: 60%;
`;

const StyledP = styled.p`
  text-align: center;
  font-weight: bold;
`;

const Date = styled.p`
  margin-top: 2em;
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledLocation = styled.p`
  margin-top: -2.5%;
`;
