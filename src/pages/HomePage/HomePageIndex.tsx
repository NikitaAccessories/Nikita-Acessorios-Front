import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import logoPng from "../../assets/elements-Home/logo.png";
import videoFile from "../../assets/elements-Home/slidesShow/slidesGif.mp4";
import shoppingBag from "../../assets/elements-Home/icons/shoopingBag.png";
import arrowLeft from "../../assets/elements-Home/icons/arrow-left.png";
import arrowRight from "../../assets/elements-Home/icons/arrow-right.png";
import anelJPEG from "../../assets/elements-Home/images-products/anel.jpeg";
import colarJPEG from "../../assets/elements-Home/images-products/colar.jpeg";
import imageApresentationOne from "../../assets/elements-Home/images-apresentation/image1.jpeg";
import imageApresentationTwo from "../../assets/elements-Home/images-apresentation/image2.jpeg";
import imageApresentationThree from "../../assets/elements-Home/images-apresentation/image3.jpeg";
import imageApresentationFour from "../../assets/elements-Home/images-apresentation/image4.jpeg";
import imageApresentationFive from "../../assets/elements-Home/images-apresentation/image5.jpeg";
import imageApresentationSix from "../../assets/elements-Home/images-apresentation/image6.jpeg";
import whatsappICON from "../../assets/elements-Home/icons/whatsapp-icon.png";
import instagramICON from "../../assets/elements-Home/icons/instragram-icon.png";

const HomePage: React.FC = () => {
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

  const maxIndex = products.length - 1; // Índice máximo

  // Função para avançar no carrossel
  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Função para voltar no carrossel
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // <EFEITO CARROSSEL>
  const carouselRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  const speed = 1.5; // Velocidade de deslocamento do carrossel
  const distanceBetweenCarousels = 200; // Distância entre o carrossel original e o clone

  const animateCarousel = (
    carouselElement: HTMLDivElement,
    cloneElement: HTMLDivElement
  ) => {
    let positionX = 0;
    let animationFrameId: number;

    const animate = () => {
      // Move o carrossel e o clone para a esquerda
      positionX -= speed;

      // Se o carrossel original sair completamente da tela, reposiciona ele no final
      if (
        positionX <=
        -carouselElement.offsetWidth - distanceBetweenCarousels
      ) {
        positionX += carouselElement.offsetWidth + distanceBetweenCarousels;
      }

      // Atualiza o transform para ambos os carrosséis
      carouselElement.style.transform = `translateX(${positionX}px)`;
      cloneElement.style.transform = `translateX(${positionX}px)`;

      // Chama a animação continuamente
      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicia a animação
    animationFrameId = requestAnimationFrame(animate);

    // Limpa a animação quando o componente for desmontado
    return () => cancelAnimationFrame(animationFrameId);
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    const cloneElement = cloneRef.current;

    if (carouselElement && cloneElement) {
      // Inicia a animação
      const cleanUp = animateCarousel(carouselElement, cloneElement);

      // Limpa a animação quando o componente for desmontado
      return cleanUp;
    }
  }, []);
  // </EFEITO CARROSSEL>

  return (
    <>
      <header className="fixed top-0 z-50 bg-primary-beige100 w-full h-[7.7rem] flex-col flex items-center justify-center">
        <nav className="flex space-x-[25rem] mt-3">
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
        <div className="bg-primary-beige50 mt-2 w-full h-11 flex bottom-0 justify-center">
          <ul className="flex items-center justify-center">
            <li className="mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              JÓIAS
            </li>
            <li className="mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              ACESSÓRIOS
            </li>
            <li className="mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              COLEÇÕES
            </li>
            <li className="mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              MAIS VENDIDOS
            </li>
            <li className="mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              PRESENTES
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className="w-full mt-40 h-[36rem] flex justify-center items-center">
          <div className="bg-white w-[70rem] shadow-2xl flex items-center justify-center">
            <video
              className="shadow-2xl"
              autoPlay
              loop
              muted
              src={videoFile}
            ></video>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-[40rem] relative">
          {/* Botão para avançar para a esquerda */}
          <button
            className="border-2 absolute left-14 transform -translate-y-1/2 bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-xl"
            onClick={handlePrev} // Moverá para a esquerda
          >
            <img src={arrowLeft} />
          </button>

          {/* Contêiner do carrossel */}
          <div className="w-[20rem] sm:w-[80rem] sm:h-[28rem] overflow-hidden flex items-center">
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
            className="border-2 absolute right-14 transform -translate-y-1/2 bg-white flex items-center justify-center w-10 h-10 rounded-full shadow-xl"
            onClick={handleNext} // Moverá para a direita
          >
            <img src={arrowRight} />
          </button>

          {/* Botão "VER TODOS" posicionado corretamente */}
          <div className="mt-8 flex justify-center">
            <button className="bg-white border-[1px] border-black shadow-xl py-2 px-8 font-libreBaskerville">
              VER TODOS
            </button>
          </div>
        </section>
        <section className="bg-black flex items-center justify-center h-[40rem] w-full">
          <div className="bg-primary-red100 h-full w-1/2 flex flex-col items-center justify-center">
            <div className="w-[40rem]">
              <h1 className="text-white text-[4.5rem] text-center font-playfairDisplay py-12">
                COLEÇÃO{" "}
                <span className="font-italiana border-2 rounded-[50%] px-6">
                  {" "}
                  nova{" "}
                </span>
                CHEGANDO
              </h1>
            </div>
            <div className="bg-transparent text-white flex items-center justify-center h-8 border-[1px] border-white shadow-xl">
              <button className="flex items-center justify-center w-[14rem] font-libreBaskerville">
                VER TODOS
              </button>
            </div>
          </div>
          <div className="bg-white left-0 h-full w-1/2">
            <img className="h-full w-full" src={colarJPEG} />
          </div>
        </section>
        <section className="bg-white w-full h-[40rem] flex items-center justify-center">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center justify-center ">
              <img src={imageApresentationOne} className="w-full h-[32rem]" />
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-4">
              <img
                src={imageApresentationTwo}
                className="w-[15rem] h-[15.5rem]"
              />
              <img
                src={imageApresentationThree}
                className="w-[15rem] h-[15.5rem]"
              />
              <img
                src={imageApresentationFour}
                className="w-[15rem] h-[15.5rem]"
              />
              <img
                src={imageApresentationFive}
                className="w-[15rem] h-[15.5rem]"
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

          <div className="bg-white flex items-center justify-center h-10 border-[1px] border-black shadow-xl">
            <button className="flex items-center justify-center w-[10rem] font-libreBaskerville">
              VER TODOS
            </button>
          </div>
        </section>
        <section className="flex items-center justify-center w-full h-[40rem]">
          <div className="bg-white w-[70rem]">
            <img src={imageApresentationSix} className="w-full h-full" />
          </div>
        </section>
        <footer className="flex items-center justify-center bg-primary-red100 w-full h-[14rem] space-x-16">
          <div className="flex text-white font-baskervville flex-col items-center justify-center text-center text-xs w-[15rem]">
            <h1 className="text-sm">ATENDIMENTO</h1>
            <p>Acompanhe o Seu Pedido</p>
            <p>Whatsapp</p>
            <p>Marketplace e Parcerias</p>
          </div>
          <div className="flex text-white font-baskervville flex-col items-center justify-center text-center text-sm w-[15rem]">
            <h1 className="mb-4 text-xl">TROCA FÁCIL</h1>
            <p>NÃO SERVIU? A NIKITA FAZ A TROCA GRATUITAMENTE.</p>
          </div>
          <div className="flex text-white font-baskervville flex-col items-center justify-center text-center text-sm w-[15rem]">
            <h1 className="mb-4 text-xl">ENTREGA</h1>
            <p>FRETE GRÁTIS EM SUAS COMPRAS A PARTIR DE R$200.00.</p>
            <div className="font-baskervville text-white items-center justify-center text-center text-sm mt-4 w-[15rem]">
              <h1>NIKITA</h1>
              <p>Redes Sociais</p>
              <div className="flex items-center justify-center gap-2">
                <a href="">
                  <img className="cursor-pointer" src={whatsappICON} />
                </a>
                <a href="https://www.instagram.com/nikitaacessoriosoficial?igsh=MXVsbHBkcG9iODZncg==">
                  <img className="cursor-pointer" src={instagramICON} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex text-white font-baskervville flex-col items-center justify-center text-center text-sm w-[15rem]">
            <h1 className="mb-4 text-xl">PARCELAMENTO</h1>
            <p>PARCELE SUAS COMPRAS EM 10X SEM JUROS NO CARTÃO.</p>
          </div>
          <div className="flex text-white font-baskervville flex-col items-center justify-center text-center text-xs w-[15rem]">
            <h1 className="text-sm">INFORMAÇÕES</h1>
            <p>Política de Troca</p>
            <p>Formas de Pagamento</p>
            <p>Regulamento GiftBack</p>
            <p>Cartão Presente</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
