import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Offer from "./pages/Offer";
import NewOffer from "./pages/NewOffer";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/offers/:id" element={<Offer />} />
      <Route path="/offers/new" element={<NewOffer />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
