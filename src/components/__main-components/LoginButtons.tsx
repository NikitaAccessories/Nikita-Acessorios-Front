import React from "react";
import AppleIcon from "../../assets/elements-Account/icons/apple-icon.png";
import GoogleIcon from "../../assets/elements-Account/icons/google-icon.png";
import FacebookIcon from "../../assets/elements-Account/icons/facebook-icon.png";

const LoginButtons: React.FC = () => {
  return (
    <>
      {" "}
      <div className="p-4">
        {/* Formatação para Mobile */}
        <div className="flex flex-col items-center space-y-4 md:hidden">
          <div className="flex items-center justify-center w-72 h-10 bg-white rounded-md shadow-lg border border-gray-200 gap-2">
            <img className="w-6 h-6" src={GoogleIcon} alt="Google Icon" />
            <span className="text-[14px]">ENTRE COM O GOOGLE</span>
          </div>
          <div className="flex items-center justify-center w-72 h-10 bg-white rounded-md shadow-lg border border-gray-200 gap-2">
            <img className="w-6 h-6" src={FacebookIcon} alt="Facebook Icon" />
            <span className="text-[14px]">ENTRE COM O FACEBOOK</span>
          </div>
          <div className="flex items-center justify-center w-72 h-10 bg-white rounded-md shadow-lg border border-gray-200 gap-2">
            <img className="w-6 h-6" src={AppleIcon} alt="Apple Icon" />
            <span className="text-[14px]">ENTRE COM A APPLE</span>
          </div>
        </div>

        {/* Formatação para Desktop */}
        <div className="hidden md:flex flex-col space-y-4 w-1/2">
          <h1 className="flex flex-col text-center w-44 font-playfairDisplay text-md ml-12">
            Não possui uma conta?
            <span className="cursor-pointer text-blue-500">Cadastre-se.</span>
          </h1>
          <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
            <img src={GoogleIcon} className="w-6 h-6 ml-3" alt="Google Icon" />
            <span className="ml-4 text-sm">ENTRE COM O GOOGLE</span>
          </button>
          <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
            <img
              src={FacebookIcon}
              className="w-6 h-6 ml-3"
              alt="Facebook Icon"
            />
            <span className="ml-4 text-sm">ENTRE COM O FACEBOOK</span>
          </button>
          <button className="flex items-center justify-start bg-white w-[18rem] py-3 rounded-lg shadow-md border border-gray-300 font-libreBaskerville">
            <img src={AppleIcon} className="w-6 h-6 ml-3" alt="Apple Icon" />
            <span className="ml-4 text-sm">ENTRE COM A APPLE</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginButtons;
