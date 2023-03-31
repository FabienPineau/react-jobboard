import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../components/Layout";
import JobDetails from "../components/JobDetails";

const Offer = () => {
  const [offer, setOffer] = useState();
  const params = useParams();

  useEffect(() => {
    getOffer(params);
  }, [params]);

  const getOffer = async (params) => {
    const res = await axios.get(`/api/offers/${params.id}`);
    setOffer(res.data.offer);
  };

  return (
    <Layout title={`Offer ${params.id}`}>
      {offer && <JobDetails data={offer} />}
    </Layout>
  );
};

export default Offer;
