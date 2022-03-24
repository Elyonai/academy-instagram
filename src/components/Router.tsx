import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Feed from "../Feed/Feed";

const Router = function () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<h2>Profile</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
