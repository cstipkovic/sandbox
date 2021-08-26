import { useState, useEffect } from "react";
import axios from "axios";

const ReactFetch = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://random-data-api.com/api/beer/random_beer")
      .then((res) => {
        setBeer(res.data);
      });
  }, []);

  if (!beer) return null;

  return <>{beer.id}</>;
};

export default ReactFetch;
