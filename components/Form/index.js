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
      <form onSubmit={handleSubmit}>
        <h2>Job Title</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          pattern=".*[\S]+.*"
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          required
          pattern=".*[\S]+.*"
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          required
          pattern=".*[\S]+.*"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          required
          pattern=".*[\S]+.*"
        />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" required />
        <button type="submit">Add job </button>
      </form>
    </>
  );
}
