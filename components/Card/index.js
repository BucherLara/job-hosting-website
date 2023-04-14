import styled from "styled-components";
import Link from "next/link";

export default function Card({ data }) {
  return (
    <Container>
      <StyledP>All job listings</StyledP>
      {data.map((job) => (
        <StyledSection key={job.id}>
          <StyledLink href="/jobs/[id].js">
            <Title>{job.title}</Title>
            <p>{job.company}</p>
            <p>{job.location}</p>
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
`;

const StyledSection = styled.section`
  border: 1px solid black;
  text-align: center;
  margin: 2em;
  padding: 0.5em;
  border-radius: 30px;
  width: 30%;
`;

const StyledP = styled.p`
  text-align: center;
`;

const Date = styled.p`
  margin-top: 2em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
