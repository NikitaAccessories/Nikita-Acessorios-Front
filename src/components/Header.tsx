import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPNG from "../assets/elements-Home/logo.png";
import shoppingBagICON from "../assets/elements-Home/icons/shoopingBag.png";
import searchICON from "../assets/elements-Home/icons/search.png";
import locationICON from "../assets/elements-Home/icons/location.png";
import menuICON from "../assets/elements-Home/icons/menuButton.png";
import closedICON from "../assets/elements-Home/icons/closedICON.png";
import bijuteriaPrataICON from "../assets/elements-Home/icons/bijuteriaPrataICON.jpeg";
import prata925ICON from "../assets/elements-Home/icons/prata925ICON.jpeg";
import semiJoiaDouradaICON from "../assets/elements-Home/icons/semiJoiaDouradaICON.jpeg";
import semiJoiaMistaICON from "../assets/elements-Home/icons/semiJoiaMistaICON.jpeg";
import semiJoiaRoseICON from "../assets/elements-Home/icons/semiJoiaRoseICON.jpeg";
import imageJoiaCard1 from "../assets/elements-Home/imagesCardsHeader/imageJoiaCard1.jpeg";
import imageJoiaCard2 from "../assets/elements-Home/imagesCardsHeader/imageJoiaCard2.jpeg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 bg-primary-beige100 w-full flex flex-col items-center justify-center">
      <nav className="flex items-center justify-center w-full px-4 py-2 md:px-10 lg:px-20">
        {/* Botão de menu visível apenas no mobile */}
        <div className="md:hidden flex items-center absolute left-5">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={menuICON} alt="" />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center gap-5">
          <span className="font-playfairDisplay cursor-pointer">DELIVERY</span>
          <span className="font-playfairDisplay cursor-pointer">CONTATO</span>
        </div>
        {/* Logo centralizado no mobile e à esquerda no desktop */}
        <Link to={"/"} className="md:mx-auto">
          <img src={logoPNG} width="120" alt="Logo PNG" className="mx-auto" />
        </Link>

        <div className="hidden md:flex items-center justify-center gap-5">
          <span className="font-playfairDisplay cursor-pointer w-28">
            Olá, faça login ou cadastre-se.
          </span>
          <img
            src={shoppingBagICON}
            className="cursor-pointer"
            alt="shopping bag icon"
          />
        </div>
      </nav>

      {/* Barra de navegação inferior visível apenas em desktops */}
      <div className="bg-primary-beige50 mt-2 w-full h-11 flex justify-center hidden md:flex">
        <ul className="md:flex items-center justify-center">
          {/* Item 1 */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            JÓIAS
            <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="bg-white border-t-2 border-primary-red100 p-4 shadow-lg flex justify-center space-x-20">
                <div className="text-black">
                  <h2 className="mb-2">JÓIAS</h2>
                  <p className="bg-primary-red100 h-[2px] w-[6rem] mb-10"></p>
                  <ul className="space-y-4">
                    <li>ANÉIS</li>
                    <li>CORRENTES</li>
                    <li>COLARES</li>
                    <li>PULSEIRAS</li>
                    <li>BRINCOS</li>
                    <li>PIERCINGS</li>
                    <li>CONJUNTOS</li>
                    <li>PINGENTES</li>
                    <li>SALE</li>
                    <li>VER TODOS</li>
                  </ul>
                </div>
                <div className="text-black flex flex-col items-start">
                  <h2 className="mb-2">MATERIAL</h2>
                  <p className="bg-primary-red100 h-[2px] w-[6rem] mb-10"></p>
                  <ul className="space-y-4 items-start">
                    <li className="flex items-center w-[12rem]">
                      <img src={semiJoiaDouradaICON} alt="" className="mr-2" />
                      <span>semi joia dourada</span>
                    </li>
                    <li className="flex items-center w-[12rem]">
                      <img src={semiJoiaRoseICON} alt="" className="mr-2" />
                      <span>semi joia rose</span>
                    </li>
                    <li className="flex items-center w-[12rem]">
                      <img src={prata925ICON} alt="" className="mr-2" />
                      <span>prata 925</span>
                    </li>
                    <li className="flex items-center w-[12rem]">
                      <img src={semiJoiaMistaICON} alt="" className="mr-2" />
                      <span>semi joia mista</span>
                    </li>
                    <li className="flex items-center w-[12rem]">
                      <img src={semiJoiaDouradaICON} alt="" className="mr-2" />
                      <span>bijuteria dourada</span>
                    </li>
                    <li className="flex items-center w-[12rem]">
                      <img src={bijuteriaPrataICON} alt="" className="mr-2" />
                      <span>bijuteria prata</span>
                    </li>
                  </ul>
                </div>

                <div className="text-black flex relative top-20 gap-10">
                  <div className="w-[15rem] h-[12.5rem]">
                    <img className="mb-4" src={imageJoiaCard1} alt="" />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSOS BRINCOS</h1>
                    </div>
                  </div>

                  <div className="w-[15rem] h-[12.5rem]">
                    <img className="mb-4" src={imageJoiaCard2} alt="" />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSOS COLARES</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Item 2 */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            ACESSÓRIOS
            <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="bg-white border-t-2 border-primary-red100 p-4 w-[300px] shadow-lg">
                {/* Adicione seu conteúdo aqui */}
              </div>
            </div>
          </li>

          {/* Item 3 */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            COLEÇÕES
            <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="bg-white border-t-2 border-primary-red100 p-4 w-[300px] shadow-lg">
                {/* Adicione seu conteúdo aqui */}
              </div>
            </div>
          </li>

          {/* Item 4 */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            MAIS VENDIDOS
            <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="bg-white border-t-2 border-primary-red100 p-4 w-[300px] shadow-lg">
                {/* Adicione seu conteúdo aqui */}
              </div>
            </div>
          </li>

          {/* Item 5 */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            PRESENTES
            <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <div className="bg-white border-t-2 border-primary-red100 p-4 w-[300px] shadow-lg">
                {/* Adicione seu conteúdo aqui */}
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Campo de inserção de CEP apenas em mobile */}
      <div className="bg-primary-beige50 w-full h-12 flex justify-between items-center px-4 md:hidden">
        <div className="flex items-center gap-2">
          <img src={locationICON} className="w-5 h-5" alt="Location Icon" />
          <span className="text-sm font-playfairDisplay">informe seu CEP</span>
        </div>
        <div className="flex items-center">
          <img
            src={searchICON}
            className="w-5 h-5 cursor-pointer"
            alt="Search Icon"
          />
          <span className="text-sm font-playfairDisplay">Buscar</span>

          <img
            src={shoppingBagICON}
            className="w-6 h-6 mx-5 cursor-pointer"
            alt="Shopping bag icon"
          />
        </div>
      </div>

      {/* Menu lateral para mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-primary-beige100 shadow-lg z-50">
          <div className="flex justify-between p-4">
            <span className="text-2xl font-bold">Menu</span>
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={closedICON} alt="" />
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            <li className="cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              JÓIAS
            </li>
            <li className="cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              ACESSÓRIOS
            </li>
            <li className="cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              COLEÇÕES
            </li>
            <li className="cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              MAIS VENDIDOS
            </li>
            <li className="cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              PRESENTES
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
