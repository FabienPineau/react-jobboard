import axios from "axios";
import { useEffect, useState } from "react";

import JobItem from "../components/JobItem";
import Layout from "../components/Layout";

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = async () => {
    const res = await axios.get("/api/offers");
    setOffers(res.data.offers);
  };

  return (
    <Layout title="Offers">
      {offers.map((offer) => (
        <JobItem key={offer.id} data={offer} />
      ))}
    </Layout>
  );
};

export default Offers;
