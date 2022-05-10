import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages/Views
import Dashboard from "./components/pages/Dashboard";
import Title from "./components/widgets/Title";
import Header from "./components/widgets/Header";

function AppRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Title />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
