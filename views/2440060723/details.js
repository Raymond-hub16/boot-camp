import { useRef, useEffect, useState } from "react";
import Layout from "./Layout";

export default function DetailsPage() {
  const [catFact, setCatFact] = useState(null);
  const ref = useRef();

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => setCatFact(data.fact));
  }, []);

  return (
    <Layout>
      <div ref={ref}>
        <p className="text-xl">Cat Fact:</p>
        <p className="text-lg">{catFact || "Loading..."}</p>
      </div>
    </Layout>
  );
}
