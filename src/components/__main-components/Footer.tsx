import React from "react";
import { Link } from "react-router-dom";
import whatsappICON from "../../assets/elements-Home/icons/whatsapp-icon.png";
import instagramICON from "../../assets/elements-Home/icons/instragram-icon.png";
import truckICON from "../../assets/elements-Home/icons/truck.png";
import cardICON from "../../assets/elements-Home/icons/card.png";
import trocaICON from "../../assets/elements-Home/icons/troca.png";
import "../GlobalStylesForComponents.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-red100 w-full p-4 flex flex-col items-center justify-center text-white md:flex-row md:space-y-0 md:h-[14rem]">
      {/* Layout mobile (visible on mobile) */}

      <div className="flex flex-col space-y-8 w-full md:hidden mt-4">
        <div className="bg-white h-full w-full px-8 py-4 space-y-8">
          <div className="flex flex-col items-center justify-center text-center text-black font-baskervville space-y-2">
            <img src={trocaICON} alt="" />
            <h1 className="text-xl font-bold">TROCA FÁCIL</h1>
            <p>NÃO SERVIU? A NIKITA FAZ A TROCA GRATUITAMENTE.</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center text-black font-baskervville space-y-2">
            <img src={truckICON} alt="" />
            <h1 className="text-xl font-bold">ENTREGA</h1>
            <p>FRETE GRÁTIS EM SUAS COMPRAS A PARTIR DE R$200.00.</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center text-black font-baskervville space-y-2">
            <img src={cardICON} alt="" />
            <h1 className="text-xl font-bold">PARCELAMENTO</h1>
            <p>PARCELE SUAS COMPRAS EM 10X SEM JUROS NO CARTÃO.</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-xs space-y-1 font-playfairDisplay">
          <h1 className="font-bold">NOSSA EMPRESA</h1>
          <p>Sobre a Nikita</p>
          <p>Blog</p>
          <p>Política de Troca</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-xs space-y-1 font-playfairDisplay">
          <h1 className="font-bold">ATENDIMENTO</h1>
          <p>Acompanhe o Seu Pedido</p>
          <p>Whatsapp</p>
          <p>Marketplace e Parcerias</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-xs space-y-1 font-playfairDisplay">
          <h1 className="font-bold">INFORMAÇÕES</h1>
          <p>Política de Troca</p>
          <p>Formas de Pagamento</p>
          <p>Regulamento GiftBack</p>
          <p>Cartão Presente</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-xs space-y-2 w-full max-w-md font-playfairDisplay">
          <h1 className="text-sm font-bold font-playfairDisplay">SAC</h1>
          <p className="font-libreBaskerville">+55 (83) 98787-5071</p>
          <p>atendimento@nikita.com.br</p>
          <p>FORTALEZA - CE</p>

          <h1 className="text-sm font-bold mt-4 text-xl">
            FORMAS DE PAGAMENTO
          </h1>
          <div className="flex space-x-4">
            <div className="w-12 h-6 bg-white"></div>
            <div className="w-12 h-6 bg-white"></div>
            <div className="w-12 h-6 bg-white"></div>
            <div className="w-12 h-6 bg-white"></div>
            <div className="w-12 h-6 bg-white"></div>
          </div>
        </div>
      </div>

      {/* Layout desktop (hidden on mobile) */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-center w-full md:space-x-16">
        {/* Coluna 1 - Atendimento */}
        <div className="flex flex-col items-center justify-center text-center text-xs space-y-2 w-full md:w-[15rem] font-playfairDisplay">
          <h1 className="text-sm font-bold">ATENDIMENTO</h1>
          <p>Acompanhe o Seu Pedido</p>
          <p>Whatsapp</p>
          <p>Marketplace e Parcerias</p>
        </div>

        {/* Coluna 2 - Troca Fácil */}
        <div className="flex flex-col items-center justify-center text-center text-sm space-y-2 w-full md:w-[15rem] font-baskervville">
          <h1 className="text-xl mb-4 font-bold">TROCA FÁCIL</h1>
          <p>NÃO SERVIU? A NIKITA FAZ A TROCA GRATUITAMENTE.</p>
        </div>

        {/* Coluna 3 - Entrega e Redes Sociais */}
        <div className="flex flex-col items-center justify-center text-center text-sm space-y-2 w-full md:w-[15rem] font-baskervville">
          <h1 className="text-xl mb-4 font-bold">ENTREGA</h1>
          <p>FRETE GRÁTIS EM SUAS COMPRAS A PARTIR DE R$200.00.</p>
          <div className="mt-4">
            <h1 className="font-bold">NIKITA</h1>
            <p>Redes Sociais</p>
            <div className="flex justify-center gap-2 mt-2">
              <a href="">
                <img
                  className="w-6 h-6 cursor-pointer"
                  src={whatsappICON}
                  alt="Whatsapp"
                />
              </a>
              <a href="https://www.instagram.com/nikitaacessoriosoficial?igsh=MXVsbHBkcG9iODZncg==">
                <img
                  className="w-6 h-6 cursor-pointer"
                  src={instagramICON}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Coluna 4 - Parcelamento */}
        <div className="flex flex-col items-center justify-center text-center text-sm space-y-2 w-full md:w-[15rem] font-baskervville">
          <h1 className="text-xl mb-4 font-bold">PARCELAMENTO</h1>
          <p>PARCELE SUAS COMPRAS EM 10X SEM JUROS NO CARTÃO.</p>
        </div>

        {/* Coluna 5 - Informações */}
        <div className="flex flex-col items-center justify-center text-center text-xs space-y-2 w-full md:w-[15rem] font-playfairDisplay">
          <h1 className="text-sm font-bold">INFORMAÇÕES</h1>
          <p>Política de Troca</p>
          <p>Formas de Pagamento</p>
          <p>Regulamento GiftBack</p>
          <p>Cartão Presente</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
