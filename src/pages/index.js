import Card from "../../components/Card";
import { Client, Databases } from "appwrite";
export default function Home({ data2 }) {
  return (
    <>
      <Card data={data2} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const client = new Client();
    client
      .setEndpoint("http://localhost/v1")
      .setProject("644001fed8bd54112f7b");

    const databases = new Databases(client);

    const data2 = await databases.listDocuments("jobs", "job-collection");

    return { props: { data2 } };
  } catch (error) {
    console.log(error);
    return { props: { data2: null } };
  }
}
