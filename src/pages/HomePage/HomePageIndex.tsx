import React, { useState } from "react";
import "./homePage.css";
import logoPng from "../../components/elements-Home/logo.png";
import shoppingBag from "../../components/elements-Home/shoopingBag.png";
import { Link } from "react-router-dom";
import videoFile from "../../components/elements-Home/slidesShow/slidesGif.mp4";

const HomePage: React.FC = () => {
  return (
    <>
      <header className="bg-primary-beige100 w-full h-[7.5rem] flex-col flex items-center justify-center">
        <nav className="flex space-x-[14rem] mt-3">
          <div className="elements-left flex items-center justify-center gap-5">
            <span className="font-playfairDisplay cursor-pointer">
              DELIVERY
            </span>
            <span className="font-playfairDisplay cursor-pointer">CONTATO</span>
          </div>
          <Link to={"/"}>
            <img src={logoPng} width="132rem" alt="Logo PNG" />
          </Link>
          <div className="elements-right flex items-center justify-center gap-5">
            <span className="font-playfairDisplay cursor-pointer w-28">
              Olá, faça login ou cadastre-se.
            </span>
            <img
              src={shoppingBag}
              className="cursor-pointer"
              alt="shopping bag icon"
            />
          </div>
        </nav>
        <div className="bg-primary-beige50 navegation w-full mt-2 h-11 flex items-center justify-center bg-white">
          <ul className="flex items-center justify-center">
            <li className="mx-5 cursor-pointer font-playfairDisplay">JÓIAS</li>
            <li className="mx-5 cursor-pointer font-playfairDisplay">
              ACESSÓRIOS
            </li>
            <li className="mx-5 cursor-pointer font-playfairDisplay">
              COLEÇÕES
            </li>
            <li className="mx-5 cursor-pointer font-playfairDisplay">
              BEST SELLER
            </li>
            <li className="mx-5 cursor-pointer font-playfairDisplay">
              PRESENTES
            </li>
          </ul>
        </div>
      </header>
      <main className="mt-4">
        <section className="w-full h-[36rem] flex justify-center items-center">
          <div className="bg-white w-[63rem] shadow-2xl h-[21rem] flex items-center justify-center ">
            <video
              className="shadow-2xl"
              autoPlay
              loop
              muted
              src={videoFile}
            ></video>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;