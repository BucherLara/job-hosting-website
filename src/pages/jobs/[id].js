import { Client, Databases } from "appwrite";

export default function JobDetails({ data }) {
  console.log(data);

  return (
    <section>
      <p>{data.title}</p>
      <p>{data.company}</p>
      <p>{data.location}</p>
      <p>{data.date}</p>
      <p>Job Description</p>
      {/* <StyledArticle>{data.description}</StyledArticle> */}
    </section>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const queryId = id.slice(0, -3);

  try {
    const client = new Client();

    client
      .setEndpoint("http://localhost/v1")
      .setProject("643d00957bd598fa496e");

    const databases = new Databases(client);

    const promise = databases.getDocument('jobs', '643d00e3b2a4467b56ab', queryId);

    return {
      props: {
        data: await promise,
      }
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        data: null,
      },
    };
  }
}
