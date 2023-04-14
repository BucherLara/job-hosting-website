import { useRouter } from "next/router";

export default function JobDetails({ data }) {
  const { query } = useRouter();
  const { id } = query;

  function getJobById(id) {
    return data.find((job) => job.id === id);
  }
  const jobDetail = getJobById(id);

  if (!jobDetail) return <h2>...loading</h2>;

  return (
    <section>
      <p>{jobDetail.title}</p>
      <p>{jobDetail.company}</p>
      <p>{jobDetail.location}</p>
      <p>{jobDetail.date}</p>
      <p>Job Description</p>
      <StyledArticle>{jobDetail.description}</StyledArticle>
    </section>
  );
}
