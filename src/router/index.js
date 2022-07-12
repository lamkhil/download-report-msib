import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../modules/error/NotFound";
import Home from "../modules/home/Home";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
