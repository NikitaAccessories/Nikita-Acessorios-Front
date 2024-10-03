import React, { useState, useEffect, useRef } from "react";
import videoFile from "../assets/elements-Home/slidesShow/slidesGif.gif";
import arrowLeft from "../assets/elements-Home/icons/arrow-left.png";
import arrowRight from "../assets/elements-Home/icons/arrow-right.png";
import anelJPEG from "../assets/elements-Home/images-products/anel.jpeg";
import colarJPEG from "../assets/elements-Home/images-products/colar.jpeg";
import imageApresentationOne from "../assets/elements-Home/images-apresentation/image1.jpeg";
import imageApresentationTwo from "../assets/elements-Home/images-apresentation/image2.jpeg";
import imageApresentationThree from "../assets/elements-Home/images-apresentation/image3.jpeg";
import imageApresentationFour from "../assets/elements-Home/images-apresentation/image4.jpeg";
import imageApresentationFive from "../assets/elements-Home/images-apresentation/image5.jpeg";
import imageApresentationSix from "../assets/elements-Home/images-apresentation/image6.jpeg";
import imageApresentationSeven from "../assets/elements-Home/images-apresentation/image7.png";
import anelPandoraPNG from "../assets/elements-Home/images-products/anelPandora.png";
import brincosPNG from "../assets/elements-Home/images-products/brincos.png";
import colarCoraçãoPNG from "../assets/elements-Home/images-products/colarCoração.png";
import pulseiraPNG from "../assets/elements-Home/images-products/pulseira.png";
import bolsaPNG from "../assets/elements-Home/images-products/bolsa.png";
import outrosPNG from "../assets/elements-Home/images-products/outros.png";
import Header from "./Header";
import SeeAllButton from "./SeeAllButton";
import Footer from "./Footer";
import "./GlobalComponents.css";

const HomePageMobile: React.FC = () => {
  // Estado para controlar o índice do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imagens dos produtos (substitua com suas imagens reais)
  const produtosNovidades = [
    anelJPEG,
    colarCoraçãoPNG,
    anelPandoraPNG,
    brincosPNG,
    pulseiraPNG,
  ]; // Exemplo de produtos

  // Função para mover para o próximo produto
  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Função para mover para o produto anterior
  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const products = [
    {
      title: "Luz Dourada",
      description:
        'Os Brincos "Reflexo"são feitos para brilhar. Leves e confortáveis, são a escolha perfeita para dar um toque final sofisticado a qualquer visual.',
      image: anelJPEG,
    },
    {
      title: "Luz do Sol",
      description:
        "Inspirado na beleza dos raios solares, ele captura a essência da luz dourada em um design sofisticado e contemporâneo.",
      image: anelJPEG,
    },
    {
      title: "Luz Dourada",
      description:
        "Cria Reflexos que iluminam o rosto de quem o usa. Ideal para ocasiões especiais ou para adicionar um toque de glamour ao dia a dia.",
      image: anelJPEG,
    },
    {
      title: "Brilho Real",
      description:
        "Com um design minimalista ele destaca a beleza natural do ouro, irradiando sofisticação.",
      image: anelJPEG,
    },
    {
      title: "Brilho Real",
      description:
        "Com um design minimalista ele destaca a beleza natural do ouro, irradiando sofisticação.",
      image: anelJPEG,
    },
  ];

  const maxIndex = products.length - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center mt-[15rem]">
        {/* Seção de Vídeo/Imagem */}
        <section className="w-full mt-6 h-[18rem] flex flex-col justify-center items-center mb-20">
          <div className="bg-white w-[80%] shadow-lg flex items-center justify-center rounded-md">
            <img
              src={imageApresentationSeven}
              alt=""
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="flex flex-col items-center justify-center mt-6">
            <h1 className="font-bold text-xl font-libreBaskerville">
              BIJUS NIKITA
            </h1>
            <p className="text-lg font-baskervville">ETERNIZE SEUS MOMENTOS</p>
            <span className="bg-black w-[5rem] h-[2px] mt-2"></span>
          </div>
        </section>

        {/* Carrossel de Produtos */}
        <section className="flex flex-col items-center justify-center w-full relative">
          <div className="flex items-center justify-between w-full">
            <button
              className="bg-white border-2 rounded-full p-2 shadow-md"
              onClick={handlePrev}
            >
              <img src={arrowLeft} className="w-5 h-5" alt="Prev" />
            </button>
            <div className="w-[75%] h-[18rem] overflow-hidden mt-16">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Move de acordo com o índice
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col items-center gap-2 p-2"
                  >
                    <div className="w-[10rem] h-[10rem]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-md shadow-md"
                      />
                    </div>
                    <h2 className="text-base font-italiana text-center">
                      {product.title}
                    </h2>
                    <p className="text-sm text-center">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="bg-white border-2 rounded-full p-2 shadow-md"
              onClick={handleNext}
            >
              <img src={arrowRight} className="w-5 h-5" alt="Next" />
            </button>
          </div>

          <div className="mt-6 border-[1px] border-black w-44 h-8 flex items-center justify-center shadow-xl">
            <SeeAllButton />
          </div>
        </section>
        <section className="w-full mt-6 h-[16rem] flex justify-center items-center">
          <div className="bg-white w-[95%] shadow-lg flex items-center justify-center rounded-md h-[14rem]">
            <figure className="w-full h-full">
              <img
                src={videoFile}
                className="w-full h-full rounded-md"
                alt="Slide Show"
              />
            </figure>
          </div>
        </section>
        <section className="mt-4">
          <div className="font-baskervville flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold text-center">
              ESCOLHA POR CATEGORIA
            </h1>
            <p className="text-md text-center">ENCONTRE SUA PREFERIDA</p>
            <span className="bg-black h-[1px] w-[5rem] mt-2 mb-6"></span>
            <div className="grid grid-cols-2 gap-6 px-4">
              {" "}
              {/* Reduced padding for mobile */}
              {/* Category items with reduced padding and shadow */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] shadow-md">
                  <img
                    src={brincosPNG}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="flex items-center font-baskervville justify-center mt-2 border-2 w-[6rem] h-[2rem] shadow-md">
                  BRINCOS
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] shadow-md">
                  <img
                    src={pulseiraPNG}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="flex items-center font-baskervville justify-center mt-2 border-2 w-[6rem] h-[2rem] shadow-md">
                  PULSEIRAS
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] shadow-md">
                  <img
                    src={anelPandoraPNG}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="flex items-center font-baskervville justify-center mt-2 border-2 w-[6rem] h-[2rem] shadow-md">
                  ANEIS
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] shadow-md">
                  <img
                    src={colarCoraçãoPNG}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="flex items-center font-baskervville justify-center mt-2 border-2 w-[6rem] h-[2rem] shadow-md">
                  COLARES
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] shadow-md">
                  <img src={bolsaPNG} className="w-full h-full object-cover" />
                </div>
                <button className="flex items-center font-baskervville justify-center mt-2 border-2 w-[6rem] h-[2rem] shadow-md">
                  BOLSAS
                </button>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[10rem] h-[10rem] shadow-md">
                  <img src={outrosPNG} className="w-full h-full object-cover" />
                </div>
                <button className="flex items-center font-baskervville justify-center mt-2 border-2 w-[6rem] h-[2rem] shadow-md">
                  OUTROS
                </button>
              </div>
              {/* Repeat for other categories */}
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center space-y-4 md:hidden mt-8 mb-6">
          <h1 className="text-2xl font-semibold mb-10 font-libreBaskerville">
            NOVIDADES
          </h1>
          <div className="relative flex items-center justify-center">
            {/* Botão da esquerda */}
            <button
              className="absolute -left-14 p-2 rounded-full"
              onClick={prevProduct}
            >
              <img src={arrowLeft} alt="Seta Esquerda" />
            </button>

            {/* Imagem do produto */}
            <div className="w-[15rem] h-48 flex items-center justify-center">
              <img
                src={produtosNovidades[currentIndex]}
                alt={`Produto ${currentIndex + 1}`}
                className="object-cover"
              />
            </div>

            {/* Botão da direita */}
            <button
              className="absolute -right-14 p-2 rounded-full"
              onClick={nextProduct}
            >
              <img src={arrowRight} alt="Seta Direita" />
            </button>
          </div>

          {/* Indicadores do carrossel */}
          <div className="flex space-x-2">
            {products.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mt-10 ${
                  index === currentIndex ? "bg-gray-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center grid grid-cols-2 gap-6 px-6 mt-10 mb-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={imageApresentationOne}
              className="w-full rounded-md shadow-md"
              alt="Apresentação 1"
            />

            <img
              src={imageApresentationTwo}
              className="w-full rounded-md shadow-md"
              alt="Apresentação 2"
            />
            <img
              src={imageApresentationThree}
              className="w-full rounded-md shadow-md"
              alt="Apresentação 3"
            />
          </div>
          <div className="flex flex-col items-center justify-content space-y-4">
            <img
              src={imageApresentationFour}
              className="w-full rounded-md shadow-md"
              alt="Apresentação 4"
            />
            <img
              src={imageApresentationFive}
              className="w-full rounded-md shadow-md"
              alt="Apresentação 5"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePageMobile;