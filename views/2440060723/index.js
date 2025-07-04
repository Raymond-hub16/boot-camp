import { useEffect, useState, useMemo } from "react";
import Layout from "./Layout";

export default function HomePage() {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => setAdvice(data.slip.advice));
  }, []);

  const uppercasedAdvice = useMemo(() => advice?.toUpperCase(), [advice]);

  return (
    <Layout>
      <div>
        <p className="text-xl">Advice of the day:</p>
        <p className="text-lg font-semibold">{uppercasedAdvice || "Loading..."}</p>
      </div>
    </Layout>
  );
}
