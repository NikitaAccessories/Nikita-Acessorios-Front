import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../GlobalStylesForComponents.css";
import logoPNG from "../../assets/elements-Home/logo.png";
import shoppingBagICON from "../../assets/elements-Home/icons/shoopingBag.png";
import searchICON from "../../assets/elements-Home/icons/search.png";
import locationICON from "../../assets/elements-Home/icons/location.png";
import menuICON from "../../assets/elements-Home/icons/menuButton.png";
import closedICON from "../../assets/elements-Home/icons/closedICON.png";
import bijuteriaPrataICON from "../../assets/elements-Home/icons/bijuteriaPrataICON.jpeg";
import prata925ICON from "../../assets/elements-Home/icons/prata925ICON.jpeg";
import semiJoiaDouradaICON from "../../assets/elements-Home/icons/semiJoiaDouradaICON.jpeg";
import semiJoiaMistaICON from "../../assets/elements-Home/icons/semiJoiaMistaICON.jpeg";
import semiJoiaRoseICON from "../../assets/elements-Home/icons/semiJoiaRoseICON.jpeg";
import imageJoiaCard1 from "../../assets/elements-Home/imagesCardsHeader/imageJoiaCard1.jpeg";
import imageJoiaCard2 from "../../assets/elements-Home/imagesCardsHeader/imageJoiaCard2.jpeg";
import imageAcessorio1 from "../../assets/elements-Home/imagesCardsHeader/imageAcessorios1.jpeg";
import imageAcessorio2 from "../../assets/elements-Home/imagesCardsHeader/imageAcessorios2.jpeg";
import imageColecao1 from "../../assets/elements-Home/imagesCardsHeader/imageColecao1.jpg";
import imageColecao2 from "../../assets/elements-Home/imagesCardsHeader/imageColecao2.png";
import imageMaisVendidos1 from "../../assets/elements-Home/imagesCardsHeader/imageMaisVendidos1.jpeg";
import imageMaisVendidos2 from "../../assets/elements-Home/imagesCardsHeader/imageMaisVendidos2.jpeg";
import imagePresentes1 from "../../assets/elements-Home/imagesCardsHeader/imagePresentes1.jpg";
import imagePresentes2 from "../../assets/elements-Home/imagesCardsHeader/imagePresentes2.jpeg";
import arrowBottom from "../../assets/elements-Home/icons/arrow-bottomICON.png";
import userICON from "../../assets/elements-Home/icons/userICON.png";

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
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            JÓIAS
            {/* Dropdown */}
            <div className="w-[65rem] py-4 absolute -left-[15rem] top-full mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block hover:opacity-100 hover:visible transition-opacity duration-300 ease-out cursor-default">
              <div className="bg-white h-[35rem] border-t-2 border-primary-red100 p-4 shadow-lg flex justify-center space-x-20">
                <div className="pl-20 grid grid-cols-2">
                  <div className="text-black cursor-default">
                    <h2 className="mb-2 pt-2">JÓIAS</h2>
                    <p className="bg-primary-red100 h-[2px] w-[3rem] mb-6"></p>
                    <ul className="space-y-4 cursor-default">
                      <li>ANÉIS</li>
                      <li>CORRENTES</li>
                      <li>COLARES</li>
                      <li>PULSEIRAS</li>
                      <li>BRINCOS</li>
                      <li>PIERCINGS</li>
                      <li>CONJUNTOS</li>
                      <li>PINGENTES</li>
                      <li className="text-primary-red100">SALE</li>
                      <li>VER TODOS</li>
                    </ul>
                  </div>

                  <div className="text-black flex flex-col items-start cursor-default">
                    <h2 className="mb-2 pt-2">MATERIAL</h2>
                    <p className="bg-primary-red100 h-[2px] w-[5rem] mb-6"></p>
                    <ul className="w-[12rem] space-y-4 items-start cursor-default">
                      <li className="flex items-center ">
                        <img
                          src={semiJoiaDouradaICON}
                          alt=""
                          className="mr-2"
                        />
                        <span>semi joia dourada</span>
                      </li>
                      <li className="flex items-center ">
                        <img src={semiJoiaRoseICON} alt="" className="mr-2" />
                        <span>semi joia rose</span>
                      </li>
                      <li className="flex items-center ">
                        <img src={prata925ICON} alt="" className="mr-2" />
                        <span>prata 925</span>
                      </li>
                      <li className="flex items-center ">
                        <img src={semiJoiaMistaICON} alt="" className="mr-2" />
                        <span>semi joia mista</span>
                      </li>
                      <li className="flex items-center ">
                        <img
                          src={semiJoiaDouradaICON}
                          alt=""
                          className="mr-2"
                        />
                        <span>bijuteria dourada</span>
                      </li>
                      <li className="flex items-center ">
                        <img src={bijuteriaPrataICON} alt="" className="mr-2" />
                        <span>bijuteria prata</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-black flex relative top-20 gap-10 cursor-default">
                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageJoiaCard1}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSOS BRINCOS</h1>
                    </div>
                  </div>

                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageJoiaCard2}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSOS COLARES</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Item 2 - ACESSÓRIOS */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            ACESSÓRIOS
            {/* Dropdown */}
            <div className="w-[65rem] py-4 absolute -left-[20rem] top-full mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block hover:opacity-100 hover:visible transition-opacity duration-300 ease-out cursor-default">
              <div className="bg-white h-[35rem] border-t-2 border-primary-red100 p-4 shadow-lg flex justify-center space-x-20">
                <div className="pl-16 grid grid-cols-2">
                  <div className="text-black cursor-default">
                    <h2 className="mb-2 pt-2">ACESSÓRIOS</h2>
                    <p className="bg-primary-red100 h-[2px] w-[6rem] mb-6"></p>
                    <ul className="space-y-4 cursor-default">
                      <li>BOLSAS</li>
                      <li>CARTEIRAS</li>
                      <li>CHAPEUS</li>
                      <li>LAÇOS</li>
                      <li>PRESILIAS</li>
                      <li>CINTOS</li>
                      <li>PORTA JOIAS</li>
                      <li>OCULOS</li>
                      <li>VER TODOS</li>
                    </ul>
                  </div>

                  <div className="text-black flex flex-col items-start cursor-default">
                    <h2 className="mb-2 pt-2">SELEÇÃO ESPECIAL</h2>
                    <p className="bg-primary-red100 h-[2px] w-[9.5rem] mb-6"></p>
                    <ul className="space-y-4 items-start cursor-default">
                      <li className="flex items-center w-[12rem]">
                        <span>escapulários</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>religiosos</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>infantis</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>personalizados</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-black flex relative top-20 gap-10 cursor-default">
                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageAcessorio1}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSOS OCULOS</h1>
                    </div>
                  </div>

                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageAcessorio2}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSAS BOLSAS</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Item 3 - COLEÇÕES */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            COLEÇÕES
            {/* Dropdown */}
            <div className="w-[55rem] py-4 absolute -left-[20rem] top-full mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block hover:opacity-100 hover:visible transition-opacity duration-300 ease-out cursor-default">
              <div className="bg-white h-[35rem] border-t-2 border-primary-red100 p-4 shadow-lg flex justify-center space-x-20">
                <div className="pl-20 grid grid-cols-2">
                  <div className="text-black cursor-default">
                    <h2 className="mb-2 pt-2">JOIAS</h2>
                    <p className="bg-primary-red100 h-[2px] w-[3rem] mb-6"></p>
                    <ul className="w-[6rem] space-y-4 cursor-default">
                      <li>ANEIS</li>
                      <li>CORRENTES</li>
                      <li>COLARES</li>
                      <li>PULSEIRAS</li>
                      <li>BRINCOS</li>
                      <li>PIERNCINGS</li>
                      <li>CONJUNTOS</li>
                      <li>PINGENTES</li>
                      <li>SALE</li>
                      <li>VER TODOS</li>
                    </ul>
                  </div>
                </div>

                <div className="pl-28 text-black flex relative top-20 gap-10 cursor-default">
                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageColecao1}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSOS BRINCOS</h1>
                    </div>
                  </div>

                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageColecao2}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1>EXPLORE NOSSOS COLARES</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Item 4 - MAIS VENDIDOS */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            MAIS VENDIDOS
            {/* Dropdown */}
            <div className="w-[55rem] py-4 absolute -left-[30rem] top-full mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block hover:opacity-100 hover:visible transition-opacity duration-300 ease-out cursor-default">
              <div className="bg-white h-[35rem] border-t-2 border-primary-red100 p-4 shadow-lg flex justify-center space-x-20">
                <div className="pl-20 grid grid-cols-2">
                  <div className="text-black cursor-default">
                    <h2 className="mb-2 pt-2 w-[8rem]">MAIS VENDIDOS</h2>
                    <p className="bg-primary-red100 h-[2px] w-[8rem] mb-6"></p>
                    <ul className="space-y-4 cursor-default">
                      <li>ANEIS</li>
                      <li>COLARES</li>
                      <li>PULSEIRAS</li>
                      <li>BRINCOS</li>
                      <li>PIERNCINGS</li>
                      <li>CONJUNTOS</li>
                      <li>BOLSAS</li>
                      <li>CARTEIRAS</li>
                      <li>CHAPEUS</li>
                      <li>SALE</li>
                    </ul>
                  </div>
                </div>

                <div className="pl-28 text-black flex relative top-20 gap-10 cursor-default">
                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageMaisVendidos1}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1 className="text-sm">EXPLORE NOSSOS BEST SELLERS</h1>
                    </div>
                  </div>

                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imageMaisVendidos2}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1 className="text-sm">EXPLORE NOSSAS PROMOÇÕES</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Item 5 - PRESENTES */}
          <li className="relative group mx-5 cursor-pointer font-playfairDisplay hover:text-primary-red100 ease-out duration-300">
            PRESENTES
            {/* Dropdown */}
            <div className="w-[65rem] py-4 absolute -left-[45rem] top-full mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:block hover:opacity-100 hover:visible transition-opacity duration-300 ease-out cursor-default">
              <div className="bg-white h-[35rem] border-t-2 border-primary-red100 p-4 shadow-lg flex justify-center space-x-20">
                <div className="pl-10 grid grid-cols-2">
                  <div className="text-black cursor-default">
                    <h2 className="mb-2">PRESENTES</h2>
                    <p className="bg-primary-red100 h-[2px] w-[6rem] mb-6"></p>
                    <ul className="space-y-4 cursor-default">
                      <li>ESCOLHA O PRESENTE PERFEITO</li>
                      <li>MONTE SEU PRESENTE</li>
                      <li>PRESENTES DE ANIVERSÁRIO</li>
                    </ul>
                  </div>

                  <div className="text-black flex flex-col items-start cursor-default">
                    <h2 className="mb-2">KITS PARA PRESENTE</h2>
                    <p className="bg-primary-red100 h-[2px] w-[10rem] mb-6"></p>
                    <ul className="space-y-4 items-start cursor-default">
                      <li className="flex items-center w-[12rem]">
                        <span>KITS MASCULINOS</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>KITS FEMININOS</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>KITS INFANTIS</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-black flex flex-col items-start cursor-default pt-6">
                    <h2 className="mb-2">SELEÇÃO ESPECIAL</h2>
                    <p className="bg-primary-red100 h-[2px] w-[9.5rem] mb-6"></p>
                    <ul className="space-y-4 items-start cursor-default">
                      <li className="flex items-center w-[12rem]">
                        <span>presentes masculinos</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>presentes femininos</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>presentes adoslescente</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>presentes crianças</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>personalizados</span>
                      </li>
                    </ul>
                  </div>

                  <div className="text-black flex flex-col items-start cursor-default pt-6">
                    <h2 className="mb-2">POR FAIXA DE PREÇO</h2>
                    <p className="bg-primary-red100 h-[2px] w-[10rem] mb-6"></p>
                    <ul className="space-y-4 items-start cursor-default">
                      <li className="flex items-center w-[12rem]">
                        <span>até 50 reais</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>até 100 reais</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>até 160 reais</span>
                      </li>
                      <li className="flex items-center w-[12rem]">
                        <span>até 200 reais</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-black flex relative top-20 gap-10 cursor-default">
                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imagePresentes1}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1 className="text-sm">CRIE SEU KIT PARA PRESENTEAR</h1>
                    </div>
                  </div>

                  <div className="w-[15rem] h-[15rem]">
                    <img
                      className="mb-4 w-full h-full"
                      src={imagePresentes2}
                      alt=""
                    />
                    <div className="w-[15rem] h-[3.5rem] border-2 border-primary-red100 flex justify-center items-center">
                      <h1 className="text-sm">PERSONALIZE SEUS PEDIDOS</h1>
                    </div>
                  </div>
                </div>
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
