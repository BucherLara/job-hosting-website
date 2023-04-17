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
      props: {
        data: [
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
        ],
      },
    };
  }
}
