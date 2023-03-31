import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import JobItem from "../components/JobItem";
import Layout from "../components/Layout";

const Home = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers();
  }, []);

  const getOffers = async () => {
    const res = await axios.get("/api/offers");
    setOffers(res.data.offers);
  };

  const countOffers = offers.length;

  return (
    <Layout title="Home">
      <div className="welcome mb-5 text-center">
        <h2 class="text-xl font-medium text-black">
          Welcome to your jobboard!
        </h2>
      </div>
      <div className="bg-white mb-5">
        <div className="block hover:bg-gray-50">
          <div className="px-4 py-4 sm:px-6">
            <div className="offerCounter text-center">
              <p>Today we count {countOffers} offers.</p>
              <p>
                Lets see which one is for you or add one if you are a recruiter!
              </p>
              <div className="py-5 flex items-center justify-center">
                <Link
                  to={"/offers"}
                  className="inline-flex items-center mx-3 px-3 py-2 text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none"
                >
                  See offers
                </Link>
                <Link
                  to={"/offers/new"}
                  className="inline-flex items-center mx-3 px-3 py-2 text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none"
                >
                  + New offer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {offers.map((offer) =>
        offer.id === countOffers.toString() ? (
          <div key={offer.id} className="bg-white">
            <div className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="offerLatest text-center">
                  <h3>Latest offer</h3>
                  <JobItem key={offer.id} data={offer} />
                </div>
              </div>
            </div>
            <div className="block text-center">
              <div className="px-4 py-4 sm:px-6">
                <Link
                  to={"/offers/"}
                  className="inline-flex items-center mx-3 px-3 py-2 text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ) : null
      )}
    </Layout>
  );
};

export default Home;
