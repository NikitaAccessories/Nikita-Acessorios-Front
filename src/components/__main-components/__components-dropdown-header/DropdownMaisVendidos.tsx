import React from "react";
import imageMaisVendidos1 from "../../../assets/elements-Home/imagesCardsHeader/imageMaisVendidos1.jpeg";
import imageMaisVendidos2 from "../../../assets/elements-Home/imagesCardsHeader/imageMaisVendidos2.jpeg";

const DropdownMaisVendidos: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default DropdownMaisVendidos;
