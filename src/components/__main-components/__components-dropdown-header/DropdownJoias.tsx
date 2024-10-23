import React from "react";
import bijuteriaPrataICON from "../../../assets/elements-Home/icons/bijuteriaPrataICON.jpeg";
import prata925ICON from "../../../assets/elements-Home/icons/prata925ICON.jpeg";
import semiJoiaDouradaICON from "../../../assets/elements-Home/icons/semiJoiaDouradaICON.jpeg";
import semiJoiaMistaICON from "../../../assets/elements-Home/icons/semiJoiaMistaICON.jpeg";
import semiJoiaRoseICON from "../../../assets/elements-Home/icons/semiJoiaRoseICON.jpeg";
import imageJoiaCard1 from "../../../assets/elements-Home/imagesCardsHeader/imageJoiaCard1.jpeg";
import imageJoiaCard2 from "../../../assets/elements-Home/imagesCardsHeader/imageJoiaCard2.jpeg";

const DropdownJoias: React.FC = () => {
  return (
    <>
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
                    <img src={semiJoiaDouradaICON} alt="" className="mr-2" />
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
                    <img src={semiJoiaDouradaICON} alt="" className="mr-2" />
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
    </>
  );
};

export default DropdownJoias;
