import React from "react";
import { Link } from "react-router-dom";
import "../../GlobalStylesForComponents.css";
import GoogleIcon from "../../../assets/elements-Account/icons/google-icon.png";
import FacebookIcon from "../../../assets/elements-Account/icons/facebook-icon.png";
import AppleIcon from "../../../assets/elements-Account/icons/apple-icon.png";
import ClosedPageIcon from "../../../assets/elements-Account/icons/closedICON.png";

const AccountCreationMobile: React.FC = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen bg-primary-beige50">
        <Link to={"/"}>
          <img
            className="w-8 h-8 absolute top-16 right-8"
            src={ClosedPageIcon}
            alt="Close Page Icon"
          />
        </Link>
        <section className="flex flex-col items-center justify-center gap-2 font-libreBaskerville">
          <div className="flex items-center justify-center gap-6">
            <h1 className="mb-2 font-semibold text-md">SEJA UM(A) CLIENTE</h1>
            <Link to={"/AccountPage"}>
              <span className="flex flex-col items-center justify-center text-md mb-4 font-playfairDisplay">
                Já possui uma conta?<span>conecte-se</span>
              </span>
            </Link>
          </div>
          <span className="self-start ml-10 font-playfairDisplay">
            primeiro nome:
          </span>
          <input
            className="w-80 h-8 bg-white rounded-xl shadow-xl mb-2 pl-2"
            type="text"
            id="text"
          />
          <span className="self-start ml-10 font-playfairDisplay">
            segundo nome:
          </span>
          <input
            className="w-80 h-8 bg-white rounded-xl shadow-xl mb-2 pl-2"
            type="text"
            id="text"
          />
          <span className="self-start ml-10 font-playfairDisplay">email:</span>
          <input
            className="w-80 h-8 bg-white rounded-xl shadow-xl mb-2 pl-2"
            type="email"
            id="email"
          />
          <span className="self-start ml-10 font-playfairDisplay">
            digite sua senha:
          </span>
          <input
            className="w-80 h-8 bg-white rounded-xl shadow-xl mb-2 pl-2"
            type="password"
            id="password"
          />
          <span className="self-start ml-10 font-playfairDisplay">
            confirme sua senha:
          </span>
          <input
            className="w-80 h-8 bg-white rounded-xl shadow-xl mb-4 pl-2"
            type="password"
            id="password"
          />
          <button className="w-36 h-8 text-white text-lg bg-primary-graphite rounded-2xl shadow-md mb-6 font-playfairDisplay">
            entre
          </button>
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

export default AccountCreationMobile;
