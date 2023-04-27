import Form from "../../../components/Form";
import { Client, Databases, ID } from "appwrite";
import { useState } from "react";
import { useEffect } from "react";

export default function AddNewJobs() {
  const [object, setObject] = useState();

  async function addNewElementToDatabase() {
    try {
      const client = new Client();
      const databases = new Databases(client);

      client
        .setEndpoint("http://localhost/v1")
        .setProject("644001fed8bd54112f7b");

      const promise = databases.createDocument(
        "jobs",
        "job-collection",
        ID.unique(),
        object
      );

      promise.then(
        function (response) {
          console.log(response);
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      console.log(error);

      return {
        props: { data2: null },
      };
    }
  }
  useEffect(() => {
    if (object === undefined) return;
    else {
      console.log(object);
      addNewElementToDatabase(object);
    }
  }, [object]);

  return (
    <>
      <Form setObject={setObject} />
    </>
  );
}
