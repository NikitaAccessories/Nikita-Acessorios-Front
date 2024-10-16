import React, { useState, useEffect } from "react";
import AccountPageMobile from "../../components/__page-components/__account-page-components/AccountPageMobile";
import AccountPageDesktop from "../../components/__page-components/__account-page-components/AccountPageDesktop";
import "./GlobalAccountPagesStyles.css";

const AccountPageIndex: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{isMobile ? <AccountPageMobile /> : <AccountPageDesktop />}</div>;
};

export default AccountPageIndex;