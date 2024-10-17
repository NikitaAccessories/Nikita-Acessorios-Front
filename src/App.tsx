import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageIndex from "./pages/HomePage/HomePageIndex";
import AccountPageIndex from "./pages/AccountPage/AccountPageIndex";
import Header from "./components/__main-components/Header";
import SeeAllButton from "./components/__main-components/SeeAllButton";
import Footer from "./components/__main-components/Footer";
import HomePageDesktop from "./components/__page-components/__home-page-components/HomePageDesktop";
import HomePageMobile from "./components/__page-components/__home-page-components/HomePageMobile";
import PromotionScreen from "./components/__main-components/PromotionScreen";
import AccountPageDesktop from "./components/__page-components/__account-page-components/AccountPageDesktop";
import AccountPageMobile from "./components/__page-components/__account-page-components/AccountPageMobile";
import ReceivedCodeIndex from "./pages/AccountPage/ReceiveCodeIndex";
import ReceivedCodeDesktop from "./components/__page-components/__account-page-components/ReceiveCodeDesktop";
import ReceivedCodeMobile from "./components/__page-components/__account-page-components/ReceiveCodeMobile";
import AccountCreationDesktop from "./components/__page-components/__account-page-components/AccountCreationDesktop";
import AccountCreationMobile from "./components/__page-components/__account-page-components/AccountCreationMobile";
import "./index.css";
import "./tailwind.css";
import AccountCreationIndex from "./pages/AccountPage/AccountCreationIndex";
import LoginButtons from "./components/__main-components/LoginButtons";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageIndex />} />
        <Route path="/AccountPage" element={<AccountPageIndex />} />
        <Route path="/AccountCreation" element={<AccountCreationIndex />} />
        <Route path="/ReceiveCode" element={<ReceivedCodeIndex />} />

        {/* PÁGINAS E COMPONENTES */}
        <Route element={<Header />} />
        <Route element={<LoginButtons />} />
        <Route element={<SeeAllButton />} />
        <Route element={<Footer />} />
        <Route element={<HomePageDesktop />} />
        <Route element={<HomePageMobile />} />
        <Route element={<PromotionScreen />} />
        <Route element={<AccountPageDesktop />} />
        <Route element={<AccountPageMobile />} />
        <Route element={<ReceivedCodeDesktop />} />
        <Route element={<ReceivedCodeMobile />} />
        <Route element={<AccountCreationMobile />} />
        <Route element={<AccountCreationDesktop />} />
      </Routes>
    </Router>
  );
};

export default App;
