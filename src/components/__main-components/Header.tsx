import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPNG from "../../assets/elements-Home/logo.png";
import shoppingBagICON from "../../assets/elements-Home/icons/shoopingBag.png";
import searchICON from "../../assets/elements-Home/icons/search.png";
import locationICON from "../../assets/elements-Home/icons/location.png";
import menuICON from "../../assets/elements-Home/icons/menuButton.png";
import closedICON from "../../assets/elements-Home/icons/closedICON.png";
import arrowBottom from "../../assets/elements-Home/icons/arrow-bottomICON.png";
import userICON from "../../assets/elements-Home/icons/userICON.png";
import DropdownJoias from "./__components-dropdown-header/DropdownJoias";
import DropdownAcessorios from "./__components-dropdown-header/DropdownAcessorios";
import DropdownColecoes from "./__components-dropdown-header/DropdownColecoes";
import DropdownMaisVendidos from "./__components-dropdown-header/DropdownMaisVendidos";
import DropdownPresentes from "./__components-dropdown-header/DropdownPresentes";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 bg-primary-beige100 w-full flex flex-col items-center justify-center">
      <nav className="flex items-center justify-center w-full px-4 py-4 md:px-10 lg:px-20">
        {/* Botão de menu visível apenas no mobile */}
        <div className="md:hidden flex items-center absolute left-5">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={menuICON} width="30" alt="" />
          </button>
        </div>

        <div className="hidden md:flex items-center justify-center gap-5">
          <span className="font-playfairDisplay cursor-pointer">DELIVERY</span>
          <span className="font-playfairDisplay cursor-pointer">CONTATO</span>
        </div>
        {/* Logo centralizado no mobile e à esquerda no desktop */}
        <Link to={"/"} className="md:mx-auto animate-slide-down z-50">
          <img
            src={logoPNG}
            width="120"
            alt="Logo PNG"
            className="mx-auto md:ml-0"
          />
        </Link>

        <div className="hidden md:flex items-center justify-center gap-5">
          <Link to={"/AccountPage"}>
            <h3 className="font-playfairDisplay cursor-pointer w-22">
              Olá, faça login ou cadastre-se.
            </h3>
          </Link>
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
          {/* Item 1 - JÓIAS */}
          <DropdownJoias />

          {/* Item 2 - ACESSÓRIOS */}
          <DropdownAcessorios/>

          {/* Item 3 - COLEÇÕES */}
          <DropdownColecoes/>

          {/* Item 4 - MAIS VENDIDOS */}
          <DropdownMaisVendidos/>

          {/* Item 5 - PRESENTES */}
          <DropdownPresentes/>
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
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-primary-beige100 shadow-lg z-50 flex items-center justify-center transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="absolute right-8 top-24 z-50">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={closedICON} className="w-[2rem]" alt="Fechar menu" />
            </button>
          </div>

          {/* Logo acima da lista */}
          <div className="absolute top-32 left-0 right-0 flex justify-center">
            <Link to={"/"}>
              <img src={logoPNG} alt="Logo PNG" className="w-[14rem] mx-auto" />
            </Link>
          </div>

          {/* Lista de itens do menu */}
          <ul className="flex flex-col p-4 space-y-14 items-center justify-center text-2xl h-full mt-24 font-playfairDisplay">
            {" "}
            {/* Espaçamento extra acima da lista */}
            <li>
              <Link to={"/AccountPage"}>
                <div className="flex items-center text-xl space-x-2">
                  <img
                    src={userICON}
                    alt="Ícone de usuário"
                    className="w-8 h-8"
                  />
                  <h2>Olá, Entre ou Cadastre-se</h2>
                </div>
              </Link>
              <div className="mt-1 w-full h-[1px] bg-black"></div>
            </li>
            <li className="flex justify-between w-[20rem] text-xl cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              <h1>JOIAS</h1>
              <img
                src={arrowBottom}
                alt="Seta para baixo"
                className="w-4 h-4"
              />
            </li>
            <li className="flex justify-between w-[20rem] text-xl cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              <h1>ACESSÓRIOS</h1>
              <img
                src={arrowBottom}
                alt="Seta para baixo"
                className="w-4 h-4"
              />
            </li>
            <li className="flex justify-between w-[20rem] text-xl cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              <h1>COLEÇÕES</h1>
              <img
                src={arrowBottom}
                alt="Seta para baixo"
                className="w-4 h-4"
              />
            </li>
            <li className="flex justify-between w-[20rem] text-xl cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              <h1>MAIS VENDIDOS</h1>
              <img
                src={arrowBottom}
                alt="Seta para baixo"
                className="w-4 h-4"
              />
            </li>
            <li className="flex justify-between w-[20rem] text-xl cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
              <h1>PRESENTES</h1>
              <img
                src={arrowBottom}
                alt="Seta para baixo"
                className="w-4 h-4"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
