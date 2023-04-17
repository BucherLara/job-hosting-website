import Card from "../../components/Card";
import { Inter } from "next/font/google";
import { Client, Databases } from "appwrite";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Card data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = new Client();

    client
      .setEndpoint("http://localhost/v1")
      .setProject("643d00957bd598fa496e");

    const databases = new Databases(client);

    const data = await databases.listDocuments("jobs", "643d00e3b2a4467b56ab");

    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);

    return {
      props: { data: null },
    };
  }
}
