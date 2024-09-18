import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
import "./GlobalComponents.css";

const HomePageDesktop: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  const speed = 1.25;
  const distanceBetweenCarousels = 400;

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

  const animateCarousel = (
    carouselElement: HTMLDivElement,
    cloneElement: HTMLDivElement
  ) => {
    let positionX = 0;
    let animationFrameId: number;

    const animate = () => {
      positionX -= speed;

      if (
        positionX <=
        -carouselElement.offsetWidth - distanceBetweenCarousels
      ) {
        positionX += carouselElement.offsetWidth + distanceBetweenCarousels;
      }

      carouselElement.style.transform = `translateX(${positionX}px)`;
      cloneElement.style.transform = `translateX(${positionX}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const cloneElement = cloneRef.current;

    if (carouselElement && cloneElement) {
      const cleanUp = animateCarousel(carouselElement, cloneElement);
      return cleanUp;
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="w-full mt-40 h-[36rem] flex justify-center items-center">
          <div className="bg-white w-[70rem] shadow-2xl flex items-center justify-center">
            <figure className="shadow-2xl">
              <img src={videoFile} loading="lazy" />
            </figure>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-[40rem] relative overflow-x-hidden">
  {/* Botão para avançar para a esquerda */}
  <button
    className="border-2 z-10 absolute left-14 transform -translate-y-1/2 bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-xl"
    onClick={handlePrev} // Moverá para a esquerda
  >
    <img src={arrowLeft} loading="lazy" />
  </button>

  {/* Contêiner do carrossel */}
  <div className="w-full max-w-[80rem] sm:h-[28rem] overflow-hidden flex items-center">
    <div
      className="flex transition-transform duration-700 ease-out"
      style={{ transform: `translateX(-${currentIndex * 16.9}rem)` }} // Movendo 1 card de 16rem por vez
    >
      {products.map((product, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[16rem] h-[24rem] bg-white flex flex-col items-center justify-center gap-2 shadow-xl mx-2"
        >
          <div className="bg-black w-[12.5rem] h-[14rem]">
            <img src={product.image} alt={product.title} />
          </div>
          <h2 className="text-xl font-italiana">{product.title}</h2>
          <p className="text-[0.9rem] w-[15rem] h-[5rem] text-center font-baskervville">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Botão para avançar para a direita */}
  <button
    className="border-2 z-10 absolute right-14 transform -translate-y-1/2 bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-xl"
    onClick={handleNext} // Moverá para a direita
  >
    <img src={arrowRight} loading="lazy" />
  </button>

  {/* Botão "VER TODOS" posicionado corretamente */}
  <div className="mt-8 flex justify-center border-[1px] border-black w-[12rem] h-10 shadow-xl">
    <SeeAllButton></SeeAllButton>
  </div>
</section>

        <section className="bg-black flex items-center justify-center h-[40rem] w-full">
          <div className="bg-primary-red100 h-full w-1/2 flex flex-col items-center justify-center">
            <div className="w-[40rem]">
              <h1 className="text-white text-[4.5rem] text-center font-playfairDisplay py-12">
                COLEÇÃO{" "}
                <span className="font-italiana border-2 shadow-xl rounded-[50%] px-6 py-2">
                  {" "}
                  nova{" "}
                </span>
                CHEGANDO
              </h1>
            </div>
            <div className="bg-transparent text-white flex items-center justify-center h-8 w-[14rem] border-[1px] border-white shadow-xl">
              <SeeAllButton></SeeAllButton>
            </div>
          </div>
          <div className="bg-white left-0 h-full w-1/2">
            <img className="h-full w-full" src={colarJPEG} loading="lazy" />
          </div>
        </section>
        <section className="bg-white w-full h-[40rem] flex items-center justify-center">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center justify-center ">
              <img
                src={imageApresentationOne}
                className="w-full h-[32rem]"
                loading="lazy"
              />
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-4">
              <img
                src={imageApresentationTwo}
                className="w-[15rem] h-[15.5rem]"
                loading="lazy"
              />
              <img
                src={imageApresentationThree}
                className="w-[15rem] h-[15.5rem]"
                loading="lazy"
              />
              <img
                src={imageApresentationFour}
                className="w-[15rem] h-[15.5rem]"
                loading="lazy"
              />
              <img
                src={imageApresentationFive}
                className="w-[15rem] h-[15.5rem]"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="h-[40rem] w-full flex flex-col items-center justify-center gap-12">
          <h1 className="text-shadow-sale text-[3rem] font-playfairDisplay">
            SALE
          </h1>

          {/* Wrapper para o carrossel */}
          <div className="relative w-full overflow-hidden">
            <div ref={carouselRef} className="flex space-x-6">
              {/* Produtos */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-[16rem] h-[26rem] gap-2"
                >
                  <div className="bg-red-600 text-white text-center px-6 py-[0.1rem] font-playfairDisplay mb-2">
                    SALE
                  </div>
                  <div className="bg-black w-[12.5rem] h-[14rem]">
                    <img src={anelJPEG} alt="Produto" />
                  </div>
                  <h2 className="text-2xl font-italiana">Brilho Real</h2>
                  <p className="text-[0.9rem] w-[15rem] h-[3rem] text-center font-baskervville">
                    Com um design minimalista, ele destaca a beleza natural
                  </p>
                  <p className="text-[0.8rem] font-playfairDisplay line-through">
                    R$ 5.254,99
                  </p>
                  <p className="font-playfairDisplay">R$ 5.192,00</p>
                </div>
              ))}
            </div>
            {/* Clone do carrossel para continuidade visual */}
            <div
              ref={cloneRef}
              className="flex space-x-6 absolute top-0 left-full"
              style={{ left: `calc(100% + ${distanceBetweenCarousels}px)` }}
            >
              {/* Produtos duplicados */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index + 6}
                  className="flex flex-col items-center justify-center w-[16rem] h-[26rem] gap-2"
                >
                  <div className="bg-red-600 text-white text-center px-6 py-[0.1rem] font-playfairDisplay mb-2">
                    SALE
                  </div>
                  <div className="bg-black w-[12.5rem] h-[14rem]">
                    <img src={anelJPEG} alt="Produto" />
                  </div>
                  <h2 className="text-2xl font-italiana">Brilho Real</h2>
                  <p className="text-[0.9rem] w-[15rem] h-[3rem] text-center font-baskervville">
                    Com um design minimalista, ele destaca a beleza natural
                  </p>
                  <p className="text-[0.8rem] font-playfairDisplay line-through">
                    R$ 5.254,99
                  </p>
                  <p className="font-playfairDisplay">R$ 5.192,00</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-transparent flex items-center justify-center h-10 border-[1px] border-black w-[10rem] shadow-xl">
            <SeeAllButton></SeeAllButton>
          </div>
        </section>
        <section className="flex items-center justify-center w-full h-[40rem]">
          <div className="bg-white w-[70rem]">
            <img
              src={imageApresentationSix}
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePageDesktop;
