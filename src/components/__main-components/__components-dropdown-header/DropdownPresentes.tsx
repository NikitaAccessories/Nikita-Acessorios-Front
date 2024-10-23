import React from "react";
import imagePresentes1 from "../../../assets/elements-Home/imagesCardsHeader/imagePresentes1.jpg";
import imagePresentes2 from "../../../assets/elements-Home/imagesCardsHeader/imagePresentes2.jpeg";

const DropdownPresentes: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default DropdownPresentes;
