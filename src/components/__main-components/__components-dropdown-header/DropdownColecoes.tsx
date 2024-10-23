import React from "react";
import imageColecao1 from "../../../assets/elements-Home/imagesCardsHeader/imageColecao1.jpg";
import imageColecao2 from "../../../assets/elements-Home/imagesCardsHeader/imageColecao2.png";

const DropdownColecoes: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default DropdownColecoes;
