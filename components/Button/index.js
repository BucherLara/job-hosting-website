import { useRouter } from "next/router";
export default function Button() {
  const router = useRouter();
  return (
    <>
      <button type="button" onClick={() => router.push("add")}>
        Click me tooo next page
      </button>
    </>
  );
}
