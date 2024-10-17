import React, { useState, useEffect } from "react";
import AccountCreationMobile from "../../components/__page-components/__account-page-components/AccountCreationMobile";
import AccountCreationDesktop from "../../components/__page-components/__account-page-components/AccountCreationDesktop";

const AccountCreationIndex: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <AccountCreationMobile /> : <AccountCreationDesktop />}
    </div>
  );
};

export default AccountCreationIndex;
