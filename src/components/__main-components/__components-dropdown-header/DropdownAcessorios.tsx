import React from "react";
import imageAcessorio1 from "../../../assets/elements-Home/imagesCardsHeader/imageAcessorios1.jpeg";
import imageAcessorio2 from "../../../assets/elements-Home/imagesCardsHeader/imageAcessorios2.jpeg";

const DropdownAcessorios: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default DropdownAcessorios;
