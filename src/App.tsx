import React from "react";
import { Routes, Route } from "react-router-dom";
import Advisory from "./page/Advisory";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Advisory />} />
      </Routes>
    </>
  );
};

export default App;
