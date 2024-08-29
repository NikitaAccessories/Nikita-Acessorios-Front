import React, { useState } from "react";
import "./homePage.css";
import logoPng from "../../assets/elements-Home/logo.png";
import shoppingBag from "../../assets/elements-Home/icons/shoopingBag.png";
import { Link } from "react-router-dom";
import videoFile from "../../assets/elements-Home/slidesShow/slidesGif.mp4";
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
import instagramICON from "../../assets/elements-Home/icons/instragram-icon.png.png";

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
        <div className="bg-primary-beige50 navegation w-full mt-2 h-11 flex items-center justify-center">
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
                <img src={anelJPEG} />
              </div>
              <h2 className="text-xl font-italiana">Luz Dourada</h2>
              <p className="text-[0.9rem] w-[15rem] h-[5rem] text-center font-baskervville">
                Os Brincos "Reflexo"são feitos para brilhar. Leves e
                confortáveis, são a escolha perfeita para dar um toque final
                sofisticado a qualquer visual.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[24rem] gap-2 shadow-md">
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} />
              </div>
              <h2 className="text-xl font-italiana">Luz do Sol</h2>
              <p className="text-[0.9rem] w-[15rem] h-[5rem] text-center font-baskervville">
                Inspirado na beleza dos raios solares, ele captura a essência da
                luz dourada em um design sofisticado e contemporanêo.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[24rem] gap-2 shadow-md">
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} />
              </div>
              <h2 className="text-xl font-italiana">Luz Dourada</h2>
              <p className="text-[0.9rem] w-[15rem] h-[5rem] text-center font-baskervville">
                Cria Reflexos que iluminam o rosto de quem o usa. Ideal para
                ocasiões especiais ou para adicionar um toque de glamour ao dia
                a dia.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[24rem] gap-2 shadow-md">
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} alt="" />
              </div>
              <h2 className="text-xl font-italiana">Brilho Real</h2>
              <p className="text-[0.9rem] w-[15rem] h-[5rem] text-center font-baskervville">
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
            <h1 className="text-white text-[3.5rem] text-center font-playfairDisplay py-12">
              COLEÇÃO{" "}
              <span className="font-italiana border-2 rounded-[50%] px-6">
                {" "}
                nova{" "}
              </span>
              CHEGANDO
            </h1>
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
        <section className="bg-white w-full h-[32rem] flex items-center justify-center">
          <div className="flex items-center justify-center gap-8">
            <div className="bg-black flex items-center justify-center w-[30rem] h-[25rem]">
              <img src={imageApresentationOne} className="w-full h-full" />
            </div>
            <div className="w-1/2 grid grid-cols-2 gap-4">
              <img
                src={imageApresentationTwo}
                className="w-[14rem] h-[12rem]"
              />
              <img
                src={imageApresentationThree}
                className="w-[14rem] h-[12rem]"
              />
              <img
                src={imageApresentationFour}
                className="w-[14rem] h-[12rem]"
              />
              <img
                src={imageApresentationFive}
                className="w-[14rem] h-[12rem]"
              />
            </div>
          </div>
        </section>
        <section className="h-[40rem] w-full flex flex-col items-center justify-center ">
          <h1 className="text-shadow-sale text-[3rem] font-playfairDisplay">
            SALE
          </h1>
          <div className="flex items-center justify-center h-[30rem] w-full overflow-hidden">
            <div className="flex flex-col items-center justify-center w-[16rem] h-[26rem] gap-1">
              <div className="bg-red-600 text-white text-center px-6 py-[0.1rem] font-playfairDisplay mb-2">
                SALE
              </div>
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} />
              </div>
              <h2 className="text-2xl font-italiana">Brilho Real</h2>
              <p className="text-[0.9rem] w-[15rem] h-[3rem] text-center font-baskervville">
                Com um desgin minimalista, ele destaca a beleza natural
              </p>
              <p className="text-[0.8rem] font-playfairDisplay line-through">
                R$ 5.254,99
              </p>
              <p className="font-playfairDisplay">R$ 5.192,00</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[16rem] h-[26rem] gap-1">
              <div className="bg-red-600 text-white text-center px-6 py-[0.1rem] font-playfairDisplay mb-2">
                SALE
              </div>
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} />
              </div>
              <h2 className="text-2xl font-italiana">Brilho Real</h2>
              <p className="text-[0.9rem] w-[15rem] h-[3rem] text-center font-baskervville">
                Com um desgin minimalista, ele destaca a beleza natural
              </p>
              <p className="text-[0.8rem] font-playfairDisplay line-through">
                R$ 5.254,99
              </p>
              <p className="font-playfairDisplay">R$ 5.192,00</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[16rem] h-[26rem] gap-1">
              <div className="bg-red-600 text-white text-center px-6 py-[0.1rem] font-playfairDisplay mb-2">
                SALE
              </div>
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} />
              </div>
              <h2 className="text-2xl font-italiana">Brilho Real</h2>
              <p className="text-[0.9rem] w-[15rem] h-[3rem] text-center font-baskervville">
                Com um desgin minimalista, ele destaca a beleza natural
              </p>
              <p className="text-[0.8rem] font-playfairDisplay line-through">
                R$ 5.254,99
              </p>
              <p className="font-playfairDisplay">R$ 5.192,00</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[16rem] h-[26rem] gap-1">
              <div className="bg-red-600 text-white text-center px-6 py-[0.1rem] font-playfairDisplay mb-2">
                SALE
              </div>
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} />
              </div>
              <h2 className="text-2xl font-italiana">Brilho Real</h2>
              <p className="text-[0.9rem] w-[15rem] h-[3rem] text-center font-baskervville">
                Com um desgin minimalista, ele destaca a beleza natural
              </p>
              <p className="text-[0.8rem] font-playfairDisplay line-through">
                R$ 5.254,99
              </p>
              <p className="font-playfairDisplay">R$ 5.192,00</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-white w-[16rem] h-[26rem] gap-1">
              <div className="bg-red-600 text-white text-center px-6 py-[0.1rem] font-playfairDisplay mb-2">
                SALE
              </div>
              <div className="bg-black w-[12.5rem] h-[14rem]">
                <img src={anelJPEG} />
              </div>
              <h2 className="text-2xl font-italiana">Brilho Real</h2>
              <p className="text-[0.9rem] w-[15rem] h-[3rem] text-center font-baskervville">
                Com um desgin minimalista, ele destaca a beleza natural
              </p>
              <p className="text-[0.8rem] font-playfairDisplay line-through">
                R$ 5.254,99
              </p>
              <p className="font-playfairDisplay">R$ 5.192,00</p>
            </div>
          </div>
          <div className="bg-white flex items-center justify-center h-10 border-[1px] border-black shadow-xl">
            <button className="flex items-center justify-center w-[10rem] font-libreBaskerville">
              VER TODOS
            </button>
          </div>
        </section>
        <section className="flex items-center justify-center w-full h-[34rem]">
          <div className="bg-white h-[28rem] w-[60rem]">
            <img src={imageApresentationSix} className="w-full h-full" />
          </div>
        </section>
        <footer className="flex items-center justify-center bg-primary-red100 w-full h-[14rem] px-14">
          <div className="flex font-baskervville flex-col items-center justify-center text-center text-xs">
            <h1 className="text-white text-sm">ATENDIMENTO</h1>
            <p className="text-white">Acompanhe o Seu Pedido</p>
            <p className="text-white">Whatsapp</p>
            <p className="text-white">Marketplace e Parcerias</p>
          </div>
          <div className="flex font-baskervville flex-col items-center justify-center text-center text-sm">
            <h1 className="text-white mb-4 text-xl">TROCA FÁCIL</h1>
            <p className="text-white">
              NÃO SERVIU? A NIKITA FAZ A TROCA GRATUITAMENTE.
            </p>
          </div>
          <div className="flex font-baskervville flex-col items-center justify-center text-center text-sm">
            <h1 className="text-white mb-4 text-xl">ENTREGA</h1>
            <p className="text-white">
              FRETE GRÁTIS EM SUAS COMPRAS A PARTIR DE R$200.00.
            </p>
            <div className="font-baskervville text-white items-center justify-center text-center text-sm mt-4">
              <h1>NIKITA</h1>
              <p>Redes Sociais</p>
              <div className="flex items-center justify-center gap-2">
                <img src={whatsappICON} />
                <img src={instagramICON} />
              </div>
            </div>
          </div>
          <div className="flex font-baskervville flex-col items-center justify-center text-center text-sm">
            <h1 className="text-white mb-4 text-xl">PARCELAMENTO</h1>
            <p className="text-white">
              PARCELE SUAS COMPRAS EM 10X SEM JUROS NO CARTÃO.
            </p>
          </div>
          <div className="flex font-baskervville flex-col items-center justify-center text-center text-xs">
            <h1 className="text-white text-sm">INFORMAÇÕES</h1>
            <p className="text-white">Política de Troca</p>
            <p className="text-white">Formas de Pagamento</p>
            <p className="text-white">Regulamento GiftBack</p>
            <p className="text-white">Cartão Presente</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
