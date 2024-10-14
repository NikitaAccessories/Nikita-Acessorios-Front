import React, { useState, useEffect } from "react";
import ReceivedCodeMobile from "../../components/__page-components/__account-page-components/ReceiveCodeMobile";
import ReceivedCodeDesktop from "../../components/__page-components/__account-page-components/ReceiveCodeDesktop";

const ReceiveCodeIndex: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>{isMobile ? <ReceivedCodeMobile /> : <ReceivedCodeDesktop />}</div>
  );
};

export default ReceiveCodeIndex;
