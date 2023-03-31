import axios from "axios";
import { useEffect, useState } from "react";
import JobItem from "../components/JobItem";

const OffersList = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = async () => {
    const res = await axios.get("/api/offers");
    setOffers(res.data.offers);
  };

  return (
    <div>
      {offers.map((offer) => (
        <JobItem key={offer.id} data={offer} />
      ))}
    </div>
  );
};

export default { OffersList };
