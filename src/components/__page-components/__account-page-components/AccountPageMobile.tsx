import React from "react";
import { Link } from "react-router-dom";
import "../../GlobalStylesForComponents.css";
import GoogleIcon from "../../../assets/elements-Account/icons/google-icon.png";
import FacebookIcon from "../../../assets/elements-Account/icons/facebook-icon.png";
import AppleIcon from "../../../assets/elements-Account/icons/apple-icon.png";
import ClosedPageIcon from "../../../assets/elements-Account/icons/closedICON.png";

const AccountPageMobile: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen bg-primary-beige50">
        <Link to={"/"}>
          <img
            className="w-8 h-8 absolute top-28 right-8"
            src={ClosedPageIcon}
            alt="Close Page Icon"
          />
        </Link>
        <section className="flex flex-col items-center justify-center gap-2 font-libreBaskerville">
          <h1 className="mb-4">ENTRAR COM MEU EMAIL E SENHA</h1>
          <span className="self-start ml-2 font-playfairDisplay">email:</span>
          <input
            className="w-80 h-8 bg-white rounded-xl shadow-xl mb-2 pl-2"
            type="email"
            id="email"
          />
          <span className="self-start ml-2 font-playfairDisplay">senha:</span>
          <input
            className="w-80 h-8 bg-white rounded-xl shadow-xl mb-4 pl-2"
            type="password"
            name=""
            id="password"
          />
          <button className="w-36 h-8 text-white text-lg bg-primary-graphite rounded-2xl shadow-md mb-2 font-playfairDisplay">
            entre
          </button>
          <Link to={"/AccountCreation"}>
            <span className="flex flex-col items-center justify-center text-md mb-4 font-playfairDisplay">
              não possui uma conta?<span>cadastre-se</span>
            </span>
          </Link>
        </section>
        <section className="flex flex-col gap-4 font-libreBaskerville">
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
        </section>
      </main>
    </>
  );
};

export default AccountPageMobile;
