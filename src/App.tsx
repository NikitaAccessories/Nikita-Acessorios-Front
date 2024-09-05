import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePageIndex";
import AccountPage from "./pages/AccountPage/AccountPageIndex";
import Header from "./components/Header";
import SeeAllButton from "./components/SeeAllButton";
import Footer from "./components/Footer";
import "./index.css";
import './tailwind.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AccountPage" element={<AccountPage />} />
      </Routes>
    </Router>
  );
};

export default App;
