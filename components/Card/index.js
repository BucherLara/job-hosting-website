import styled from "styled-components";
const data = [
  {
    id: 1,
    title: "chef",
    company: "cooking Academy",
    location: "Barcelona",
    description: "super duper and very well paid job",
    date: "01.01.2000",
  },

  {
    id: 2,
    title: "postman",
    company: "postman Academy",
    location: "Leibzig",
    description: "letters and postcards",
    date: "14.05.2010",
  },
  {
    id: 3,
    title: "driver",
    company: "uber",
    location: "London",
    description: "you need good navigation",
    date: "10.10.2015",
  },
  {
    id: 4,
    title: "teacher",
    company: "school",
    location: "Hamburg",
    description: "you need to love kids and teach them",
    date: "01.07.2020",
  },
];
export default function Card() {
  return (
    <Container>
      <StyledP>All job listings</StyledP>
      {data.map((card) => (
        <StyledSection key={card.id}>
          <Title>{card.title}</Title>
          <p>{card.company}</p>
          <p>{card.location}</p>
          <Date>{card.date}</Date>
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
