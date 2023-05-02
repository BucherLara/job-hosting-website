import styled from "styled-components";
export default function Form({ setObject }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = Object.fromEntries(formData);

    setObject(data);

    event.target.reset();
  }
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledHeadline>Job Title</StyledHeadline>
        <Container>
          <label htmlFor="title">Title</label>
          <StyledInput
            type="text"
            id="title"
            name="title"
            required
            pattern=".*[\S]+.*"
          />
        </Container>
        <Container>
          <label htmlFor="company">Company</label>
          <StyledInput
            type="text"
            id="company"
            name="company"
            required
            pattern=".*[\S]+.*"
          />
        </Container>
        <Container>
          <label htmlFor="location">Location</label>

          <StyledInput
            type="text"
            id="location"
            name="location"
            required
            pattern=".*[\S]+.*"
          />
        </Container>

        <Container>
          <label htmlFor="date">Date</label>

          <StyledInput type="date" id="date" name="date" required />
        </Container>
        <Container>
          <label htmlFor="description">Description</label>
          <StyledDescribtionInput
            type="text"
            id="description"
            name="description"
            required
            pattern=".*[\S]+.*"
          />
        </Container>
        <StyledButton type="submit">Add job </StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeadline = styled.h3`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.1em 0 0.5em 0;
  border-radius: 0.8em;
  border: 1px solid;
`;

const StyledDescribtionInput = styled(StyledInput)`
  padding: 4em;
`;

const StyledButton = styled.button`
  margin-top: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  border-radius: 1em;
  border: none;
  background-color: var(--secondary-color);
  color: var(--third-color);
  font-weight: bold;
  font-size: 1rem;
`;

export { StyledButton };
