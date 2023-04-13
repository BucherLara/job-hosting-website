import { useRouter } from "next/router";
export default function Form() {
  const router = useRouter();
  return (
    <>
      <form>
        <h2>Job Title</h2>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required pattern=".*[\S]+.*" />
        <label htmlFor="company">Company</label>
        <input type="text" id="company" required pattern=".*[\S]+.*" />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" required pattern=".*[\S]+.*" />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" required pattern=".*[\S]+.*" />
        <button type="submit">Add job </button>
      </form>
      <button type="button" onClick={() => router.push("/")}>
        Go back
      </button>
    </>
  );
}
