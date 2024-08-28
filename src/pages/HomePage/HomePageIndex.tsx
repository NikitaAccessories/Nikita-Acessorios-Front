import React, { useState } from "react";
import "./homePage.css";
import logoPng from "../../components/elements-Home/logo.png";
import shoppingBag from "../../components/elements-Home/shoopingBag.png";
import { Link } from "react-router-dom";
import videoFile from "../../components/elements-Home/slidesShow/slidesGif.mp4";
import arrowLeft from "../../components/elements-Home/arrow-left.png";
import arrowRight from "../../components/elements-Home/arrow-right.png";
import anelJPEG from "../../components/elements-Home/images-products/anel.jpeg";
import colarJPEG from "../../components/elements-Home/images-products/colar.jpeg";

const HomePage: React.FC = () => {
  return (
    <>
      <header className="bg-primary-beige100 w-full h-[7.5rem] flex-col flex items-center justify-center">
        <nav className="flex space-x-[15rem] mt-3">
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
        <section className="flex items-center justify-center w-full h-[34rem] flex-col">
          <button
            className="absolute left-4 transform -translate-y-1/2 bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-xl"
            id="arrowLeft"
          >
            <img src={arrowLeft} />
          </button>
          <button
            className="absolute right-4 transform -translate-y-1/2 bg-white flex items-center justify-center w-10 h-10 rounded-full  shadow-xl"
            id="arrowRight"
          >
            <img src={arrowRight} />
          </button>
          <div className="flex items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[24rem] gap-2 shadow-md">
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} alt="" />
              </div>
              <h2 className="font-libreBaskerville text-xl">Luz Dourada</h2>
              <p className="text-[0.8rem] w-[15rem] h-[5rem] text-center font-baskervville">
                Os Brincos "Reflexo"são feitos para brilhar. Leves e
                confortáveis, são a escolha perfeita para dar um toque final
                sofisticado a qualquer visual.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[24rem] gap-2 shadow-md">
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} alt="" />
              </div>
              <h2 className="text-xl font-libreBaskerville">Luz do Sol</h2>
              <p className="text-[0.8rem] w-[15rem] h-[5rem] text-center font-baskervville">
                Inspirado na beleza dos raios solares, ele captura a essência da
                luz dourada em um design sofisticado e contemporanêo.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[24rem] gap-2 shadow-md">
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} alt="" />
              </div>
              <h2 className="text-xl font-libreBaskerville">Luz Dourada</h2>
              <p className="text-[0.8rem] w-[15rem] h-[5rem] text-center font-baskervville">
                Cria Reflexos que iluminam o rosto de quem o usa. Ideal para
                ocasiões especiais ou para adicionar um toque de glamour ao dia
                a dia.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[24rem] gap-2 shadow-md">
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} alt="" />
              </div>
              <h2 className="text-xl font-libreBaskerville">Brilho Real</h2>
              <p className="text-[0.8rem] w-[15rem] h-[5rem] text-center font-baskervville">
                Com um design minimalista ele destaca a beleza natural do ouro,
                irradiando sofisticação.
              </p>
            </div>
          </div>
          <div className="bg-white mt-10 flex items-center justify-center h-10 border-[1px] border-black shadow-xl">
            <button className="flex items-center justify-center w-[10rem] font-libreBaskerville">
              VER TODOS
            </button>
          </div>
        </section>
        <section className="bg-black flex items-center justify-center h-[28rem] w-full">
          <div className="bg-primary-red100 h-full w-1/2 flex flex-col items-center justify-center">
            <h1 className="text-white text-[3.5rem] text-center mt-10 font-playfairDisplay py-12">
              COLEÇÃO <span className="font-italiana border-2 rounded-[50%] px-6"> nova </span>CHEGANDO
            </h1>
            <div className="bg-transparent text-white flex items-center justify-center h-8 border-[1px] border-white shadow-xl">
              <button className="flex items-center justify-center w-[14rem] font-libreBaskerville">
                VER TODOS
              </button>
            </div>
          </div>
          <div className="bg-white left-0 h-full w-1/2"><img className="h-full w-full" src={colarJPEG} alt="" /></div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
