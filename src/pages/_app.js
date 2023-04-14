import "@/styles/globals.css";
import Header from "../../components/Header";

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
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} data={data} />
    </>
  );
}
