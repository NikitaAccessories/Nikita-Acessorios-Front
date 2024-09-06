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
import Header from "./Header";
import SeeAllButton from "./SeeAllButton";
import Footer from "./Footer";

const HomePageMobile: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <main className="flex flex-col items-center mt-20">
        {/* Seção de Vídeo/Imagem */}
        <section className="w-full mt-6 h-[18rem] flex justify-center items-center">
          <div className="bg-white w-[95%] shadow-lg flex items-center justify-center rounded-md">
            <figure className="w-full">
              <img
                src={videoFile}
                className="w-full h-auto rounded-md"
                alt="Slide Show"
              />
            </figure>
          </div>
        </section>

        {/* Carrossel de Produtos */}
        <section className="flex flex-col items-center justify-center w-full mt-6 relative gap-2">
          <div className="flex items-center justify-between w-[90%]">
            <button
              className="bg-white border-2 rounded-full p-2 shadow-md"
              onClick={handlePrev}
            >
              <img src={arrowLeft} className="w-6 h-6" alt="Prev" />
            </button>
            <div className="w-full h-[24rem] overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Move de acordo com o índice
              >
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col border-2 items-center gap-3 p-4"
                  >
                    <div className="w-[10rem] h-[10rem]">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover rounded-md shadow-md"
                      />
                    </div>
                    <h2 className="text-lg font-italiana">{product.title}</h2>
                    <p className="text-center text-sm">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="bg-white border-2 rounded-full p-2 shadow-md"
              onClick={handleNext}
            >
              <img src={arrowRight} className="w-6 h-6" alt="Next" />
            </button>
          </div>

          <div className="mt-6 border-2 border-black w-44 h-8 flex items-center justify-center">
            <SeeAllButton />
          </div>
        </section>

        {/* Seção de Apresentação */}
        <section className="bg-white w-full flex flex-col items-center justify-center mt-8">
          <div className="w-[95%] flex flex-col gap-4">
            <img
              src={imageApresentationOne}
              className="w-full rounded-md shadow-md"
              alt="Apresentação 1"
            />
            <div className="grid grid-cols-2 gap-4">
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
          </div>
        </section>

        {/* Seção de "SALE" */}
        <section className="w-full flex flex-col items-center justify-center mt-8">
          <h1 className="text-3xl font-bold mb-4">SALE</h1>
          <div className="relative w-[95%] overflow-hidden">
            <div className="flex space-x-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-[10rem] h-[20rem] bg-white rounded-md shadow-lg p-4"
                >
                  <div className="bg-red-600 text-white text-center px-2 py-1 mb-2 rounded-full">
                    SALE
                  </div>
                  <div className="bg-black w-[8rem] h-[8rem]">
                    <img
                      src={anelJPEG}
                      alt="Produto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold mt-2">Brilho Real</h2>
                  <p className="text-sm text-center">
                    Destaca a beleza natural
                  </p>
                  <p className="line-through mt-2">R$ 5.254,99</p>
                  <p className="font-bold">R$ 5.192,00</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 border-2 border-black w-36 flex items-center justify-center h-8">
            <SeeAllButton />
          </div>
        </section>

        {/* Última Seção */}
        <section className="w-full flex items-center justify-center mt-8 mb-8">
          <div className="w-[95%]">
            <img
              src={imageApresentationSix}
              className="w-full rounded-md shadow-md"
              alt="Apresentação 6"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePageMobile;
